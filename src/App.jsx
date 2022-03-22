import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import News from "./pages/news";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
