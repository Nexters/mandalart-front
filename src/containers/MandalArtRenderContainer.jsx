import React, { Component, Fragment } from 'react';
import {
  MandalArtRenderer,
  RewardSetting,
  MandalArtEditorHeader,
  MandalArtEditUi,
} from '../components';

export default class MandalArtRenderContainer extends Component {
  state = {
    mandalArtData: {
      id: 3,
      text: 'this is goal',
      color: '#73B4FF',
      startDate: '2018-07-02',
      endDate: '2018-07-02',
      done: false,
      objective: [...new Array(8)].map((_, index) => ({
        id: `mainObject${index}`,
        text: `mainObject${index}`,
        startDate: '2018-07-02',
        endDate: '2018-07-02',
        color: '#4198FF',
        done: false,
        objective: [...new Array(8)].map((_, indexSub) => ({
          id: `subObject${indexSub}`,
          text: `subObject${indexSub}`,
          startDate: '2018-07-02',
          endDate: '2018-07-02',
          color: '#5CA7FF',
          done: false,
        })),
      })),
    },
    selectedMandal: {
      selected: false,
      depth: 0,
      number: 0,
    },
    isRewardSetting: false,
  };

  selectMandal = (depth, number) => {
    this.setState({
      selectedMandal: {
        selected: true,
        depth,
        number,
      },
    });
  };

  changeMandalData = ({ text, startDate, endDate, done }) => {
    const { depth, number } = this.state.selectedMandal;
    if (depth === 0) {
      this.setState(prevState => ({
        ...prevState,
        mandalArtData: {
          ...prevState.mandalArtData,
          text,
          startDate,
          endDate,
          done,
        },
      }));
      return;
    }
    const todo = [...this.state.mandalArtData.objective];
    if (number === 0) {
      todo.objective[depth] = {
        ...todo[depth],
        text,
        startDate,
        endDate,
        done,
      };
    } else {
      todo[depth].objective[number] = {
        ...todo.objective[depth].objective[number],
        text,
        startDate,
        endDate,
        done,
      };
    }
    this.setState(prevState => ({
      ...prevState,
      mandalArtData: {
        ...prevState.mandalArtData,
        objective: todo,
      },
    }));
  };

  onClickRadio = () => {
    console.log(1);
  };

  onClickToRewardPage = () => {
    this.setState({ isRewardSetting: true });
  };

  render() {
    const { onClickRadio, selectMandal } = this;
    const { mandalArtData, isRewardSetting } = this.state;
    return (
      <Fragment>
        <MandalArtEditorHeader isRewardSetting={isRewardSetting} />
        <button onClick={this.onClickToRewardPage}>보상설정</button>
        {isRewardSetting ? (
          <RewardSetting />
        ) : (
          <div>
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
              }}
            >
              <MandalArtRenderer
                data={mandalArtData}
                selectMandal={selectMandal}
              />
            </div>
            <MandalArtEditUi done={false} onClickRadio={onClickRadio} />
          </div>
        )}
      </Fragment>
    );
  }
}
