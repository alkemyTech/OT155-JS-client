import React from "react";
import BackOfficeCard from "../../components/Card/BackOfficeCard";

const BackOffice = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto w-full h-screen flex justify-center items-center ">
        <div className="grid max-h-96 lg:grid-cols-4 justify-items-center align-center gap-x-8 gap-y-12">
          <BackOfficeCard title="Novedades" icon="BsNewspaper" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
          <BackOfficeCard title="Novedades" icon="" link="/" />
        </div>
      </div>
    </div>
  );
};

export default BackOffice;
