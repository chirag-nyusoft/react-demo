import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './PageApp';
import reportWebVitals from './reportWebVitals';
import ShowRoom from './funComponent';
import Car from './classComponent';
import Toggle from './toggle';
import FavoriteColor from './useStateHook';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Garage(props) {
    const cars = props.cars;
    return ( 
        <>
            <h1> Garage </h1>  { cars.length > 0 && <h2> You have { cars.length } cars in your garage. </h2> }  
        </>
    );
}

root.render( <App /> ); 
{/* 
    const cars = ['Ford', 'BMW', 'Audi'];
    root.render( < Garage cars = { cars } />); 
*/}

reportWebVitals();