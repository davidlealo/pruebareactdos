import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Context from '../Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';




function VerPizza() {
    const endpoint = "./pizzas.json";
    const {pizzas, setPizzas, pizzaDetalle, setPizzaDetalle} = useContext(Context)
    const imprimirPizza = pizzas.filter((pizza) => pizza.id === pizzaDetalle)

    const { id } = useParams()
    const navigate = useNavigate()
    const volver = () => {
        navigate(`/`)
    }

    


    useEffect(() => {
        fetch(`${endpoint}/${pizzaDetalle}`).then(resp => resp.json())
            .then(data => {
                setPizzas(data)
            })
    }, [pizzaDetalle])


    return (
        <div>
                        

            <Container style={{ width: '60rem' }} fluid key={pizzaDetalle.id} className='p-6 m-6' >
                <Col >
                {imprimirPizza.map(pizza =>{
                    return (
                        <div className="container-fluid">
                        <div className="row">
                          <div className="col-12 mt-3">
                            <div className="card">
                              <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                  <img
                                    src={pizza.img}
                                    style={{ width: '20rem', borderRadius: '100%' }}
                                  />
                                </div>
                                <div className="card-body">
                                  <h4 className="card-title" style={{ textTransform: 'uppercase' }}>{pizza.name}</h4>
                                  <p className="card-text mx-6">
                                  {pizza.desc}
                                  </p>
                                  <Card>
                                  <Card.Body>
                                  <ListGroup variant="flush">
                                {
                                    pizza.ingredients.map(ingredient =>{
                                        return(
                                            <ListGroup.Item key={pizza.id}>🍕 {ingredient}</ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                            <Button variant="outline-success" className='m-2' onClick={volver}>Volver 🔙</Button>
                            <Button variant="outline-warning" className='m-2' >Añadir 🛒</Button>
                            <Card.Title className="my-2">Precio: {pizza.price}</Card.Title>
                            </Card.Body>
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                })}
                </Col>
            </Container>
        </div>
    )
}

export default VerPizza