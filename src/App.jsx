import { BrowserRouter, Routes, Route } from "react-router-dom"  
import Login from "./pages/Login"
import Home from "./pages/Home"
import UserList from "./pages/UserList"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import UserDetail from "./pages/UserDetail"
import Register from "./pages/Register"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>}>
            </Route>  
            <Route path="/user-detail/:id" element={
              <ProtectedRoute>
                <UserDetail />
              </ProtectedRoute>}
            ></Route>
            <Route path="/home" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>}>
            </Route>
          </Routes>
        </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App
