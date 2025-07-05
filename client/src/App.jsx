import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Bookings from "./pages/Bookings";
import Coaches from "./pages/Coaches";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/coaches" element={<Coaches />}/>
        <Route path="/bookings" element={<Bookings />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
