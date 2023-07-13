import React, { useContext } from "react";
import { useState } from "react";
import MyContext from "../Context";
import Filters from "../filters";
import Card from "../Card";
import backgroundHomepage from "../../assets/images/Homepage/backgroundHomepage.png";
import Logo from "../../assets/images/Homepage/Logo.png";
import "./Homepage.scss";

const Homepage = () => {
  const [hidden, setHidden] = useState(false);

  const handleHide = () => {
    setHidden(true);
  };

  const { items, filter } = useContext(MyContext);

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div>
      <div className={hidden === true ? "swipeUp" : "swipeDown"}>
        <img className="backgroundHomepage" src={backgroundHomepage} />
        <img className="logoOsook" src={Logo} />
        <div className="divButtonSwipe">
          <button type="button" onClick={handleHide} />
        </div>
      </div>
      <div className={hidden === false ? "contentNone" : "contentHomepage"}>
        <div className="filters"></div>
        <Filters />
        <div className="cartesDisplay">
          {filteredItems.map((card) => (
            <Card items={card} key={card.id} />
          ))}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Homepage;
