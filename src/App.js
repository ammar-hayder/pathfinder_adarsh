import "./App.css";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Amenities from "./component/Amenities";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
