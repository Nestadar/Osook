import { useState } from "react";
import coeurPlein from "../assets/images/card/Coeur-plein.png";
import Card from "./Card";
import MyContext from "./Context";
import "./Minicards.scss";
const baseUrl = "http://localhost:4343/";

const Minicards = ({ items, price, title, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const imageUrl = `${baseUrl}/${image}`;
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClickDescription = (event) => {
    if (
      event.target.id === "favoriteButton" ||
      event.target.id === "buy" ||
      event.target.id === "contact"
    ) {
      return;
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className="Cards2" onClick={handleClickDescription}>
      <div className="imageContainer2">
        <div
          className="cardPicture2"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <img
            src={coeurPlein}
            className="isFavorite2"
            onClick={handleClickFavorite}
            id="favoriteButton2"
            alt="Coeur favori"
          />
        </div>
      </div>
      <div className="cardInfo2">
        <div className="divTitlePrice2">
          <div className="cardTitle2">
            <h1>{title}</h1>

            {/* <p>Ville : {items.city}</p> */}
          </div>
          <div className="cardPrice2">
            <p>{price} debens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minicards;
