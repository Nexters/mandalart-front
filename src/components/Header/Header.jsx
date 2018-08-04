import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          width: '100%',
          height: '8%',
          backgroundColor: '#e5e5e5',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
          <section>MandalArt</section>
          <section>
            <Link to="/mandal-arts" style={{ textDecoration: 'none' }}>
              나의 만다라트
            </Link>
            <Link to="/mandal-arts/graves" style={{ textDecoration: 'none' }}>
              만다라트 무덤
            </Link>
          </section>
          <section>
            <div style={{ display: 'inline-block' }}>User Pic</div>
            <span>User Name</span>
            <button>Logout Btn</button>
          </section>
        </div>
      </header>
    );
  }
}
