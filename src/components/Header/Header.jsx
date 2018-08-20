import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import className from 'classnames';
import styled from '../../styled-components';

import { userPic } from '../../static/images';
import './Header.scss';

const Container = styled.div`
  height: 100%;
`;

const Header = ({
  data: { GetMyProfile: { user = null } = {} } = {},
  loading,
  mandalPage,
  gravePage,
  logUserOut,
}) => (
  <Container>
    {!loading &&
      user &&
      user.fullName && (
        <header className="header-wrapper">
          <div className="header-container">
            <div className="header-logo">
              <Link to="/">MandalArt</Link>
              <div className="header-menu">
                <Link to="/mandal-arts" className={className({ mandalPage })}>
                  나의 만다라트
                </Link>
                <Link
                  to="/mandal-arts/reports"
                  className={className({ gravePage })}
                >
                  만다라트 무덤
                </Link>
              </div>
            </div>
            <div className="header-user">
              <img src={user.profileImage || userPic} alt="userPic" />
              <span>{user.fullName}</span>

              <button
                onClick={() => {
                  logUserOut().then(() => {
                    window.location.reload();
                    this.props.history.replace('/');
                  });
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      )}
  </Container>
);

export default Header;
