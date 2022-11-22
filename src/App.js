
import './App.css';

import Home from "./component/Home"
import Header from './component/Header';
import Footer from './component/Footer';
import Cardbar from './component/Cardbar';
import Location from './component/Location'
import Contact from './component/Contact'
import Cardbar2 from './component/Cardbar2';
import About from './component/About'

import Multipal from './component/Multipal';
import Com from './component/Com'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (


    <BrowserRouter>
      {/* <Routes>
      <Route path='/' element={<Header />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
        
    </Routes> */}

  
      <Header />
      <Cardbar />
      <Com/>
      <Cardbar2 />
      <About />
      
      <Multipal /> 
      <Location />
      <Contact />
      <Footer />
    </BrowserRouter>









  );
}

export default App;
