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
    <div>
      <navbar className="nav-container" id="item-select">
        <button value="" onClick={handleFilter}>
          Toutes les catégories
        </button>
        <button value="real-estate" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/pyramides.png"
          />
          Immobilier
        </button>
        <button value="jewel" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/ankh.png"
          />
          Bijoux
        </button>
        <button value="vehicle" onClick={handleFilter}>
          <img
            className="iconsNav"
            src="../src/assets/images/iconsNav/ankh.png"
          />
          Transports
        </button>
        <button value="animal" onClick={handleFilter}>
          Animaux
        </button>
        <button value="tableware" onClick={handleFilter}>
          Vaisselle
        </button>
        <button value="tool" onClick={handleFilter}>
          Outils
        </button>
        <button value="trinket" onClick={handleFilter}>
          Babioles
        </button>
      </navbar>
    </div>
  );
};

export default Filters;
