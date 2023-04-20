import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../api";

function Checkout({ items, setItems }) {
  const navigate = useNavigate();
  const [uniqueCode, setUniqueCode] = useState();

  useEffect(() => setUniqueCode(generateUniqueCode()), []);

  function generateUniqueCode() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    const code = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    setUniqueCode(code);
    return code;
  }

  const getTotalPrice = () => {
    let totalPrice = 0.0;
    items.forEach((item) => {
      totalPrice += item.itemPrice * item.selectedQuantity;
    });
    return totalPrice;
  };

  const completeOrder = () => {
    const shipment = { shippingNumber: uniqueCode };
    const postItems = [];
    items.forEach((item) =>
      postItems.push({
        shippingNumber: uniqueCode,
        itemCode: item.itemCode,
        itemName: item.itemName,
        itemQuantity: item.itemQuantity,
        selectedQuantity: item.selectedQuantity,
        itemPrice: item.itemPrice,
        itemImage: item.itemImage,
      })
    );
    items.forEach((item) => {
      item.itemQuantity = item.itemQuantity - item.selectedQuantity;
      createAPIEndpoint(ENDPOINTS.item).put(item._id, item);
    });
    postItems.forEach((postItem) => {
      createAPIEndpoint(ENDPOINTS.cartItem).post(postItem);
    });
    createAPIEndpoint(ENDPOINTS.shipment).post(shipment);
    navigate("/");
    setItems([]);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "itemName",
        header: "Name",
        maxSize: 20,
      },
      {
        accessorKey: "selectedQuantity",
        header: "Item Qty",
        maxSize: 10,
      },
      {
        accessorKey: "itemPrice",
        header: "Item Price",
        maxSize: 10,
      },
    ],
    []
  );

  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        marginTop={5}
      >
        <Typography variant='h8'>{`Shipping Number : ${uniqueCode}`}</Typography>
        <MaterialReactTable columns={columns} data={items} />
        <Typography variant='h4'>{`Sub total (LKR)  : ${getTotalPrice().toFixed(
          2
        )}`}</Typography>
        <Button
          onClick={() => completeOrder()}
          variant='contained'
          startIcon={<ChecklistIcon />}
        >
          Complete Order
        </Button>
      </Stack>
    </>
  );
}

export default Checkout;
