import React, { useContext } from "react";
import MyContext from "../Context";
import Filters from "../filters";
import Cards from "./Cards";

const Homepage = () => {
  const { items, filter } = useContext(MyContext);

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div>
      <Filters />
      {filteredItems.map((card) => (
        <Cards items={card} key={card.id} />
      ))}
    </div>
  );
};

export default Homepage;
