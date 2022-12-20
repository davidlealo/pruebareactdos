import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
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
          <Container fluid className='mx-6 my-3 p-2' >
            <Row className="justify-content-md-center">
                {pizzas.map(
                  pizza => {
                    return (

                      <Card style={{ width: '20rem' }} key={pizza.id} className='m-4'>
                        <Card.Img variant="top" src={pizza.img} className='m-2' />
                        <Card.Body>
                          <Card.Title style={{textTransform: 'uppercase'}}>{pizza.name}</Card.Title>
                          <Card.Text>
                            {pizza.desc.substring(0, 140)}
                          </Card.Text>
                          <Button variant="info" className='m-1'>Ver más 👀 </Button>
                          <Button variant="warning" className='m-1'>Añadir 🛒</Button>
                        </Card.Body>
                      </Card>

                    )
                  }
                )}
            </Row>
          </Container>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}