import React from "react";

const Profil = () => {
  return (
    <div className="global-Profile-container">
      <img
        className="profile-pic"
        src="./src/assets/images/iconsNav/profilePic.png"
        alt="Profile"
      />
      <div className="profile-Container">
        <h1 className="title-Profile">Mon Profil</h1>
        Login
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Adresse" />
        <input type="number" />
        <input type="password" />
      </div>
    </div>
  );
};

export default Profil;
