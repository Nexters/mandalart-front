import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <div className="header-container">
          <section>MandalArt</section>
          <section>
            <Link to="/mandal-arts">나의 만다라트</Link>
            <Link to="/mandal-arts/graves">만다라트 무덤</Link>
          </section>
          <section className="header-user">
            <div>User Pic</div>
            <span>User Name</span>
            <button>Logout Btn</button>
          </section>
        </div>
      </header>
    );
  }
}
