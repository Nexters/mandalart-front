import React, { Component } from 'react';
import './MandalArtEditorHeader.scss';

export default class MandalArtEditorHeader extends Component {
  state = {};
  render() {
    return (
      <div className="editor-header">
        <span>정연이의 취업준비</span>
        <div>
          <span>1.만다라트 작성</span>
          <span>2.보상 설정</span>
        </div>
      </div>
    );
  }
}
