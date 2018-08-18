import React, { Component } from 'react';
import classNames from 'classnames';
import './GraveLists.scss';

export default class GraveLists extends Component {
  renderHeavenLists = () => {
    const { heavenLists, onClickGrave } = this.props;
    if (heavenLists.length)
      return heavenLists.map((el, i) => (
        <li
          className={classNames({ heavenIsRead: el.isRead })}
          key={i}
          data-index={i}
          data-place="heaven"
          onClick={onClickGrave}
        >
          <p
            className="title"
            data-index={i}
            data-place="heaven"
            onClick={onClickGrave}
          >
            {el.title}
            <span>N</span>
          </p>
          <p
            className="date"
            data-index={i}
            data-place="heaven"
            onClick={onClickGrave}
          >
            {el.start_date}~{el.end_date}
          </p>
          <p
            className="rate"
            data-index={i}
            data-place="heaven"
            onClick={onClickGrave}
          >
            달성률: {el.achRate}%
          </p>
        </li>
      ));
  };

  renderHellLists = () => {
    const { hellLists, onClickGrave } = this.props;
    if (hellLists.length)
      return hellLists.map((el, i) => (
        <li
          className={classNames({ hellIsRead: el.isRead })}
          key={i}
          data-index={i}
          data-place="hell"
          onClick={onClickGrave}
        >
          <p
            className="title"
            data-index={i}
            data-place="hell"
            onClick={onClickGrave}
          >
            {el.title}
            <span>N</span>
          </p>
          <p
            className="date"
            data-index={i}
            data-place="hell"
            onClick={onClickGrave}
          >
            {el.start_date}~{el.end_date}
          </p>
          <p
            className="rate"
            data-index={i}
            data-place="hell"
            onClick={onClickGrave}
          >
            달성률: {el.achRate}%
          </p>
        </li>
      ));
  };
  render() {
    return (
      <div className="grave-container">
        <h1 className="grave-title">
          만다라트 리포트
          <button>모두 읽은 상태로 표시</button>
        </h1>

        <section className="grave-lists">
          <ul className="heaven">
            <h2>천국 만다라트</h2>
            <br />
            {this.renderHeavenLists()}
          </ul>
          <ul className="hell">
            <h2>지옥 만다라트</h2>
            <br />
            {this.renderHellLists()}
          </ul>
        </section>
      </div>
    );
  }
}
