import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Context from '../Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



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
                        

            <Container style={{ width: '50rem' }} fluid key={pizzaDetalle.id} className='p-6 m-6' >
                <Row >
                {imprimirPizza.map(pizza =>{
                    return (<Card className='p-6'>
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title style={{ textTransform: 'uppercase' }}>{pizza.name}</Card.Title>
                            <Card.Text style={{ fontSize: 'large' }}>
                                {pizza.desc}
                            </Card.Text>
                            <Button variant="outline-success" className='m-2'>Volver 🔙</Button>
                            <Button variant="outline-warning" className='m-2' onClick={volver}>Añadir 🛒</Button>
                        </Card.Body>
                    </Card>)
                })}
                </Row>
            </Container>
        </div>
    )
}

export default VerPizza