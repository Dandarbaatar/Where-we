/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import Hostpage from "./pages/Hostpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hostpage" element={<Hostpage/>}/>
        <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
