import { Avatar, Button, IconButton, Stack } from "@mui/material";
import MaterialReactTable from "material-react-table";
import { useMemo } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
function HomePage({ items, setItems }) {
  let selectedItems = items;

  const handleAddToCart = (item) => {
    if (items.findIndex((cartItem) => cartItem._id === item._id) === -1) {
      selectedItems.push(item);
      console.log("Selected rows:", selectedItems);
      setItems((i) => [...selectedItems]);
    }
  };

  const allItems = [
    {
      _id: 1,
      itemCode: "001",
      itemName: "Ladies Dress Pink",
      itemQuantity: 10,
      selectedQuantity: 0,
      itemPrice: 9.99,
      itemImage:
        "https://www.memorandum.com/wp-content/uploads/2015/11/wide-leg-gray-pinstripe-pants-alice-olivia-ivory-bow-tie-neck-blouse-everlane-modern-loafers-work-office-professional-women-style-fasion-blog-mary-orton-memorandum-61.jpg",
    },
    {
      _id: 2,
      itemCode: "002",
      itemName: "Item 2",
      itemQuantity: 5,
      selectedQuantity: 0,
      itemPrice: 14.99,
      itemImage:
        "https://www.memorandum.com/wp-content/uploads/2015/11/wide-leg-gray-pinstripe-pants-alice-olivia-ivory-bow-tie-neck-blouse-everlane-modern-loafers-work-office-professional-women-style-fasion-blog-mary-orton-memorandum-61.jpg",
    },
    {
      _id: 3,
      itemCode: "003",
      itemName: "Item 3",
      itemQuantity: 8,
      selectedQuantity: 0,
      itemPrice: 7.99,
      itemImage:
        "https://www.memorandum.com/wp-content/uploads/2015/11/wide-leg-gray-pinstripe-pants-alice-olivia-ivory-bow-tie-neck-blouse-everlane-modern-loafers-work-office-professional-women-style-fasion-blog-mary-orton-memorandum-61.jpg",
    },
    {
      _id: 4,
      itemCode: "004",
      itemName: "Item 4",
      itemQuantity: 3,
      selectedQuantity: 0,
      itemPrice: 24.99,
      itemImage:
        "https://www.memorandum.com/wp-content/uploads/2015/11/wide-leg-gray-pinstripe-pants-alice-olivia-ivory-bow-tie-neck-blouse-everlane-modern-loafers-work-office-professional-women-style-fasion-blog-mary-orton-memorandum-61.jpg",
    },
    {
      _id: 5,
      itemCode: "005",
      itemName: "Item 5",
      itemQuantity: 12,
      selectedQuantity: 0,
      itemPrice: 4.99,
      itemImage:
        "https://www.memorandum.com/wp-content/uploads/2015/11/wide-leg-gray-pinstripe-pants-alice-olivia-ivory-bow-tie-neck-blouse-everlane-modern-loafers-work-office-professional-women-style-fasion-blog-mary-orton-memorandum-61.jpg",
    },
    {
      _id: 6,
      itemCode: "006",
      itemName: "Item 6",
      itemQuantity: 6,
      selectedQuantity: 0,
      itemPrice: 11.99,
      itemImage:
        "https://www.memorandum.com/wp-content/uploads/2015/11/wide-leg-gray-pinstripe-pants-alice-olivia-ivory-bow-tie-neck-blouse-everlane-modern-loafers-work-office-professional-women-style-fasion-blog-mary-orton-memorandum-61.jpg",
    },
  ];

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
