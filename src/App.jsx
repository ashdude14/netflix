//import { Routes,Route } from "react-router-dom"
import { MdOutlineTranslate } from "react-icons/md";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";

function App() {
  return (
     <>
       <Hero/>
       <FAQs/>
       <Footer/>
    </>
  
 /*<>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
   </Routes>
 </> */
  )
}

export default App
