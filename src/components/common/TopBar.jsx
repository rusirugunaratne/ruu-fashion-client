import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <OtherHousesIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            RUU Fashion
          </Typography>
          <Button
            variant='contained'
            startIcon={<ShoppingCartOutlinedIcon />}
            color='secondary'
            onClick={() => navigate("/cart")}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
