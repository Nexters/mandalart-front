import React, { Component, Fragment } from 'react';
import { HeaderContainer, GraveListsContainer } from '../containers';

export default class MandalArtGrave extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer gravePage />
        <div className="page-container">
          <GraveListsContainer />
        </div>
      </Fragment>
    );
  }
}
