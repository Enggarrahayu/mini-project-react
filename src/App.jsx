import { BrowserRouter, Routes, Route } from "react-router-dom"  
import Login from "./pages/Login"
import Home from "./pages/Home"
import UserList from "./pages/UserList"

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<UserList />}></Route>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
