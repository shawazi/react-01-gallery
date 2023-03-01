import React from "react";
import data from "../helper/data";

const Cards = () => {

    return (
        <div className="container">
            {data.map((item) => (
                <div className="card">
                    <h3>{item.photographer}</h3>
                    <img src={item.src.large} alt={item.photographer} />
                </div>
            ))}

        </div>
    )
}

export default Cards;