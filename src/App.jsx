import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactsList from "./pages/Contacts/ContactsList";
import { UserList } from "./components/UserList/UserList";
import Home from "./pages/Home";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import ContactForm from "./pages/Contacts/ContactForm";
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login";
import EditOrganization from "./pages/EditOrganization";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path=":id" element={<NewsDetails />} />
        </Route>
        <Route path="contact" element={<ContactForm />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* To add to private routes soon */}
        <Route path="backoffice">
          <Route path="contacts" element={<ContactsList />} />
          <Route path="edit-organization" element={<EditOrganization />} />
          <Route path="users">
            <Route index element={<UserList />} />
            {/* <Route path=":id/edit" element={<UserList />} /> */}
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
