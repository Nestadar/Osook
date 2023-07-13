import "./Publier.scss";
import Add from "../../assets/images/Publier/iconAdd.png";
import Pics from "../../assets/images/Publier/iconPics.png";
import Filters from "../filters";
// import Footer from "../footer";

const Publier = () => {
  return (
  <div className="divGlobal">
    <Filters />
    <div className="divTitle">
      <h1>Publiez votre annonce</h1>
    </div>
    <div className="divItemName">
      <p>Titre</p>
      <input type="text" id="titleInput" name="titleInput"></input>
    </div>
    <div className="divDescription">
      <p>Description</p>
      <textarea id="userTextarea" name="userTextarea" rows="20">
      </textarea>
    </div>
    <div className="divAddPictures">
      <img src={Pics}/>
      <p>Ajoutez vos photos</p>
      <img src={Add}/>
    </div>
    <div className="divItemPrice">
      <p>Prix demandé</p>
      <input type="text" id="priceInput" name="priceInput"></input> deben(s)
    </div>
    {/* <Footer/> */}
  </div>
  );
};

export default Publier;
