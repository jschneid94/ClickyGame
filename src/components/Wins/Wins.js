import React from 'react';
import './Wins.css';

const Wins = props => (
    <div className="col-2 my-auto">
        <h2>Wins: {props.wins}</h2>
    </div>
)

export default Wins;