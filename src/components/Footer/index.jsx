import { useEffect, useState } from "react";
import { routes } from "../../utils/routeArr";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { ImFacebook2 } from 'react-icons/Im';
import { IoLogoInstagram } from 'react-icons/Io';
import { BsLinkedin } from 'react-icons/Bs';
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";
import "./Index.css";


const Footer = () => {

  const [organizationData, setOrganizationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryAPI = async () => {
      try {
        const { data } = await apiConnectionWithoutToken('/organizations/1/public');
        setOrganizationData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (organizationData) {
      queryAPI();
    }
  }, []);



  return (
    <footer className="flex flex-col center-center pt-20 footer">
      <nav className=" nav flex justify-center border border-white border-solid relative">
        <div className="absolute logo__footer">
          {/* Change url to data from backend */}
          <img src={"https://i.imgur.com/wQoZYOF.png"} alt="logo somos mas" />
        </div>
        {routes.map((link, i) => (
          <Link key={link.name} className="route text-white" to={link.route}>
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col center-center contain__network mt-10">
        <div className="flex justify-center my-5 ">
          {
          !loading ? (
            <Loader />
          ) : (
            <>
            <div className=" flex justify-center items-center network rounded-lg bg-white cursor-pointer">
              <a href={organizationData.urlFacebook}>
              <ImFacebook2 className="text-4xl text-[#3b5998] "/>
              </a>
            </div>
            <div className=" flex justify-center items-center network rounded-lg bg-white cursor-pointer instagram">
              <a href={organizationData.urlInstagram} className=''>
              <IoLogoInstagram className=" text-4xl text-white"/>
              </a>
            </div>
            <div className=" flex justify-center items-center network rounded-lg bg-white cursor-pointer">
              <a href={organizationData.urlLinkedin} className=''>
              <BsLinkedin className=" text-4xl text-[#0A66C2] "/>
              </a>
            </div>
            </>
          )}
        </div>
        <p className="Copyright">2022 by Alkemy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
