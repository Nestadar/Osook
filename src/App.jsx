import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MyContext from "./components/Context";
import Homepage from "./components/Pages/Homepage.jsx";
import Publier from "./components/Pages/Publier";
import Favoris from "./components/Pages/Favoris";
import Messages from "./components/Pages/Messages";
import Profil from "./components/Pages/Profil";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://hugohtvl.github.io/o-sook-api/server/objects.json")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  const valuesInContext = useMemo(
    () => ({
      items,
      setItems,
    }),
    [items, setItems]
  );

  return (
    <MyContext.Provider value={valuesInContext}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/publier" element={<Publier />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
