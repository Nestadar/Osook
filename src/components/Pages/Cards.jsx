import React from "react";

const cards = ({ cards }) => {
  return (
    <div className="cardContainer">
      <div className="cards">
        <img src={cards.image} alt={cards.title}></img>
        <h2>{cards.title}</h2>
        <p>{cards.description}</p>
      </div>
    </div>
  );
};

export default cards;

// "id": 1,
// "image": "./images/collier-or.png",
// "category": "jewel",
// "title": "Collier en or avec des perles précieuses",
// "description": "Élégant collier en or avec des perles précieuses pour ajouter une touche de glamour à votre tenue.",
// "seller": "AbdelKarim",
// "city": "Alexandrie",
// "isFavorite": false,
// "price": 8
