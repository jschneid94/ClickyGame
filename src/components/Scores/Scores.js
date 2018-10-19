import React from 'react';
import './Scores.css';

const Scores = props => (
    <div>
        <h2>{props.score}</h2>
        <h2>{props.wins}</h2>
    </div>
);

export default Scores;