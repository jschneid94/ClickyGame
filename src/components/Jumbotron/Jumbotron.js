import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => (
    <div className="jumbotron row">{props.children}</div>
)

export default Jumbotron;