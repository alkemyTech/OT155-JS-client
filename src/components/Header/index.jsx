import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../utils/routeArr";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import useRole from "../../hooks/useRole";
import "./index.css";

const header = () => {
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
    <header
      className="flex justify-between items-center px-10 w-100 py-10"
      id="header"
    >
      {/* Logo */}
      <div>
        {/* Change url to data from backend */}
        <img
          src={"https://i.imgur.com/wQoZYOF.png"}
          alt="logo somos mas"
          className="logo"
        />
      </div>
      {/* Navbar */}
      <div className={`flex items-center routes-register ${close}`}>
        <nav className="flex pr-10 routes">
          <FaTimes className="times" onClick={() => setClose("w-0")} />
          {routes.map((link, i) => (
            <Link
              key={link.name}
              className="route-h hover:text-ong-blue-700"
              to={"/" + link.route}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="">
          {!user.token ? (
            <>
              <Link to="login" className="mr-2 login">
                Login
              </Link>
              <Link to="register" className="ml-2 login">
                Registrate
              </Link>
            </>
          ) : (
            <>
              {isAdmin ? (
                <Link to="/backoffice" className="mr-2 login">
                  Back Office
                </Link>
              ) : (
                <Link to="/profile" className="mr-2 login">
                  {user.user.firstName} {user.user.lastName}
                </Link>
              )}
              <Link to="login" className="mr-2 login" onClick={logOut}>
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
      <FaBars className="bars" onClick={() => setClose("w-80")} />
    </header>
  );
};

export default header;
