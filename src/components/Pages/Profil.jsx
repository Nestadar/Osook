import React, { useState, useEffect } from "react";
import Footer from "../Footer/footer";
import "./Profil.scss";

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
    <div className="profilFooter">
      <p>Profil</p>
      <Footer />
    </div>
  );
};

export default Profil;
