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
// import Button from '../Button';

import { GET_MANDALARTS } from '../../sharedQueries';
import { format } from 'url';

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
    cursor: pointer;
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

const AddForm = styled(Form)`
  text-align: center;
`;

const TextInput = styled(Input)`
  display: block;
  margin-left: 90px;
  margin-bottom: 20px;
  padding-top: 10px;
  width: 300px;
`;

const DateContainer = styled.div`
  text-align: center;
`;

const DateInput = styled.input`
  ::-webkit-clear-button {
    display: none;
  }

  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    color: #2c3e50;
  }

  appearance: none;
  -webkit-appearance: none;
  color: #d4d4d4;
  font-size: 14px;
  text-align: center;
  width: 140px;
  height: 50px;
  margin-left: 10px;
  margin-bottom: 40px;
  border: none;
  border-radius: 20px;
  background: #f4f4f4;
  padding: 5px;
  display: inline-block !important;
  visibility: visible !important;

  &:focus {
    box-shadow: 0 0 30px #aaaaaa;
    -webkit-box-shadow: 0 0 30px #aaaaaa;
    -moz-box-shadow: 0 0 30px #aaaaaa;
  }
`;

const CompleteButton = styled.div`
  width: 150px;
  height: 50px;
  background-color: #1882ff;
  color: white;
  text-transform: uppercase;
  margin-left: 160px;
  padding-top: 17px;
  font-size: 16px;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
  }
`;

const date = new Date();
const yesterday = date.setDate(date.getDate() - 1);

Modal.setAppElement('#root');

class AddMandalartMutation extends Mutation {}

class CreateButton extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      name: '',
      goal: '',
      startDate: '',
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

  onChangeStartDate = date =>
    this.setState({ startDate: moment(date).format('YYYY/MM/DD') });

  onChangeEndDate = date =>
    this.setState({ endDate: moment(date).format('YYYY/MM/DD') });

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
          <AddForm>
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
            <DateContainer>
              <DateInput
                placeholder="시작 일자"
                type="text"
                onChange={event =>
                  this.setState({
                    startDate: moment(event.target.value).format('YYYY/MM/DD'),
                  })
                }
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
              <DateInput
                placeholder="마감 일자"
                type="text"
                onChange={event =>
                  this.setState({
                    endDate: moment(event.target.value).format('YYYY/MM/DD'),
                  })
                }
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </DateContainer>

            <CompleteButton onClick={this.handleCreate}>만들기</CompleteButton>
          </AddForm>
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

  onFocus = e => {
    e.currentTarget.type = 'date';
  };

  onBlur = e => {
    e.currentTarget.type = 'text';
  };

  handleCreate = () => {
    const { name, goal, startDate, endDate } = this.state;

    if (name.length < 2) {
      toast.error('제목을 2자 이상 적어주세요!');
      return;
    }

    if (goal.length < 3) {
      toast.error('핵심 목표를 3자 이상 적어주세요!');
      return;
    }

    if (startDate.length < 10) {
      toast.error('시작 일자를 설정해주세요!');
      return;
    }

    if (endDate.length < 10) {
      toast.error('마감 일자를 설정해주세요!');
      return;
    }

    if (new Date(startDate) < yesterday) {
      toast.error('시작 일자는 현재보다 과거일 수 없습니다.');
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      toast.error('종료 일자는 시작 일자보다 과거일 수 없습니다.');
      return;
    }

    this.props
      .addMandalart({
        variables: { name, goal, startDate, endDate },
        refetchQueries: [{ query: GET_MANDALARTS }],
      })
      .then(res => {
        const { AddMandalart } = res.data;
        if (AddMandalart.ok) {
          this.setState({
            name: '',
            goal: '',
            startDate: '',
            endDate: '',
          });
          toast.success('🙌 새로운 만다라트가 추가되었습니다!');
        } else {
          toast.error(AddMandalart.error);
        }
      })
      .then(this.closeModal());
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
