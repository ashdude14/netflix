import { Routes,Route } from "react-router-dom"
import { MdOutlineTranslate } from "react-icons/md";

import "./App.css"
import Home from "./pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
     <div className="  scrollbar-hide">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ash" element={<Footer/>} />
      </Routes>
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
