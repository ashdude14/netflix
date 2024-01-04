import { Routes,Route } from "react-router-dom"
import Home from "./Components/Main"
import Navbar from "./Components/Navbar"

function App() {
  return (
 <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
   </Routes>
 </>
  )
}

export default App
