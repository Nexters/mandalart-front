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
      selected: true,
      depth: 1,
      number: 3,
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

  changeMandalData = ({ text, startDate, endDate }) => {
    const { depth, number } = this.state.selectedMandal;
    if (depth === 0) {
      this.setState(prevState => ({
        ...prevState,
        mandalArtData: {
          ...prevState.mandalArtData,
          text,
          startDate,
          endDate,
        },
      }));
      return;
    }
    const todo = [...this.state.mandalArtData.objective];
    if (number === 0) {
      todo[depth].objective[depth] = {
        ...todo[depth],
        text,
        startDate,
        endDate,
      };
    } else {
      todo[depth].objective[number] = {
        ...todo.objective[depth].objective[number],
        text,
        startDate,
        endDate,
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

  onClickRadio = bool => () => {
    const { depth, number } = this.state.selectedMandal;
    if (depth === 0) {
      return;
    }
    const todo = [...this.state.mandalArtData.objective];
    if (number === 0) {
      todo[depth - 1].done = bool;
    } else {
      todo[depth - 1].objective[number - 1].done = bool;
    }
    this.setState(prevState => ({
      ...prevState,
      mandalArtData: {
        ...prevState.mandalArtData,
        objective: todo,
      },
    }));
  };

  onClickToRewardPage = () => {
    this.setState({ isRewardSetting: true });
  };

  render() {
    const { onClickRadio, selectMandal } = this;
    const { mandalArtData, isRewardSetting, selectedMandal } = this.state;
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
            {selectedMandal.selected && (
              <MandalArtEditUi
                done={false}
                onClickRadio={onClickRadio}
                data={mandalArtData}
                selectedMandal={selectedMandal}
              />
            )}
          </div>
        )}
      </Fragment>
    );
  }
}
