import React, { Component, Fragment } from 'react';
import { graphql, compose, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Spinner } from 'react-spinkit';

import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import {
  MandalArtRenderer,
  RewardSetting,
  MandalArtEditorHeader,
  MandalArtEditUi,
} from '../components';

import { getTodosByMandalartId } from '../sharedQueries';

// 이건 제가 작성할게요!
const mapStateToServerData = state => {
  return {
    //server model;
  };
};

const mapServerDataToState = serverData => {
  return {
    // to state
  };
};

class MandalArtRenderContainer extends Component {
  state = {
    // 서버에서 오는 데이터를 이런 형태로 바꿔서 사용할거에요!
    todos: {},
    mandalArtData: {
      id: 3,
      text: 'this is goal',
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
      depth: 1,
      number: 3,
    },
    isRewardSetting: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   // 이전 만다라트 데이터랑 새로 만들어진 만다라트 데이터랑 동기화
  //   if (isEqual(prevState.mandalArtData, this.state.mandalArtData)) {
  //     this.uploadServer();
  //   }
  // }

  // uploadServer = debounce(() => {
  //   // upload method
  //   const toServer = mapStateToServerData(this.state.mandalArtData);
  //   // upload(toServer);
  // }, 100);

  selectMandal = (depth, number) => {
    this.setState(prevState => ({
      ...prevState,
      selectedMandal: {
        selected: true,
        depth,
        number,
      },
    }));
  };

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
    let todo = [...this.state.mandalArtData.objective];
    if (number === 0) {
      todo[depth - 1] = {
        ...todo[depth - 1],
        [type]: data,
      };
    } else {
      todo[depth - 1].objective[number - 1] = {
        ...todo[depth - 1].objective[number - 1],
        [type]: data,
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

  onClickToRewardPage = () => {
    this.setState({ isRewardSetting: true });
  };

  // componentDidMount() {
  // this.props.data.refetch();
  // const { getTodosByMandalartId } = this.props;

  // if (!getTodosByMandalartId.loading) {
  //   if (getTodosByMandalartId.GetTodosByMandalartId) {
  //     const fetchData = getTodosByMandalartId.GetTodosByMandalartId.todos;
  //     this.setState({ todos: fetchData });
  //   }
  // }
  // }

  render() {
    const { selectMandal, changeMandalData } = this;
    const { mandalArtData, isRewardSetting, selectedMandal } = this.state;
    const { getTodosByMandalartId } = this.props;

    if (!getTodosByMandalartId.loading) {
      if (getTodosByMandalartId.GetTodosByMandalartId) {
        const fetchData = getTodosByMandalartId.GetTodosByMandalartId.todos;
        console.log('Fetch data: ', fetchData);
        // this.setState({ todos: fetchData });
      }
    }

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
                changeMandalData={changeMandalData}
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

// export default MandalArtRenderContainer;

export default graphql(getTodosByMandalartId, {
  name: 'getTodosByMandalartId',
  options: ({ mandalartId }) => ({
    variables: {
      mandalartId: mandalartId,
    },
  }),
})(MandalArtRenderContainer);
