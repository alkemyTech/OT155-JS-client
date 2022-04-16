import { useState } from "react";
import EditOrganization from "./pages/EditOrganization";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactsList from "./pages/Contacts/ContactsList";
import { UserList } from "./components/UserList/UserList";
import { ActivitiesList } from "./components/ActivitiesList";
import Home from "./pages/Home";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import ContactForm from "./pages/Contacts/ContactForm";
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login";
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
        <Route path="login" element={<Login />}/>
        <Route path='/backoffice/activities' element={<ActivitiesList/>}/>
        {/* <Route path="/backoffice/contacts" element={<Contacts />}></Route> */}
        <Route path="/backoffice/edit-organization" element={<EditOrganization />}></Route>
        {/* To add to private routes soon */}
        <Route path="backoffice" />
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/users" element={<UserList />}  />
        <Route index />
        {/* <Route path="/backoffice/users/edituser:id" element={<UserList />} /> */ }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
