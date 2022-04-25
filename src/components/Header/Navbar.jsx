import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import useRole from "../../hooks/useRole";

export const Navbar = () => {
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Novedades", link: "/news" },
    { name: "Actividades", link: "/activities" },
    { name: "Testimonios", link: "/testimonials" },
    { name: "Contacto", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const isAdmin = useRole();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [close, setClose] = useState("w-80");

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="shadow-md w-full relative top-0 left-0">
      <nav className="md:flex items-center justify-between bg-slate-50 py-4 md:px-10 px-7">
        <div>
          <img
            src={"https://i.imgur.com/wQoZYOF.png"}
            alt="logo somos mas"
            className="w-[150px] h-[60px] object-cover"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={` text-center md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-200 md:bg-slate-50 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg font-bold md:my-0 my-7"
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  "transition ease-in-out delay-150 font-bold hover:text-[#8DCAFF]" +
                  (isActive ? " text-[#8DCAFF]" : "")
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!user.token ? (
            <>
              <li className="md:ml-8 md:text-sm text-lg lg:text-lg md:my-0 my-7">
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    "transition ease-in-out delay-150 font-bold hover:text-[#8DCAFF]" +
                    (isActive ? " text-[#8DCAFF]" : "")
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="md:ml-8 md:text-sm text-lg lg:text-lg md:my-0 my-7">
                <NavLink
                  to="register"
                  className={({ isActive }) =>
                    "transition ease-in-out delay-150 font-bold hover:text-[#8DCAFF]" +
                    (isActive ? " text-[#8DCAFF]" : "")
                  }
                >
                  Registrate
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {isAdmin ? (
                <li className="md:ml-8 md:text-sm text-lg lg:text-lg md:my-0 my-7">
                  <NavLink
                    to="/backoffice"
                    className={({ isActive }) =>
                      "transition ease-in-out delay-150 font-bold hover:text-[#8DCAFF]" +
                      (isActive ? " text-[#8DCAFF]" : "")
                    }
                  >
                    Back Office
                  </NavLink>
                </li>
              ) : (
                <li className="md:ml-8 md:text-sm text-lg lg:text-lg md:my-0 my-7">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      "transition ease-in-out delay-150 font-bold hover:text-[#8DCAFF]" +
                      (isActive ? " text-[#8DCAFF]" : "")
                    }
                  >
                    {user.user.firstName} {user.user.lastName}
                  </NavLink>
                </li>
              )}
              <li className="md:ml-8 md:text-sm text-lg lg:text-lg md:my-0 my-7">
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    "transition ease-in-out delay-150 font-bold hover:text-[#8DCAFF]" +
                    (isActive ? " text-[#8DCAFF]" : "")
                  }
                  onClick={logOut}
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
