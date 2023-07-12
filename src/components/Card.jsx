import MyContext from "./Context";
import { useState, useContext } from "react";
import coeurPlein from "../assets/images/card/Coeur-plein.png"
import coeurVide from "../assets/images/card/Coeur-vide.png"
import "./Card.scss" 
import LogoUser from "../assets/images/card/user.png"

const Card = () => {
    const { items } = useContext(MyContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
      };

    const handleClickDescription = (event) => {
        if (event.target.id === "favoriteButton") {
            return;
          }
        setIsClicked(!isClicked)
    };

    return (
    <div className="Cards" onClick={handleClickDescription}>
        <div className="imageContainer">
            <div className="cardPicture" style={{ backgroundImage: `url("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/045e2e4e0d357884b7bba9ed126c72d9db4ef02d64d3b59b0d528a52b76603d0._RI_V_TTW_SX720_FMjpg_.jpg")`}}>
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
                <h1>{items[14].title}</h1>
                {/* <p>Ville : {items[14].city}</p> */}
            </div>
            <div className="cardPrice">
                <p >{items[14].price} debens</p>
            </div>
            </div>
            <div className={ isClicked === false ? "descriptionNone" : "cardDescription"}>
                <p >{items[14].description}</p>
            </div>
        </div>
        <div className={ isClicked === false ? "descriptionNone" : "cardBuy"}>
            <div className="inputUser">
            <img src={LogoUser} alt='logoUser'/>
            <p>{items[14].seller}</p>
            </div>
            <div className="divButtons">
            <button id="buy">Acheter</button>
            <button id="contact">Message</button>
            </div>
        </div>
    </div>
    )
}

export default Card;