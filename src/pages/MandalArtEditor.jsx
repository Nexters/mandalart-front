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
        <HeaderContainer mandalPage />
        <div className="page-container">
          <div style={{ width: '100%', height: 60 }}>header</div>
          hasdfadslfkj
        </div>
      </Fragment>
    );
  }
}

export default MandalArtEditor;
