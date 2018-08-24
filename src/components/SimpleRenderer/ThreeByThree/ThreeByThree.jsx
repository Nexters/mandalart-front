import React, { Component } from 'react';
import './ThreeByThree.scss';

export default class ThreeByThree extends Component {
  render() {
    const { mandalArtTodo, grade, selectMandal } = this.props;
    const data = [...new Array(9)].map((_, index) => {
      return mandalArtTodo[grade][index];
    });
    return (
      <div className="three-by-three">
        <button onClick={selectMandal(1)}>{data[0].title}</button>
        <button onClick={selectMandal(2)}>{data[1].title}</button>
        <button onClick={selectMandal(3)}>{data[2].title}</button>
        <button onClick={selectMandal(4)}>{data[3].title}</button>
        <button onClick={selectMandal(0)} className="center">
          {grade === 'todos' ? mandalArtTodo.goal : mandalArtTodo.title}
        </button>
        <button onClick={selectMandal(5)}>{data[4].title}</button>
        <button onClick={selectMandal(6)}>{data[5].title}</button>
        <button onClick={selectMandal(7)}>{data[6].title}</button>
        <button onClick={selectMandal(8)}>{data[7].title}</button>
      </div>
    );
  }
}
