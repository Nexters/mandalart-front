import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import styled from '../../styled-components';

import './FBLoginPresenter.scss';

const Container = styled.div`
  margin: auto;
  padding: 50px 20px;
`;

const Link = styled.div`
  margin: auto;
  cursor: pointer;
`;

const FBLoginPresenter = ({ loginCallback }) => (
  <Container>
    <FacebookLogin
      appId="250416945587793"
      autoLoad={false}
      fields="name,first_name,last_name,email"
      callback={loginCallback}
      render={renderProps => (
        <button className="fb-button">
          <Link onClick={renderProps.onClick} className="fb-text">
            시작하기
          </Link>
        </button>
      )}
    />
  </Container>
);

export default FBLoginPresenter;
