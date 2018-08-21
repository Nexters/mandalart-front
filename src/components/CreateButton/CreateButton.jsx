import React from 'react';
import { graphql, compose, Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import styled from '../../styled-components';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import Input from '../Input';
import Form from '../Form';
import Button from '../Button';

import { GET_MANDALARTS } from '../../sharedQueries';

const PlusIcon = styled.div`
  text-align: center;
  color: #1882ff;
  padding-top: 10px;
  line-height: 210px;
  font-size: 210px;
  font-weight: 300;
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '510px',
    height: '400px',
    border: 'none',
    borderRadius: '30px',
    boxShadow: '0 0 30px #aaaaaa',
  },
};

const ModalHeader = styled.div`
  display: inline-block;
  font-size: 22px;
  margin-top: 18px;
  margin-bottom: 40px;
  align: left;
  color: #e5e5e5;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const TextInput = styled(Input)`
  display: block;
  margin-left: 80px;
  margin-bottom: 20px;
  align: center;
  width: 300px;
`;

const DateContainer = styled.div`
  text-align: center;
`;

const DateInput = styled(Input)`
  display: inline-block;
  margin-right: 10px;
  align: center;
  width: 140px;

  -webkit-align-items: center;
     display: -webkit-inline-flex;
     font-family: monospace;
     overflow: hidden;
     padding: 0;
     -webkit-padding-start: 1px;

  ::-webkit-datetime-edit {
    -webkit-flex: 1;
    -webkit-user-modify: read-only !important;
    display: inline-block;
    min-width: 0;
    overflow: hidden;
  }

  ::-webkit-datetime-edit-text {
    color: #e5e5e5;
    font-size: 5px
    padding: 0 0.3em;
  }
  ::-webkit-datetime-edit-month-field {
    color: #e5e5e5;
    font-size: 5px
  }
  ::-webkit-datetime-edit-day-field {
    color: #e5e5e5;
    font-size: 5px
  }
  ::-webkit-datetime-edit-year-field {
    color: #e5e5e5;
    font-size: 5px
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    color: #e5e5e5;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    -webkit-user-modify: read-only !important;
    display: inline-block;
    padding: 1px 0;
    white-space: pre;
  }
`;

const now = moment().format('YYYY/MM/DD');
Modal.setAppElement('#root');

class AddMandalartMutation extends Mutation {}

class CreateButton extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      name: '',
      goal: '',
      startDate: moment().format('YYYY/MM/DD'),
      endDate: '',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChangeStartDate = date => this.setState({ startDate: date });

  onChangeEndDate = date => this.setState({ endDate: date });

  render() {
    return (
      <React.Fragment>
        <PlusIcon onClick={this.openModal}>+</PlusIcon>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="새 만다라트"
        >
          <ModalHeader>새 만다라트 추가</ModalHeader>
          <CloseButton onClick={this.closeModal} />
          <Form>
            <TextInput
              placeholder="만다라트 제목"
              type={'text'}
              onChange={this.onInputChange}
              value={this.state.name}
              name={'name'}
            />
            <TextInput
              placeholder="핵심 목표"
              type={'text'}
              onChange={this.onInputChange}
              value={this.state.goal}
              name={'goal'}
            />
            <DatePicker
              selected={this.state.startDate}
              onChange={this.onInputChange}
              minDate={moment()}
              maxDate={moment().add(5, 'days')}
              placeholderText="Select a date between today and 5 days in the future"
            />

            <Button
              disabled={this.props.loading}
              value={this.props.loading ? '생성 중' : '만들기'}
              onClick={this.handleCreate}
            />
          </Form>
        </Modal>
      </React.Fragment>
    );
  }

  onInputChange = async event => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    });
  };

  handleCreate = async () => {
    const { name, goal, startDate, endDate } = this.state;

    await this.props.addMandalart({
      variables: { name, goal, startDate, endDate },
      refetchQueries: [{ query: GET_MANDALARTS }],
      onCompleted: [
        data => {
          const { AddMandalart } = data;
          if (AddMandalart.ok) {
            toast.success('🙌 새로운 만다라트가 추가되었습니다!');
          } else {
            toast.error(AddMandalart.error);
          }
        },
      ],
    });
    this.props.history.replace('/');
  };
}

const ADD_MANDALART = gql`
  mutation addMandalart(
    $name: String!
    $goal: String!
    $startDate: String!
    $endDate: String!
  ) {
    AddMandalart(
      name: $name
      goal: $goal
      startDate: $startDate
      endDate: $endDate
    ) {
      ok
      error
    }
  }
`;

export default graphql(ADD_MANDALART, { name: 'addMandalart' })(CreateButton);
