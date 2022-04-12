import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactsList from "./pages/Contacts/ContactsList";
import { UserList } from "./components/UserList/UserList";
import Home from "./pages/Home";
import News from "./pages/News";
import ContactForm from "./pages/Contacts/ContactForm";
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeEdit } from "./pages/Home/HomeEdit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* To add to private routes soon */}
        <Route path="backoffice">
          <Route path="contacts" element={<ContactsList />} />
          <Route path="home-edit" element={<HomeEdit />} />
          <Route path="users">
            <Route index element={<UserList />} />
            {/* <Route path="/backoffice/users/edituser:id" element={<UserList />} /> */}
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;