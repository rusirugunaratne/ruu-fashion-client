import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "../components/common/TopBar";
import HomePage from "../components/HomePage";
import Cart from "../components/cart/Cart";
import { useState } from "react";

export function Router() {
  const [items, setItems] = useState([]);
  console.log("Items in router", items);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage items={items} setItems={setItems} />}
        />
        <Route
          path='/cart'
          element={<Cart items={items} setItems={setItems} />}
        />
        {/* <Route path='/updateStock' element={<UpdateStockQuantity />} />
        <Route path='/stockReport' element={<StockReport />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
