import React from "react";

const Card = (props) => {
    return (
            <div className="card-content">
                <img src={props.placeImageSrc} alt={props.placeName} />
                <h2>{props.placeName}</h2>
                <p>{props.placeInfo}</p>
                <button>Read all</button>
            </div>);
}

export default Card;