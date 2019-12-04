import React, { Component } from "react";
import classNames from 'classnames';
import styles from './App.module.css'

const cx = classNames.bind(styles);
console.log(cx);
class App extends Component {
  render() {
    return (
      <div className={cx(styles.box, styles.blue)}></div>
    );
  }
}

export default App;