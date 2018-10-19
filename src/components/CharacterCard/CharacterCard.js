import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card col-sm-4 px-0 mx-auto" onClick={() => props.clickCharacter(props.id)}>
        <div className="img-container">
            <img class="img-fluid my-auto mx-0" alt={props.name} src={props.image} />
        </div>
    </div>
);

export default CharacterCard;