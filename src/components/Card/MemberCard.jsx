import React from "react";

const MemberCard = ({ name, imgUrl }) => {
  return (
    <div className="shadow-sm py-3 px-6 flex flex-col justify-center items-center w-48 rounded-md">
      <h3 className="font-bold">{name}</h3>
      <div className="rounded-full mt-4">
        <img
          className="rounded-full w-24 h-24"
          src={
            imgUrl ||
            "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          }
          alt={`${name} avatar`}
        />
      </div>
    </div>
  );
};

export default MemberCard;
