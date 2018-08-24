import React, { Component } from 'react';
import ThreeByThree from './ThreeByThree';
import './SimpleRenderer.scss';

export default class SimpleRenderer extends Component {
  render() {
    const { data, selectMandal } = this.props;
    const renderValue = [...new Array(8)].map((_, index) => {
      return data.todos[index];
    });
    return (
      <div className="nine-by-nine">
        <ThreeByThree
          mandalArtTodo={renderValue[0]}
          grade="subTodos"
          selectMandal={selectMandal(1)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[1]}
          grade="subTodos"
          selectMandal={selectMandal(2)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[2]}
          grade="subTodos"
          selectMandal={selectMandal(3)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[3]}
          grade="subTodos"
          selectMandal={selectMandal(4)}
        />
        <ThreeByThree
          mandalArtTodo={data}
          grade="todos"
          selectMandal={selectMandal(0)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[4]}
          grade="subTodos"
          selectMandal={selectMandal(5)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[5]}
          grade="subTodos"
          selectMandal={selectMandal(6)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[6]}
          grade="subTodos"
          selectMandal={selectMandal(7)}
        />
        <ThreeByThree
          mandalArtTodo={renderValue[7]}
          grade="subTodos"
          selectMandal={selectMandal(8)}
        />
      </div>
    );
  }
}
