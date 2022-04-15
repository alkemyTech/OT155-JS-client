import React from "react";
import { BsNewspaper, BsChatQuote, BsFileSlides } from "react-icons/bs";
import { GiChecklist, GiOrganigram } from "react-icons/gi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUsers, FaUserEdit } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { Link } from "react-router-dom";
import useRole from "../../hooks/useRole";
import BackOfficeCard from "../../components/Card/BackOfficeCard";

const BackOffice = () => {
  const isAdmin = useRole();
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center align-center gap-x-8 gap-y-12">
          {isAdmin && (
            <>
              <BackOfficeCard
                title="Novedades"
                icon={<BsNewspaper className="w-full h-full rounded-full" />}
                link="/backoffice/news"
              />

              <BackOfficeCard
                title="Actividades"
                icon={<GiChecklist className="w-full h-full rounded-full" />}
                link="/backoffice/activities"
              />

              <BackOfficeCard
                title="Categorias"
                icon={
                  <AiOutlineUnorderedList className="w-full h-full rounded-full" />
                }
                link="/backoffice/categories"
              />

              <BackOfficeCard
                title="Testimonios"
                icon={<BsChatQuote className="w-full h-full rounded-full" />}
                link="/backoffice/testimonials"
              />

              <BackOfficeCard
                title="Organización"
                icon={<GiOrganigram className="w-full h-full rounded-full" />}
                link="/backoffice/organization"
              />

              <BackOfficeCard
                title="Slides"
                icon={<BsFileSlides className="w-full h-full rounded-full" />}
                link="/backoffice/slides"
              />

              <BackOfficeCard
                title="Usuarios"
                icon={<FaUsers className="w-full h-full rounded-full" />}
                link="/backoffice/users"
              />

              <BackOfficeCard
                title="Miembros"
                icon={<HiUserGroup className="w-full h-full rounded-full" />}
                link="/backoffice/members"
              />

              <BackOfficeCard
                title="Contactos"
                icon={<GrContactInfo className="w-full h-full rounded-full" />}
                link="/backoffice/contacts"
              />
            </>
          )}
          <BackOfficeCard
            title="Editar Perfil"
            icon={<FaUserEdit className="w-full h-full rounded-full" />}
            link="/"
          />
        </div>
        <Link
          to="/"
          className="bg-gray-600 hover:bg-gray-400 text-white font-medium px-5 py-2 mt-8 rounded-md flex items-center"
        >
          <IoMdArrowRoundBack className="mr-2 inline" />
          Volver
        </Link>
      </div>
    </div>
  );
};

export default BackOffice;
