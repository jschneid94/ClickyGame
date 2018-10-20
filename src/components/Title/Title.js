import React from "react";
import "./Title.css";

const Title = props => (
    <div className="col-8">
        <h1 className="title">Click Game: GoT Edition</h1>
        <blockquote class="blockquote">
            <h3 class="mb-0">"When you play the game of thrones, you click or you die"</h3>
            <footer class="blockquote-footer">Cersei Lannister, <cite title="Source Title">A Game of Thrones</cite></footer>
        </blockquote>
    </div>
);

export default Title;