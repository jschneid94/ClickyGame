import React from 'react';
import './Wins.css';

const Wins = props => (
    <div className="row">
        <h2 className="mx-auto">Wins: {props.wins}</h2>
    </div>
)

export default Wins;