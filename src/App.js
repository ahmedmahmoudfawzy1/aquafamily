import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css";
import "wowjs";
import "animate.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import { BrowserRouter } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import NotLoggedin from "./Components/ProtectedRoutes/NotLoggedin";
import IsLoggedIn from "./Components/ProtectedRoutes/IsLoggedIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import Contact from "./Pages/Contact/Contact";
import Customers from "./Pages/Customers/Customers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <IsLoggedIn>
                <Home />
              </IsLoggedIn>
            }
          />
          <Route
            path="/shop"
            element={
              <IsLoggedIn>
                <Shop />
              </IsLoggedIn>
            }
          />

          <Route
            path="/cart"
            element={
              <IsLoggedIn>
                <Cart />
              </IsLoggedIn>
            }
          />

          <Route
            path="/contact"
            element={
                <Contact />
            }
          />
          <Route
            path="/homedashboard"
            element={
              <IsLoggedIn>
                <Dashboard />
              </IsLoggedIn>
            }
          />
          <Route
            path="/customers"
            element={
              <IsLoggedIn>
                <Customers />
              </IsLoggedIn>
            }
          />
          <Route
            path="/register"
            element={
              <NotLoggedin>
                <Register />
              </NotLoggedin>
            }
          />
          <Route
            path="/login"
            element={
              <NotLoggedin>
                <Login />
              </NotLoggedin>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
