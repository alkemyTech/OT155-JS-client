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
import { EditForm } from "./pages/EditForm/EditForm";
import Profile from "./pages/Profile/Profile";
import AdminAuth from "./components/Auth/AdminAuth";

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
        <Profile path="profile" element={<Profile/>}/>
        <Route path="user" element={<LoggedAuth/>}>
          <Route path="edit" element={<EditForm/>}>
        </Route>
        
        </Route>
        {/* To add to private routes soon */}
        <Route path="backoffice" element={<AdminAuth/>}>
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
