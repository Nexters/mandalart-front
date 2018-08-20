import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './MandalArtList.scss';

class MandalArtList extends React.Component {
  renderMandalLists = () => {
    const { mandalLists } = this.props;
    return mandalLists.map((el, i) => (
      <li className="my-mandal" key={i}>
        <p className="title">{el.title}</p>
        <p className="date">{el.editDate}</p>
      </li>
    ));
  };
  render() {
    return (
      <div className="list-container">
        <h2>정연이의 만다라트 목록(2)</h2>
        <ul>
          <Link to="mandal-arts/new">
            <li className="new-mandal">
              <p className="plus">+</p>
              <p className="title">새로운 만다라트</p>
            </li>
          </Link>
          {this.renderMandalLists()}
          <li className="sample">
            <p>오타니 쇼헤이의 만다라트</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default MandalArtList;
