import React, { useState } from "react";



const Increament = () => {

    const [value, incrementFunc] = useState(0)

    const decrement = () => {
        if (value > 0) {
            incrementFunc(value - 1)
        }
    }
    const increment = () => {

        incrementFunc(value + 1)

    }

    return (
        <>
            <h1>{value}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

        </>
    )
}


export default Increament; 