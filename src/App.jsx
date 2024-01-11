import { Routes,Route } from "react-router-dom"


import "./App.css"
import Home from "./pages/Home";
import Footer from "./Components/Footer";

import LogIn from "./pages/LogIn";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
     <div className="  scrollbar-hide">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ash" element={<Footer/>} />
        <Route path="/login" element={<LogIn/> } />
        <Route path="/home" element= {<LandingPage/>} /> 
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
