import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames';

import { userPic } from '../../static/images';
import './Header.scss';

export default class Header extends Component {
  render() {
    const { onClickLogOutBtn, mandalPage, gravePage } = this.props;
    return (
      <header className="header-wrapper">
        <div className="header-container">
          <div className="header-logo">
            <Link to="/">MandalArt</Link>
            <div className="header-menu">
              <Link to="/mandal-arts" className={className({ mandalPage })}>
                나의 만다라트
              </Link>
              <Link
                to="/mandal-arts/graves"
                className={className({ gravePage })}
              >
                만다라트 무덤
              </Link>
            </div>
          </div>
          <div className="header-user">
            <img src={userPic} alt="userPic" />
            <span>User Name</span>
            <button onClick={onClickLogOutBtn}>Logout</button>
          </div>
        </div>
      </header>
    );
  }
}
