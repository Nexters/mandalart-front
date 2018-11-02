import React, { Component } from 'react';
import ThreeByThree from './ThreeByThree';
import './SimpleRenderer.scss';

export default class SimpleRenderer extends Component {
  render() {
    return (
      <div className="nine-by-nine">
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
        <ThreeByThree />
      </div>
    );
  }
}
