import { BrowserRouter, Routes, Route } from "react-router-dom"  
import Login from "./pages/Login"
import Home from "./pages/Home"
import UserList from "./pages/UserList"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import UserDetail from "./pages/UserDetail"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login />}></Route>
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
          </Routes>
        </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App
