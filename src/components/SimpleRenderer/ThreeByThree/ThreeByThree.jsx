import React, { Component } from 'react';
import './ThreeByThree.scss';

export default class ThreeByThree extends Component {
  render() {
    return (
      <div className="three-by-three">
        <input name="plan1" placeholder="One" />
        <input name="plan2" placeholder="Two" />
        <input name="plan3" placeholder="Three" />
        <input name="plan4" placeholder="Four" />
        <input className="center" name="goal" placeholder="목표" />
        <input name="plan5" placeholder="Five" />
        <input name="plan6" placeholder="Six" />
        <input name="plan7" placeholder="Seven" />
        <input name="plan8" placeholder="Eight" />
      </div>
    );
  }
}
