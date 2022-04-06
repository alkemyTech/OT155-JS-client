import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/Contacts/Contacts";
import { UserList } from "./components/UserList/UserList";
import Home from "./pages/Home";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path=":newsId" element={<NewsDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/backoffice/contacts" element={<Contacts />}></Route>

        {/* To add to private routes soon */}
        <Route path="/backoffice/users" element={<UserList />} />
        {/* <Route path="/backoffice/users/edituser:id" element={<UserList />} /> */}
      </Routes>
    </>
  );
}

export default App;
