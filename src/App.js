import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AlgorithmContainer from './algorithm';
import PaintContainer from './paint';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PaintContainer} />
        <Route path="/algorithm" component={AlgorithmContainer} />
      </div>
    );
  }
}

export default App;
