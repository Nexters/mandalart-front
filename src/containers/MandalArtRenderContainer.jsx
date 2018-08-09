import React, { Component } from 'react';
import { MandalArtRenderer } from '../components';

export default class MandalArtRenderContainer extends Component {
  state = {
    mandalArtData: {
      text: 'this is goal',
      color: '#73B4FF',
      selected: false,
      objective: [...new Array(8)].map((_, index) => ({
        text: `mainObject${index}`,
        color: '#4198FF',
        selected: false,
        objective: [...new Array(8)].map((_, indexSub) => ({
          text: `subObject${indexSub}`,
          color: '#5CA7FF',
          selected: false,
        })),
      })),
    },
  };
  render() {
    const { mandalArtData } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#1883FF',
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      >
        <MandalArtRenderer data={mandalArtData} />
      </div>
    );
  }
}
