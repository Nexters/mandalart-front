import React, { Component, Fragment } from 'react';

import { MandalArtRenderer } from '../components';
import { HeaderContainer } from '../containers';

class MandalArtEditor extends Component {
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
