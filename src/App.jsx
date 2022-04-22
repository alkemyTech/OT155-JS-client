import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactsList from "./pages/Contacts/ContactsList";
import { ActivitiesList } from "./components/ActivitiesList";
import { UserList } from "./components/UserList/UserList";
import { NewsList } from "./components/NewsList";
import Home from "./pages/Home";
import { CategoriesList } from "./components/CategoriesList";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import ContactForm from "./pages/Contacts/ContactForm";
import FormActivities from "./components/FormActivities";
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login";
import EditOrganization from "./pages/EditOrganization";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormCategories from "./components/FormCategories";
import BackOffice from "./pages/BackOffice/BackOffice";
import { HomeEdit } from "./pages/Home/HomeEdit";
import { TestimonialsList } from "./components/TestimonialList";
import AdminAuth from "./components/Auth/AdminAuth";
import Profile from "./pages/Profile/Profile";
import { EditForm } from "./pages/EditForm/EditForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="login" element={<Login />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path=":id" element={<NewsDetails />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="edit" element={<EditForm/>}/>
        {/* To add to private routes soon */}
        <Route path="backoffice" element={<AdminAuth/>}>
          <Route index element={<BackOffice />} />
          <Route path="activities">
            <Route index element={<ActivitiesList />} />
            <Route path=":id/edit" element={<FormActivities />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoriesList />} />
            <Route path="new" element={<FormCategories />} />
          </Route>
          <Route path="contacts" element={<ContactsList />} />
          <Route path="edit-organization" element={<EditOrganization />} />
          <Route path="home-edit" element={<HomeEdit />} />
          <Route path="news" element={<NewsList />} />
          <Route path="testimonials" element={<TestimonialsList />} />
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
