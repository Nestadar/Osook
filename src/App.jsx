import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import { useState, useEffect, useMemo } from "react";
import "./App.scss";
import MyContext from "./components/Context";
import Homepage from "./components/Pages/Homepage.jsx";
import Publier from "./components/Pages/Publier";
import Favoris from "./components/Pages/Favoris";
import Messages from "./components/Pages/Messages";
import Profil from "./components/Pages/Profil";
import Filters from "./components/filters";

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:4343/api/objects")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  const valuesInContext = useMemo(
    () => ({
      items,
      setItems,
      filter,
      setFilter,
      selectedCategory,
      setSelectedCategory,
    }),
    [items, setItems, filter, setFilter]
  );

  return (
    <>
      <MyContext.Provider value={valuesInContext}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage items={items} />} />
            <Route path="/publier" element={<Publier />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App;
