import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames';
import styled from '../../styled-components';

import { userPic } from '../../static/images';
import './Header.scss';

const Container = styled.div``;

const Button = styled.div`
  color: #52a2ff;
  padding-top: 4px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Header = ({
  data: { GetMyProfile: { user = null } = {} } = {},
  loading,
  mandalPage,
  gravePage,
  logUserOut,
  listPage,
}) => (
  <Container>
    {!loading &&
      user &&
      user.fullName && (
        <header className={className('header-wrapper', { listPage })}>
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

              <Button
                onClick={() => {
                  logUserOut().then(() => {
                    window.location.reload();
                    this.props.history.replace('/');
                  });
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </header>
      )}
  </Container>
);

export default Header;
