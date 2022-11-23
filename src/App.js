
import './App.css';

import Home from "./component/Home"
import About from './component/About';
import Contact from './component/Contact';
import Nbar from './component/Nbar';
import Form from './component/Form';
import Amenities from './component/Amenities';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (


    <BrowserRouter>
    <Nbar/>
    {/* <Form/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      



    </BrowserRouter>









  );
}

export default App;
