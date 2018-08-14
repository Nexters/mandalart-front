import React, { Component, Fragment } from 'react';

import { HeaderContainer, MandalArtRenderContainer } from '../containers';

class MandalArtEditor extends Component {
  state = {
    // 나중에...
  };
  render() {
    return (
      <Fragment>
        <MandalArtRenderContainer />
        <HeaderContainer />
        <div className="page-container" />
      </Fragment>
    );
  }
}

export default MandalArtEditor;
