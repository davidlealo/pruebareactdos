import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Context from "./Context";
import { useEffect, useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";

export default function App() {
  const endpoint = "./pizzas.json";
  const [pizzas, setPizzas] = useState([]);
  const sharedData = { pizzas, setPizzas };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(endpoint);
      const data = await res.json();
      setPizzas(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={sharedData}>

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}