import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <div>Testy test</div>
        <CharacterCard />
      </Wrapper>
    );
  }
}

export default App;
