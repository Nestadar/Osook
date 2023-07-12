import React, { useContext } from "react";
import MyContext from "./Context";

const Filters = () => {
  const { filter, selectedCategory, setSelectedCategory, setFilter } =
    useContext(MyContext);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <select id="item-select" onChange={handleFilter}>
        <option value="">Toutes les catégories</option>
        <option value="tool">Outils</option>
        <option value="vehicle">Transports</option>
        <option value="tableware">Vaisselle</option>
        <option value="animal">Animaux</option>
        <option value="real-estate">Immobilier</option>
      </select>
    </div>
  );
};

export default Filters;
