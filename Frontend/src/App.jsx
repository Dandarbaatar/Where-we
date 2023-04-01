import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { Home } from "./pages/Home";
import Hostpage from "./pages/Hostpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hostpage" element={<Hostpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
