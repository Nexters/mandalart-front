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
    const { mandalPage, gravePage, listPage } = this.props;
    return redirectToLogin ? (
      <Redirect to="/" />
    ) : (
      <Header
        listPage={listPage}
        mandalPage={mandalPage}
        gravePage={gravePage}
        redirectToLogin={redirectToLogin}
        onClickLogOutBtn={this.onClickLogOutBtn}
      />
    );
  }
}
