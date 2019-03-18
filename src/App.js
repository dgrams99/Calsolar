import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import AppPage from './pages/Home';
import Res from './pages/residental/residental';
import Com from './pages/com/com';
import Utility from './pages/utility/utility';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={AppPage} />   
      <Route exact path="/res/learnmore" component={Res} />   
      <Route exact path="/com/learnmore" component={Com} />   
      <Route exact path="/utility/learnmore" component={Utility} />   
      </div>
      </Router>
    );
  }
}

export default App;
