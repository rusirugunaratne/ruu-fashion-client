import { Button, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { useNavigate } from "react-router-dom";

function Checkout({ items, setItems }) {
  const navigate = useNavigate();

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
        <Typography variant='h8'>{`Shipping Number : ${generateUniqueCode()}`}</Typography>
        <MaterialReactTable columns={columns} data={items} />
        <Typography variant='h4'>{`Sub total (LKR)  : ${getTotalPrice()}`}</Typography>
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
