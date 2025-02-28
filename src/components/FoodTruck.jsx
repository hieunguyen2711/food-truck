import React from "react";


const FoodTruck = (props) => {
    return (
        <>
            <img src="/tacos-pic.webp" alt={props.alt} />
            <h3>{props.truckName}</h3>
            <h4>{props.country}</h4>

        </>
          
    );
};

export default FoodTruck;