import React, { Component } from 'react';
import './GraveLists.scss';

export default class GraveLists extends Component {
  renderHeavenLists = () => {
    const { heavenLists } = this.props;
    if (heavenLists.length)
      return heavenLists.map((el, i) => (
        <li className="lists" key={i}>
          <p className="date">
            {el.start_date}~{el.end_date}
          </p>
          <p className="title">{el.title}</p>
          <p className="rate">{el.achRate}%</p>
        </li>
      ));
  };

  renderHellLists = () => {
    const { hellLists } = this.props;
    if (hellLists.length)
      return hellLists.map((el, i) => (
        <li className="lists" key={i}>
          <p className="date">
            {el.start_date}~{el.end_date}
          </p>
          <p className="title">{el.title}</p>
          <p className="rate">{el.achRate}%</p>
        </li>
      ));
  };
  render() {
    return (
      <div className="grave-container">
        <h1 className="grave-title">
          만다라트 무덤<button>모두 읽은 상태로 표시</button>
        </h1>
        <section className="grave-lists">
          <ul className="heaven">
            <h2>천국 만다라트</h2>
            {this.renderHeavenLists()}
          </ul>
          <ul className="hell">
            <h2>지옥 만다라트</h2>
            {this.renderHellLists()}
          </ul>
        </section>
      </div>
    );
  }
}
