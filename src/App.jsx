//import { Routes,Route } from "react-router-dom"
import { MdOutlineTranslate } from "react-icons/md";
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";

function App() {
  return (
    <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] 
     w-[100vw]  bg-no-repeat bg-cover items-center justify-center " >
      <div className=" w-[100vw] bg-[rgba(0,0,0,0.7)]">
       <Header/>
       <Hero/>
      </div>
     
    </div>
  
 /*<>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
   </Routes>
 </> */
  )
}

export default App
