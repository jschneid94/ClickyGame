import React, { Component } from 'react';
import { CharacterCard, Title } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Title>Clicky Game</Title>
      <div>Test</div>
      <CharacterCard />
    );
  }
}

export default App;
