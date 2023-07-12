import { useState } from "react";
import "./Homepage.scss";
import backgroundHomepage from "../../assets/images/Homepage/backgroundHomepage.png";
import Logo from "../../assets/images/Homepage/Logo.png";

const Homepage = () => {
  const [hidden, setHidden] = useState(false);

  const handleHide = () => {
    setHidden(true);
  };

  return (
    <div>
      <div className={hidden === true ? "swipeUp" : "swipeDown"}>
        <img className="backgroundHomepage" src={backgroundHomepage} />
        <img className="logoOsook" src={Logo} />
        <div className="divButtonSwipe">
          <button type="button" onClick={handleHide} />
        </div>
      </div>
      <div className="iciNavbar"></div>
    </div>
  );
};

export default Homepage;
