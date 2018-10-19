import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    clickedCharacterList: [],
    wins: 0
  }

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1});
  }

  resetCount = () => {
    this.setState({ 
      score: 0, 
      clickedCharacterList: [] 
    })
  }

  clickCharacter = id => {
    if (this.state.clickedCharacterList.includes(id)) {
      this.resetCount();
    } else {
      this.handleIncrement();
      this.state.clickedCharacterList.push(id);
    }
    this.checkWin();
  };

  checkWin = () => {
    if (this.state.score === 12) {
      this.setState({ wins: this.state.wins + 1});
      this.resetCount();
    }
  };

  render() {
    return (
      <Wrapper>
        <Title score = {this.state.score} wins={this.state.wins}>Clicky Game</Title>
        {this.state.clickedCharacterList}
        {this.state.characters.map(character => (
          <CharacterCard 
            id = {character.id}
            name = {character.name}
            image = {character.image}
            clickCharacter = {this.clickCharacter}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
