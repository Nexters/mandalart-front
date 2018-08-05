import React, { Component } from 'react';
import { MandalArtRenderer } from '../components';

export default class MandalArtRenderContainer extends Component {
  state = {
    mandalArtData: {
      text: 'this is goal',
      color: 'gold',
      selected: false,
      objective: [...new Array(8)].map((_, index) => ({
        text: `mainObject${index}`,
        color: '#0000FF',
        selected: false,
        objective: [...new Array(8)].map((_, indexSub) => ({
          text: `subObject${indexSub}`,
          color: '#FF3410',
          selected: false,
        })),
      })),
    },
  };
  render() {
    const { mandalArtData } = this.state;
    return <MandalArtRenderer data={mandalArtData} />;
  }
}
