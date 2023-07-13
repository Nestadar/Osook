import { useState } from "react";
import coeurPlein from "../assets/images/card/Coeur-plein.png";
import "./Minicards.scss";
// const baseUrl = "http://localhost:4343/";

const Minicards = ({ items }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const imageUrl = `${baseUrl}/${items.image}`;
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
          style={{
            backgroundImage: `url("http://localhost:4343/${items.image}")`,
          }}
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
            <h1>{items.title}</h1>

            {/* <p>Ville : {items.city}</p> */}
          </div>
          <div className="cardPrice2">
            <p>{items.price} debens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minicards;
