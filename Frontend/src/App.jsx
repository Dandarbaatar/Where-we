/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import Hostpage from "./pages/Hostpage";
import AddProductPage1 from "./components/addProductPage1";
import AddProductPage2 from "./components/addProductPage2";
import AddProductPage3 from "./components/addProductPage3";
import AddProductPage4 from "./components/addProductPage4";
import AddProductPage5 from "./components/addProductPage5";
import AddProductPage6 from "./components/addProductPage6";
// import Register from "./components/registerPopUp";
// import Login from "./components/loginPopUp";
import { Detail } from "./pages/Detail";
import Addimage from "./components/addImage";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostpage" element={<Hostpage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route
          path="/addproducts1"
          element={<AddProductPage1 data={data} setData={setData} />}
        />
        <Route
          path="/addproducts2"
          element={<AddProductPage2 data={data} setData={setData} />}
        />
        <Route
          path="/addproducts3"
          element={<AddProductPage3 data={data} setData={setData} />}
        />
        <Route
          path="/addproducts4"
          element={<AddProductPage4 data={data} setData={setData} />}
        />
        <Route
          path="/addproducts5"
          element={<AddProductPage5 data={data} setData={setData} />}
        />
        <Route
          path="/addproducts6"
          element={<AddProductPage6 data={data} setData={setData} />}
        />
        <Route path="/addimage" element={<Addimage />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
