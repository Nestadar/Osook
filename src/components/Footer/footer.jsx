import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./footer.scss";

import PublierFooter from "../../assets/images/Footer/publierFooter.png";
import FavorisFooter from "../../assets/images/Footer/favorisFooter.png";
import ExplorerFooter from "../../assets/images/Footer/boussoleFooter.png";
import MessageFooter from "../../assets/images/Footer/messageFooter.png";
import ProfilFooter from "../../assets/images/Footer/profilFooter.png";

const Footer = () => {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="navigationFooter">
      <ul>
        <li id="testId" className="listFooter">
          <NavLink
            className="linkFooter"
            exact
            to="/publier"
          >
            <span className={window.location.pathname === "/publier" ? 'iconFooterClicked' : 'iconFooter'} onClick={handleClick}>
              <img src={PublierFooter} alt="icone publier" />
            </span>
            <span className={window.location.pathname === "/publier" ? 'textFooterClicked' : 'textFooter'} onClick={handleClick}>Publier</span>
          </NavLink>
          {window.location.pathname === "/publier" && <div className=" indicatorFooter indicator1"></div>}
        </li>
        <li className="listFooter">
          <NavLink
            className="linkFooter"
            exact
            to="/favoris"
          >
            <span className={window.location.pathname === "/favoris" ? 'iconFooterClicked' : 'iconFooter'} onClick={handleClick}>
              <img src={FavorisFooter} alt="icone favoris" />
            </span>
            <span className={window.location.pathname === "/favoris" ? 'textFooterClicked' : 'textFooter'} onClick={handleClick}>Favoris</span>
          </NavLink>
          {window.location.pathname === "/favoris" && <div className="indicatorFooter indicator2"></div>}
        </li>
        <li className="listFooter">
          <NavLink
            className="linkFooter"
            exact
            to="/"
          >
            <span className={window.location.pathname === "/" ? 'iconFooterClicked' : 'iconFooter'} onClick={handleClick}>
              <img src={ExplorerFooter} alt="icone explorer" />
            </span>
            <span className={window.location.pathname === "/" ? 'textFooterClicked' : 'textFooter'} onClick={handleClick}>Explorer</span>
          </NavLink>
          {window.location.pathname === "/" && <div className="indicatorFooter indicator3"></div>}
        </li>
        <li className="listFooter">
          <NavLink
            className="linkFooter"
            exact
            to="/messages"
          >
            <span className={window.location.pathname === "/messages" ? 'iconFooterClicked' : 'iconFooter'} onClick={handleClick}>
              <img src={MessageFooter} alt="icone message" />
            </span>
            <span className={window.location.pathname === "/messages" ? 'textFooterClicked' : 'textFooter'} onClick={handleClick}>Messages</span>
          </NavLink>
          {window.location.pathname === "/messages" && <div className="indicatorFooter indicator4"></div>}
        </li>
        <li className="listFooter">
          <NavLink
            className="linkFooter"
            exact
            to="/profil"
          >
            <span className={window.location.pathname === "/profil" ? 'iconFooterClicked' : 'iconFooter'} onClick={handleClick}>
              <img src={ProfilFooter} alt="icone profil" />
            </span>
            <span className={window.location.pathname === "/profil" ? 'textFooterClicked' : 'textFooter'} onClick={handleClick}>Profil</span>
          </NavLink>
          {window.location.pathname === "/profil" && <div className="indicatorFooter indicator5"></div>}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
