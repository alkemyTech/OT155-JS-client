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
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login";
import EditOrganization from "./pages/EditOrganization";
import Footer from "./components/Footer";
import FormCategories from "./components/FormCategories";
import FormActivities from "./components/FormActivities";
import BackOffice from "./pages/BackOffice/BackOffice";
import { HomeEdit } from "./pages/Home/HomeEdit";
import { TestimonialsList } from "./components/TestimonialList";
import AdminAuth from "./components/Auth/AdminAuth";
import UserAuth from "./components/Auth/UserAuth";
import Profile from "./pages/Profile/Profile";
import FormNews from "./components/CKeditorNews";
import ActivityDetail from "./pages/Activities/ActivityDetail";
import { EditForm } from "./pages/EditForm/EditForm";
import FormTestimonials from "./components/CKeditorTestimonial";
import { Navbar } from "./components/Header/Navbar";
import { Testimonials } from "./pages/Testimonial/Testimonials";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="login" element={<Login />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path=":id" element={<NewsDetails />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route element={<UserAuth />}>
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<EditForm />} />
        </Route>
        {/* To add to private routes soon */}
        <Route path="backoffice" element={<AdminAuth />}>
          <Route index element={<BackOffice />} />
          <Route path="activities">
            <Route index element={<ActivitiesList />} />
            <Route path="edit/:id" element={<FormActivities />} />
            <Route path="create" element={<FormActivities />} />
          </Route>
          <Route path="news">
            <Route index element={<NewsList />} />
            <Route path="edit/:id" element={<FormNews />} />
            <Route path="create" element={<FormNews />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoriesList />} />
            <Route path="create" element={<FormCategories />} />
            <Route path="edit/:id" element={<FormCategories />} />
          </Route>
          <Route path="contacts" element={<ContactsList />} />
          <Route path="edit-organization" element={<EditOrganization />} />
          <Route path="home-edit" element={<HomeEdit />} />
          <Route path="testimonials">
            <Route index element={<TestimonialsList />} />
            <Route path="create" element={<FormTestimonials />} />
            <Route path="edit/:id" element={<FormTestimonials />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            {/* <Route path=":id/edit" element={<UserList />} /> */}
          </Route>
        </Route>
        <Route path="/activities/:id" element={<ActivityDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
