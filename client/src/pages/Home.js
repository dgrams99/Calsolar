import React, { Component } from 'react';
import Nav from '../components/Nav/nav'
import Parallax from '../components/Parallax/Parallax'
import './home.css'
class App extends Component {
  render() {
    return (
        <div>
        <Nav />
        <Parallax />
        </div>
    );
  }
}

export default App;