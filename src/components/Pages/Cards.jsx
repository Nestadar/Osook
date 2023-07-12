const baseUrl = "http://localhost:4343/";
const Cards = ({ items }) => {
  const imageUrl = `${baseUrl}/${items.image}`;
  return (
    <div className="cardContainer">
      <div className="cards">
        <img src={imageUrl} alt={items.title}></img>
        <p>{items.description}</p>
      </div>
    </div>
  );
};

export default Cards;
