import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { USER_PROFILE } from '../sharedQueries';

import { Header } from '../components';

class ProfileQuery extends Query {}

export default class HeaderContainer extends Component {
  state = {
    redirectToLogin: false,
  };

  getUserProfile = response => {
    const { name, first_name, last_name, email, id, accessToken } = response;
  };

  onClickLogOutBtn = () => {
    this.setState({
      redirectToLogin: true,
    });
  };
  render() {
    const { redirectToLogin } = this.state;
    const { mandalPage, gravePage, isLoggedIn } = this.props;
    return redirectToLogin ? (
      <Redirect to="/" />
    ) : (
      <ProfileQuery query={USER_PROFILE}>
        {({ data, loading }) => (
          <Header
            data={data}
            loading={loading}
            mandalPage={mandalPage}
            gravePage={gravePage}
            redirectToLogin={redirectToLogin}
            onClickLogOutBtn={this.onClickLogOutBtn}
            getUserProfile={this.getUserProfile}
          />
        )}
      </ProfileQuery>
    );
  }
}
