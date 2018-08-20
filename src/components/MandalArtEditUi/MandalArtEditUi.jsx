import React, { Component } from 'react';
import './MandalArtEditUi.scss';

export default class MandalArtEditUi extends Component {
  render() {
    const { done, onClickRadio } = this.props;
    return (
      <div className="edit-ui-modal">
        <div className="edit-ui-header">달성 기간을 설정해주세요</div>
        <div className="edit-ui-input">
          <input type="date" /> - <input type="date" />
        </div>
        <div className="edit-ui-header">코멘트를 적어보세요</div>
        <div className="edit-ui-input">
          <input type="text" />
        </div>
        <form className="actions">
          목표달성여부
          <input
            id="undone"
            name="isdone"
            type="radio"
            value="undone"
            onChange={onClickRadio(true)}
            checked={!done}
          />
          <label className={!done ? 'select' : ''} htmlFor="undone">
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
            onChange={onClickRadio(false)}
            checked={done}
          />
          <label className={done ? 'select' : ''} htmlFor="done">
            <span>
              <span />
            </span>
            달성완료!
          </label>
        </form>
      </div>
    );
  }
}
