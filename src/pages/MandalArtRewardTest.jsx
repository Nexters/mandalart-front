import React, { Component, Fragment } from 'react';
import { RewardSetting } from '../components';
import { HeaderContainer } from '../containers';

export default class MandalArtRewardTest extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <div className="page-container">
          <RewardSetting />
        </div>
      </Fragment>
    );
  }
}
