import React, { Component, Fragment } from 'react';
import {
  MandalArtRenderer,
  RewardSetting,
  MandalArtEditorHeader,
} from '../components';

export default class MandalArtRenderContainer extends Component {
  state = {
    mandalArtData: {
      id: 3,
      text: 'this is goal',
      color: '#73B4FF',
      selected: false,
      objective: [...new Array(8)].map((_, index) => ({
        id: `mainObject${index}`,
        text: `mainObject${index}`,
        color: '#4198FF',
        selected: false,
        objective: [...new Array(8)].map((_, indexSub) => ({
          id: `subObject${indexSub}`,
          text: `subObject${indexSub}`,
          color: '#5CA7FF',
          selected: false,
        })),
      })),
    },
    isRewardSetting: false,
  };

  selectMandal = () => {};

  render() {
    const { mandalArtData, isRewardSetting } = this.state;
    return (
      <Fragment>
        <MandalArtEditorHeader />
        {isRewardSetting ? (
          <RewardSetting />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
            }}
          >
            <MandalArtRenderer data={mandalArtData} />
          </div>
        )}
      </Fragment>
    );
  }
}
