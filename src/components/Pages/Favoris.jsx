import React, { useContext } from "react";
import MyContext from "../Context";
import Minicards from "../../components/Minicards";
import Footer from "../Footer/footer";
import "./Favoris.scss";

const Favoris = () => {
  const { items, filter } = useContext(MyContext);

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div>
      <div className="favNavbar"></div>
      <div className="favTitle">
        <p>Mes Favoris</p>
      </div>
      <div className="favCards">
        {filteredItems.slice(0, 20).map((card) => (
          <Minicards items={card} key={card.id} image={card.image} />
        ))}
      </div>
      <div className="favFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Favoris;
