import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card border-secondary col-sm-2 px-0 mx-1 my-1" onClick={() => props.handleClick(props.id)}>
        <div className="img-container">
            <img class="img-fluid my-auto mx-0" alt={props.name} src={props.image} />
        </div>
    </div>
);

export default CharacterCard;