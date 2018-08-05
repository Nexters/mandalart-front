import React, { Component, Fragment } from 'react';

import { MandalArtRenderer } from '../components';
import { HeaderContainer } from '../containers';

class MandalArtEditor extends Component {
  state = {
    // 나중에...
  };
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <MandalArtRenderer />
      </Fragment>
    );
  }
}

export default MandalArtEditor;
