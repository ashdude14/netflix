import { Routes,Route } from "react-router-dom"


import "./App.css"
import Home from "./pages/Home";
import Footer from "./Components/Footer";

import LandingPage from "./pages/LandingPage";

import LoginForm from "./pages/LoginForm";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
     <div className="  scrollbar-hide">
        <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ash" element={<Footer/>} />
        <Route path="/login" element={<LoginForm/> } />
        <Route path="/home" element= {<LandingPage/>} /> 
      </Routes>
      </AuthContextProvider>
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
