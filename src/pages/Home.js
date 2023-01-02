import React from 'react';
import FavoriteColor from "../useStateHook";

const Home = () => {
    return( 
        <div className="container">
            <h1> Home </h1>
            <FavoriteColor />
        </div>
    );
};

export default Home;