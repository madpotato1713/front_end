import React, { Component } from "react";
// import SassComponent from './SassComponent';
// import Button from './components/Button';
import StyledButton from './components/StyledButton';

class App extends Component {
  render() {
    return (
      <div>
        <StyledButton big>
          버튼
        </StyledButton>
      </div>
    )
  }
}

export default App;
