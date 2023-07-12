import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const Filters = () => {
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http:/localhost:4343/api/objects")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setFilter(selectedValue);
  };

  const filteredCategory = filter
    ? category.filter((card) => card.accessory_id === filter)
    : category;

  return (
    <>
      <div>
        <ul>
          {filteredCategory.map((card) => (
            <li key={card.id}>
              {""}
              <Cards key={card.id} card={card} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filters;
