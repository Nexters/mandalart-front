import React, { Component, Fragment } from 'react';
import {
  HeaderContainer,
  GraveListsContainer,
  GraveDetailContainer,
} from '../containers';

export default class MandalArtGrave extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <GraveListsContainer />
        <GraveDetailContainer />
      </Fragment>
    );
  }
}
