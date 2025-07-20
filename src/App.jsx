import "./App.css";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import UserNavbar from "./components/UserNavbar.jsx";
import GuestNavbar from "./components/GuestNavbar.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import { useAuth } from "./Context/AuthContext.jsx";
import Cart from "./Pages/Cart.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Context/ProtectedRoute.jsx";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user ? <UserNavbar /> : <GuestNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
