import React, { Component, Fragment } from 'react';
import curry from 'lodash/curry';
import cloneDeep from 'lodash/cloneDeep';
import styled from '../../styled-components';
import classNames from 'classnames';

import {
  SimpleRenderer,
  RewardSetting,
  MandalArtEditUi,
} from '../../components';

const EditorHeader = styled.div`
  position: relative;
  z-index: 10;
  top: 64px;
  height: 100px;
  width: 1366px;
  margin: 0 auto;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    &.active {
      opacity: 0;
    }
  }
  & > div {
    & > button {
      font-weight: bold;
      font-size: 21px;
      color: #52a2ff;
      background: #1477ec;
      padding: 0.6rem;
      border-radius: 15px;
      margin-left: 10px;
      &.active {
        color: #fff;
      }
    }
  }
`;

class MandalartRenderPresenter extends Component {
  state = {
    // 서버에서 오는 데이터를 이런 형태로 바꿔서 사용할거에요!
    mandalArtData: null,
    //   id: 3,
    //   text: 'this is goal',
    //   startDate: '2018-07-02',
    //   endDate: '2018-07-02',
    //   done: false,
    //   objective: [...new Array(8)].map((_, index) => ({
    //     id: `mainObject${index}`,
    //     text: `mainObject${index}`,
    //     startDate: '2018-07-02',
    //     endDate: '2018-07-02',
    //     color: '#4198FF',
    //     done: false,
    //     objective: [...new Array(8)].map((_, indexSub) => ({
    //       id: `subObject${indexSub}`,
    //       text: `subObject${indexSub}`,
    //       startDate: '2018-07-02',
    //       endDate: '2018-07-02',
    //       color: '#5CA7FF',
    //       done: false,
    //     })),
    //   })),
    // },
    zoomStatus: false,
    selectedMandal: {
      selected: false,
      depth: 1,
      number: 3,
    },
    isRewardSetting: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.mandalArtData === null) {
      return {
        ...prevState,
        mandalArtData: nextProps.data.GetMandalart.mandalart,
      };
    }
    return null;
  }

  selectMandal = curry((depth, number) => () => {
    this.setState(prevState => ({
      ...prevState,
      selectedMandal: {
        selected: true,
        depth,
        number,
      },
    }));
  });

  changeMandalData = type => event => {
    const { depth, number } = this.state.selectedMandal;
    const data =
      typeof event.target === 'undefined' ? event : event.target.value;
    if (depth === 0) {
      this.setState(prevState => ({
        ...prevState,
        mandalArtData: {
          ...prevState.mandalArtData,
          [type]: data,
        },
      }));
      return;
    }
    let todo = cloneDeep(this.state.mandalArtData.todos);
    if (number === 0) {
      todo[depth - 1] = {
        ...todo[depth - 1],
        [type]: data,
      };
    } else {
      console.log(todo[depth - 1].subTodos[number - 1]);
      todo[depth - 1].subTodos[number - 1] = {
        ...todo[depth - 1].subTodos[number - 1],
        [type]: data,
      };
    }
    this.setState(prevState => ({
      ...prevState,
      mandalArtData: {
        ...prevState.mandalArtData,
        todos: todo,
      },
    }));
  };

  goToRewardPage = () => {
    this.setState({ isRewardSetting: true });
  };

  goToEditPage = () => {
    this.setState({ isRewardSetting: false });
  };

  render() {
    // props에서 todos 뽑아옴
    const { mandalArtData, isRewardSetting, selectedMandal } = this.state;
    const { selectMandal, changeMandalData } = this;

    // 가져온 todos 데이터 찍어보기
    console.log(this.props);
    console.log('state', this.state);

    return (
      mandalArtData !== null && (
        <Fragment>
          <EditorHeader isRewardSetting={isRewardSetting}>
            <span className={classNames(isRewardSetting && 'active')}>
              정연이의 취업준비
            </span>
            <div>
              <button
                onClick={this.goToEditPage}
                className={classNames(!isRewardSetting && 'active')}
              >
                1.만다라트 작성
              </button>
              <button
                onClick={this.goToRewardPage}
                className={classNames(isRewardSetting && 'active')}
              >
                2.보상 설정
              </button>
            </div>
          </EditorHeader>
          {isRewardSetting ? (
            <RewardSetting />
          ) : (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <SimpleRenderer
                  data={mandalArtData}
                  selectMandal={selectMandal}
                />
              </div>
              {selectedMandal.selected && (
                <MandalArtEditUi
                  data={mandalArtData}
                  selectedMandal={selectedMandal}
                  changeMandalData={changeMandalData}
                />
              )}
            </div>
          )}
        </Fragment>
      )
    );
  }
}

export default MandalartRenderPresenter;
