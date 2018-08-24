import React, { Component } from 'react';
import './MandalArtEditUi.scss';

const getFragmentData = (depth, num, data) => {
  if (depth === 0) {
    return {
      ...data,
    };
  }
  if (num === 0) {
    return {
      ...data.todos[depth - 1],
    };
  }
  return {
    ...data.todos[depth - 1].subTodos[num - 1],
  };
};

export default class MandalArtEditUi extends Component {
  startDate = React.createRef();
  endDate = React.createRef();

  onFocus = e => {
    e.target.type = 'date';
  };

  onBlur = e => {
    e.target.type = 'text';
  };

  render() {
    const {
      changeMandalData,
      data,
      selectedMandal: { depth, number },
    } = this.props;
    const { startDate, endDate, isAchieved, title, goal } = getFragmentData(
      depth,
      number,
      data,
    );
    return (
      <div className="edit-ui-modal">
        <div className="edit-ui-header">달성 기간을 설정해주세요</div>
        <div className="edit-ui-input">
          <input
            className="date-picker"
            ref={this.startDate}
            type="text"
            onChange={changeMandalData('startDate')}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={startDate}
          />{' '}
          -{' '}
          <input
            className="date-picker"
            ref={this.endDate}
            type="text"
            onChange={changeMandalData('endDate')}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            min={startDate}
            value={endDate}
          />
        </div>
        <div className="edit-ui-header">코멘트를 적어보세요</div>
        <div className="edit-ui-input">
          <input
            type="text"
            onChange={
              depth === 0 && number === 0
                ? changeMandalData('goal')
                : changeMandalData('title')
            }
            value={depth === 0 && number === 0 ? goal : title}
          />
        </div>
        <form className="actions">
          <div>목표달성여부</div>
          <div>
            <input
              id="undone"
              name="isdone"
              type="radio"
              value="undone"
              onChange={() => {
                changeMandalData('isAchieved')(false);
              }}
              checked={!isAchieved}
            />
            <label className={!isAchieved ? 'select' : ''} htmlFor="undone">
              <span>
                <span />
              </span>
              아직이요
            </label>
            <input
              id="done"
              name="isdone"
              type="radio"
              value="done"
              onChange={() => {
                changeMandalData('isAchieved')(true);
              }}
              checked={isAchieved}
            />
            <label className={isAchieved ? 'select' : ''} htmlFor="done">
              <span>
                <span />
              </span>
              달성완료!
            </label>
          </div>
        </form>
      </div>
    );
  }
}
