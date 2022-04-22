import React,{useState} from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routeArr";
import "./index.css";
import {FaBars,FaTimes} from 'react-icons/fa'

const header = () => {
  const [close,setClose] = useState('w-80')
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
          <FaTimes className='times' onClick={() => setClose('w-0')}/>
          {routes.map((link, i) => (
            <Link key={link.name} className="route-h hover:text-ong-blue-700" to={"/" + link.route}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="register-login">
          <Link to="login" className="mr-2 login">
            Login
          </Link>
          <Link to="register" className="ml-2 register bg-ong-blue-700">
            Registrate
          </Link>
        </div>
      </div>
      <FaBars className="bars" onClick={() => setClose('w-80')}/>
    </header>
  );
};

export default header;
