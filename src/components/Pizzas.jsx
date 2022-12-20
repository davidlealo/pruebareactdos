import React, { useEffect, useState, useContext } from 'react';
import Context from '../Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router";



function Pizzas() {
const {pizzas, setPizzas, pizzaDetalle, setPizzaDetalle} = useContext(Context)
const endpoint = "./pizzas.json"
const navigate = useNavigate()

    const irPizza = () => {
        navigate(`/pizza/${pizzaDetalle}`)
    }
    function currencyFormat(num) {
        return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
     }

    return (
        <div>
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
                          <Button variant="info" className='m-1' onMouseOver={() => setPizzaDetalle(pizza.id)} onClick={irPizza}>Ver más 👀 </Button>
                          <Button variant="warning" className='m-1'>Añadir 🛒</Button>
                          <Card.Title className="my-2">Precio: {currencyFormat(pizza.price)}</Card.Title>
                        </Card.Body>
                      </Card>

                    )
                  }
                )}
            </Row>
          </Container>
        </div>
    )
}

export default Pizzas