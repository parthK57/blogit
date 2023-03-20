import { Routes, Route } from "react-router-dom";

// ROUTES
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign Up/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
