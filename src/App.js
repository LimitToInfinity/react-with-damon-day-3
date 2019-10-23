import React, { Component } from 'react';

import './App.css';
import MainContainer from "./components/MainContainer"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: [],
    }
  }

    componentDidMount() {
      fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(response => this.setState({ characters: response.results }))
    }
  
  render(){
    return (
      <div className="app">
        <h1>Rick and Morty Characters</h1>
        <MainContainer characters={ this.state.characters }/>
      </div>
    );
  }
}