import Footer from "../Footer/footer";
import "./Publier.scss";
import Add from "../../assets/images/Publier/iconAdd.png";
import Pics from "../../assets/images/Publier/iconPics.png";
import Filters from "../filters";

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
      <textarea id="userTextarea" name="userTextarea" rows="17">
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
    <div className="publishFooter">
    <Footer/>
    </div>
  </div>
  );
};

export default Publier;
