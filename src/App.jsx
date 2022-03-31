import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserList } from "./components/UserList/UserList";
import Home from "./pages/Home";
import News from "./pages/News";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/backoffice/users" element={<UserList />} />
      
      </Routes>
    </>

  );
}

export default App;
