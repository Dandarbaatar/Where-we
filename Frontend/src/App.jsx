/** @format */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { AboutUs } from "./components/aboutUs";
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
import { Account } from "./components/account";
import { AccEdit } from "./components/accountEdit";
import TeamMember from "./components/TeamMembers";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    bio: "John Doe is the CEO of our company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO",
    bio: "Jane Smith is the CTO of our company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more team members here
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostpage" element={<Hostpage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/addproducts1" element={<AddProductPage1 />} />
        <Route path="/addproducts2" element={<AddProductPage2 />} />
        <Route path="/addproducts3" element={<AddProductPage3 />} />
        <Route path="/addproducts4" element={<AddProductPage4 />} />
        <Route path="/addproducts5" element={<AddProductPage5 />} />
        <Route path="/addproducts6" element={<AddProductPage6 />} />
        <Route path="/addimage" element={<Addimage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accountEdit" element={<AccEdit />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
