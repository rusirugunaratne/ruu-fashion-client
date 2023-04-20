import { Avatar, Button, IconButton, Stack } from "@mui/material";
import MaterialReactTable from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { ENDPOINTS, createAPIEndpoint } from "../api";
function HomePage({ items, setItems }) {
  let selectedItems = items;
  const [allItems, setAllItems] = useState([]);

  const handleAddToCart = (item) => {
    if (items.findIndex((cartItem) => cartItem._id === item._id) === -1) {
      selectedItems.push(item);
      console.log("Selected rows:", selectedItems);
      setItems((i) => [...selectedItems]);
    }
  };

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.item)
      .fetch()
      .then((res) => {
        console.log(res.data);
        setAllItems(res.data);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        header: " ",
        maxSize: 20,
        Cell: ({ cell, row }) => {
          return (
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt=''
              src={row.original.itemImage}
            />
          );
        },
      },

      {
        accessorKey: "itemName",
        header: "Name",
        maxSize: 20,
      },
      {
        accessorKey: "itemQuantity",
        header: "Item Qty",
        maxSize: 10,
      },
      {
        accessorKey: "itemPrice",
        header: "Item Price",
        maxSize: 10,
      },
      {
        header: "Add to Cart",
        maxSize: 30,
        Cell: ({ cell, row }) => {
          return (
            <Button
              variant='contained'
              endIcon={<AddShoppingCartOutlinedIcon />}
              onClick={() => handleAddToCart(row.original)}
            >
              Add
            </Button>
          );
        },
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
        <MaterialReactTable columns={columns} data={allItems} />
      </Stack>
    </>
  );
}

export default HomePage;
