import React, { useEffect, useState } from 'react';


function Pizzas() {
    const endpoint = '/pizzas.json'
    const [pizzas, setPizzas] = useState({})

    useEffect(() => {
        fetch(endpoint).then(resp => resp.json())
            .then(data => {
                setPizzas(data)
            })
    }, [])

    return (
        <div>
            {pizzas[0].name}
        </div>
    )
}

export default Pizzas