import React, { Component, Fragment } from 'react';

import { HeaderContainer } from '../containers';
import MandalArtListContainer from '../containers/MandalArtListContainer';

class MandalArtList extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer mandalPage listPage />
        <div className="page-container">
          <MandalArtListContainer />
        </div>
      </Fragment>
    );
  }
}

export default MandalArtList;
