import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Header } from '../components';

export default class HeaderContainer extends Component {
  state = {
    redirectToLogin: false,
  };

  onClickLogOutBtn = () => {
    this.setState({
      redirectToLogin: true,
    });
  };
  render() {
    const { redirectToLogin } = this.state;
    return redirectToLogin ? (
      <Redirect to="/" />
    ) : (
      <Header
        redirectToLogin={redirectToLogin}
        onClickLogOutBtn={this.onClickLogOutBtn}
      />
    );
  }
}
