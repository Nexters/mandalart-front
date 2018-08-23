import React, { Component, Fragment } from 'react';

import { HeaderContainer } from '../containers';
import MandalartListsContainer from '../containers/MandalartLists/MandalartListsContainer';

class MandalArtList extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer mandalPage listPage />
        <div className="page-container">
          <MandalartListsContainer />
        </div>
      </Fragment>
    );
  }
}

export default MandalArtList;
