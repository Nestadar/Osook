import { useState } from "react";
import coeurPlein from "../assets/images/card/Coeur-plein.png";
import coeurVide from "../assets/images/card/Coeur-vide.png";
import "./Card.scss";
import LogoUser from "../assets/images/card/user.png";
const baseUrl = "http://localhost:4343/";

const Card = ({ items }) => {
  const imageUrl = `${baseUrl}/${items.image}`;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
    <div className="Cards" onClick={handleClickDescription}>
      <div className="imageContainer">
        <div
          className="cardPicture"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <img
            src={isFavorite === true ? coeurPlein : coeurVide}
            className={isFavorite === true ? "isFavorite" : "notFavorite"}
            onClick={handleClickFavorite}
            id="favoriteButton"
            alt="Coeur favori"
          />
        </div>
      </div>
      <div className={isClicked === false ? "displayClassic" : "cardInfo"}>
        <div className="divTitlePrice">
          <div className="cardTitle">
            <h1>{items?.title}</h1>
            {/* <p>Ville : {items.city}</p> */}
          </div>
          <div className="cardPrice">
            <p>{items?.price} debens</p>
          </div>
        </div>
        <div
          className={
            isClicked === false ? "descriptionNone" : "cardDescription"
          }
        >
          <p>{items?.description}</p>
        </div>
      </div>
      <div className={isClicked === false ? "descriptionNone" : "cardBuy"}>
        <div className="inputUser">
          <img src={LogoUser} alt="logoUser" />
          <p>{items?.seller}</p>
        </div>
        <div className="divButtons">
          <button id="buy">Acheter</button>
          <button id="contact">Message</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
