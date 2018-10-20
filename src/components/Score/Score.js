import React from 'react';
import './Score.css';

const Score = props => (
    <div className="row">
        <h2 className="mx-auto">Score: {props.score}</h2>
    </div>
);

export default Score;