import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { HomeEdit } from "./pages/HomeEdit";
import News from "./pages/News";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home-edit" element={<HomeEdit />}></Route>
      </Routes>
    </>

  );
}

export default App;
