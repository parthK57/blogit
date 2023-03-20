import Explore from "./pages/Explore/Explore";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign Up/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;
