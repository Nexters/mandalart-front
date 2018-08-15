import React, { Component, Fragment } from 'react';

import { HeaderContainer, MandalArtRenderContainer } from '../containers';

class MandalArtEditor extends Component {
  state = {
    // 나중에...
  };
  render() {
    return (
      <div className="background">
        <MandalArtRenderContainer />
        <HeaderContainer mandalPage />
      </div>
    );
  }
}

export default MandalArtEditor;
