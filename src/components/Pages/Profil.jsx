import React, { useState, useEffect } from "react";
import "./Profil.scss";
import Card from "../Card";

const Profil = () => {
  const initialValues = { email: "", password: "", text: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Veuillez entrer votre adresse email";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce format d'adresse n'est pas valide";
    }
    if (!values.password) {
      errors.password = "Un mot de passe est requis";
    } else if (values.password.length < 4) {
      errors.password =
        "Le mot de passe doit comporter au moins quatre caractères";
    } else if (values.password.length > 10) {
      errors.password = "Le mot de passe ne peut pas dépasser dix caractères";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.info(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.info(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  return (
    <>
      <div className="global-Profile-container">
        <div className="profile-Container">
          <div className="profile-setting-gear">
            <img
              className="profile-gear"
              src="./src/assets/images/iconsNav/silhouette-de-roue-dentee 1.png"
              alt="Profile"
            />
          </div>
          <div className="profileTitlePic">
            <h1 className="title-Profile">Mon Profil</h1>
            <img
              className="profile-pic"
              src="./src/assets/images/iconsNav/pharaohPic.png"
              alt="Profile"
            />
          </div>

          <form className="profile-form" onSubmit={handleSubmit}>
            <label className="profile-label" htmlFor="text">
              Nom:
              <input className="profile-input" type="text" name="text" />
            </label>

            <label className="profile-label" htmlFor="text">
              Prénom:
              <input className="profile-input" type="text" name="text" />
            </label>

            <label className="profile-label" htmlFor="email">
              Email:
              <input
                className={`profile-input ${formErrors.email && "errorInput"}`}
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </label>
            {formErrors.email && (
              <p className="errorText">{formErrors.email}</p>
            )}

            <label className="profile-label" htmlFor="text">
              Adresse:
              <input className="profile-input" type="text" name="text" />
            </label>

            <label className="profile-label" htmlFor="number">
              Téléphone:
              <input className="profile-input" type="number" name="number" />
            </label>

            <label className="profile-label" htmlFor="password">
              Mot de passe:<span className="asterisk">*</span>
              <input
                className={`profile-input ${
                  formErrors.password && "errorInput"
                }`}
                type="password"
                name="password"
                required
              />
            </label>
            {formErrors.password && (
              <p className="errorText">{formErrors.password}</p>
            )}
            <div className="profileBtn">
              <button className="Btn-OsooK" type="submit">
                O'SooK!
              </button>
            </div>
          </form>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Profil;
