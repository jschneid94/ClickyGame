import React from 'react';
import './Score.css';

const Score = props => (
    <div className="col-2 my-auto">
        <h2>Score: {props.score}</h2>
    </div>
);

export default Score;