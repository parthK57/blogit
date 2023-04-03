import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// ROUTES
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign Up/SignUp";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
