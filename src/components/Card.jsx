import MyContext from "./Context";
import { useState } from "react";
import coeurPlein from "src/assets/images/card/Coeur-plein.png"
import coeurVide from "src/assets/images/card/Coeur-vide.png"

const Card = () => {
    const { items } = useContext(MyContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
      };

    const handleClickDescription = () => {
        setIsClicked(!isClicked)
    };
    
    return (
    <div className="Cards">
        <div className="cardPicture" style={{ backgroundImage: `url("${items?.image})`}}>
            <img 
            src={isFavorite === true ? coeurPlein : coeurVide}
            className={isFavorite === true ? "isFavorite" : "notFavorite"}
            onClick={handleClickFavorite}
            id="favoriteButton"
            alt="Coeur favori"
            />
        </div>
        <div className="cardTitle">
            <h1>{items?.title}</h1>
            <p>{items?.city}</p>
        </div>
        <div>
            <p className="cardPrice">{items?.price} deben</p>
        </div>
        <div>
            <p>{items?.description}</p>
        </div>
    </div>
    )
}

export default Card;