import React from "react";



const FoodTruck = (props) => {
    return (
        <>
            <img src={props.src} alt={props.alt} />
            <h3>{props.truckName}</h3>
            <h4>{props.country}</h4>
            <button>View Menu</button>

        </>
          
    );
};

export default FoodTruck;