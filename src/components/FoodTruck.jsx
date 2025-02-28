import React from "react";



const FoodTruck = (props) => {
    return (
        <>
            <img src={props.src} alt={props.alt} />
            <h3>{props.truckName}</h3>
            <h4>{props.country}</h4>
            <button>
                <a href={props.link}>View Menu</a>
            </button>

        </>
          
    );
};

export default FoodTruck;