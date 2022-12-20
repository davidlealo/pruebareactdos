import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



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
          <div>
            {pizzas.map(
              pizza => {
                return (
                  <Container fluid className='m-3'>
                    <Row>
                    <Card style={{ width: '18rem' }} key={pizza.id}>
                      <Card.Img variant="top" src={pizza.img} className='m-1'/>
                      <Card.Body>
                        <Card.Title>{pizza.name}</Card.Title>
                        <Card.Text>
                          {pizza.desc}
                        </Card.Text>
                        <Button variant="warning" className='m-1'>Detalles</Button>
                        <Button variant="danger" className='m-1'>Pedir</Button>
                      </Card.Body>
                    </Card>
                    </Row>
                  </Container>
                )
              }
            )}
          </div>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}