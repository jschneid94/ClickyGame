import React, { Component } from 'react';
import CharacterCard from './components/CharacterCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import shuffleArray from 'shuffle-array';
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
    // this.checkWin();
  }

  resetCount = () => {
    this.setState({ 
      score: 0, 
      clickedCharacterList: [] 
    });
    shuffleArray(this.state.characters);
  }

  clickCharacter = id => {
    if (this.state.clickedCharacterList.includes(id)) {
      this.resetCount();
    } else {
      this.handleIncrement();
      this.state.clickedCharacterList.push(id);
      shuffleArray(this.state.characters);
    }
    this.checkWin();
  };

  handleClick = id => {
    this.clickCharacter(id, () => {
      this.checkWin();
    });
  }

  checkWin = () => {
    if (this.state.score > 11) {
      this.setState({ wins: this.state.wins + 1});
      this.resetCount();
      alert("You've chosen all characters! Let's start a new round...")
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
            handleClick = {this.handleClick}
            // checkWin = {this.checkWin}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
