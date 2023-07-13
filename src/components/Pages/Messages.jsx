import Footer from "../Footer/footer";
import "./Messages.scss";
import { useContext } from "react";
import MyContext from "../Context";

const Messages = () => {
  const { items } = useContext(MyContext);

  return (
    <>
      <div className="divMessages">
        <h1 className="title-Message">Mes Messages</h1>
        {items.slice(0, 15).map((card) => (
          <div className="divTexto">
            <img src={`http://localhost:4343/${card.image}`} alt="rien" />
            <div className="nomVendeur">
              <h2 className="titleVendeur">{card.seller}</h2>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="messageFooter">
        <Footer />
      </div>
    </>
  );
};

export default Messages;
