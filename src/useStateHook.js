import React, { useState, useEffect } from "react";

function FavoriteColor() {
    const [counter, setCounter] = useState(0);

    const [car, setCar] = useState({
        brand: 'Mustang',
        price: '1000000',
        color: 'white',
        year:  '2022'
    });
    // const [brand, setBrand] = useState('Mustang');
    // const [price, setPrice] = useState('1000000');
    const newCar = {
        brand: 'Audi',
        price: '10000000',
        color: 'blue',
        year:  '2023'
    };

    useEffect( () => {                
        document.title = `${counter} times click`;
    });

    const updateData = () => {
        setCar( previousState => {
            return{ ...previousState, color: 'Orange', year: '2023' }
        });
        setCounter(counter+1);
    };

    return (
        <div>
            <p> Counter value on Update: { counter }</p>
            <p> My Color: { car.color } </p> 
            <p> My Brand: { car.brand } </p> 
            <p> My Price: { car.price } </p> 
            <p> My Year: { car.year } </p>  

            {/* <button type="button"  onClick = {() => setCar(newCar) } > UpdateColor </button>  */}
            <button type="button"  onClick = {updateData} > UpdateColor </button> 
        </div>
    );
}

export default FavoriteColor;