import React, { useContext } from "react";
import MyContext from "../Context";
import Filters from "../filters";
import Card from "../Card";

const Homepage = () => {
  const { items, filter } = useContext(MyContext);

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div>
      <Filters />
      {filteredItems.map((card) => (
        <Card items={card} key={card.id} />
      ))}
    </div>
  );
};

export default Homepage;
