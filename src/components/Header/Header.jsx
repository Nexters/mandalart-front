import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { userPic } from '../../static/images';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <div className="header-container">
          <section className="header-logo">
            MandalArt
            <section className="header-menu">
              <Link to="/mandal-arts">나의 만다라트</Link>
              <Link to="/mandal-arts/graves">만다라트 무덤</Link>
            </section>
          </section>
          <section className="header-user">
            <img src={userPic} alt="userPic" />
            <span>User Name</span>
            <button>Logout</button>
          </section>
        </div>
      </header>
    );
  }
}
