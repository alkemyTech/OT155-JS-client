import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import News from "./pages/News";
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>

  );
}

export default App;
