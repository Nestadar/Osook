import React, { useContext } from "react";
import MyContext from "./Context";
import "./Filters.scss";

const Filters = () => {
  const { filter, selectedCategory, setSelectedCategory, setFilter } =
    useContext(MyContext);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="global-nav-container">
      <nav className="nav-container" id="item-select">
        <button value="" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/boussole.png"
            alt="Explorer"
          />
          Explorer
        </button>

        <button className="click" value="real-estate" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/pyramides.png"
            alt="Immobilier"
          />
          Immobilier
        </button>

        <button value="jewel" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/ankh.png"
            alt="Bijoux"
          />
          Bijoux
        </button>

        <button value="vehicle" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/gizeh.png"
            alt="Transports"
          />
          Transports
        </button>

        <button value="animal" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/chat.png"
            alt="Animaux"
          />
          Animaux
        </button>

        <button value="tableware" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/amphore.png"
            alt="Vaisselle"
          />
          Vaisselle
        </button>

        <button value="tool" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/maillet.png"
            alt="Outils"
          />
          Outils
        </button>

        <button value="trinket" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/scarabee.png"
            alt="Babioles"
          />
          Babioles
        </button>

        <div className="search">
          <input className="search-bar" type="text" />
        </div>
      </nav>
    </div>
  );
};

export default Filters;
