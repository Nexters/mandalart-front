import React, { Component } from 'react';
import classNames from 'classnames';
import './MandalArtEditorHeader.scss';

export default class MandalArtEditorHeader extends Component {
  state = {};
  render() {
    const { isRewardSetting } = this.props;
    console.log(isRewardSetting);
    return (
      <div className="editor-header">
        <span>정연이의 취업준비</span>
        <div>
          <span className={classNames(!isRewardSetting && 'active')}>
            1.만다라트 작성
          </span>
          <span className={classNames(isRewardSetting && 'active')}>
            2.보상 설정
          </span>
        </div>
      </div>
    );
  }
}
