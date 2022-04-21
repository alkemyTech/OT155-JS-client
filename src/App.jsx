import EditOrganization from "./pages/EditOrganization";
import ContactsList from "./pages/Contacts/ContactsList";
import { UserList } from "./components/UserList/UserList";
import Home from "./pages/Home";
import { CategoriesList } from "./components/CategoriesList";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import ContactForm from "./pages/Contacts/ContactForm";
import Register from "./pages/Register/Register";
import Login from "../src/pages/Login/Login";
import EditOrganization from "./pages/EditOrganization";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormCategories from "./components/FormCategories";
import BackOffice from "./pages/BackOffice/BackOffice";
import { HomeEdit } from './pages/Home/HomeEdit';

function App() {
  return (
    <>
      <Header />
      <FormCategories/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path=":id" element={<NewsDetails />} />
        </Route>
        <Route path="contact" element={<ContactForm />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="/backoffice/contacts" element={<Contacts />}></Route> */}
        <Route path="/backoffice/categories" element={<CategoriesList />}></Route>

        <Route path="/backoffice/contacts" element={<Contacts />}></Route>
        <Route path="/backoffice/testimonials" element={<TestimonialsList />}></Route>
        {/* <Route path="/backoffice/contacts" element={<Contacts />}></Route> */}
        <Route path="/backoffice/edit-organization" element={<EditOrganization />}></Route>
        {/* To add to private routes soon */}
        <Route path="backoffice">
          <Route index element={<BackOffice />} />
          <Route path="contacts" element={<ContactsList />} />
          <Route path="edit-organization" element={<EditOrganization />} />
          <Route path="home-edit" element={<HomeEdit />} />
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
