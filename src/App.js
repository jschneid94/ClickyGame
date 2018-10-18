import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import './App.css';

class App extends Component {
  state = {
    characters,
    clickedCount: 0,

  }

  handleIncrement = () => {
    this.setState({ clickedCount: this.state.clickedCount + 1});

  removeCharacter = id => {
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard 
            id = {character.id}
            name = {character.name}
            image = {character.image}
            removeCharacter = {this.removeCharacter}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
