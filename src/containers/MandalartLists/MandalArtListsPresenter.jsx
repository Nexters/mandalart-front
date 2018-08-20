import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../styled-components';
import Modal from 'react-modal';

import Input from '../../components/Input';

const Container = styled.div`
  width: $inner-width;
  margin: 67px auto 0 auto;
`;

const MandalartHeader = styled.div`
  font-size: 30px;
  color: #d4d4d4;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 53px;
`;

const AddMandalart = styled.div`
  width: 210px;
  height: 210px;
  display: inline-block;
  margin-right: 52px;
  background: #ffffff;
  border: 3px dashed #1882ff;
  border-radius: 10px;
  box-sizing: border-box;
`;

const PlusIcon = styled.div`
  text-align: center;
  color: #1882ff;
  padding-top: 10px;
  line-height: 210px;
  font-size: 210px;
  font-weight: 300;
`;

const AddText = styled.div`
  margin: 0 auto;
  color: #1882ff;
  font-size: 23px;
  position: relative;
  margin-top: -10px;
  top: 21px;
`;

const Mandalart = styled.div`
  background: #f5f5f5;
  width: 210px;
  height: 210px;
  display: inline-block;
  margin-right: 52px;
  margin-bottom: 120px;
`;

const MandalartName = styled.div`
  position: relative;
  font-size: 23px;
  color: #606060;
  top: 233px;
`;

const MandalartDate = styled.div`
  position: relative;
  font-size: 17px;
  color: #d5d5d5;
  top: 258px;
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
    height: '330px',
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

const ExtendedInput = styled(Input)`
  display: block;
  margin-left: 70px;
  align: center;
  width: 300px;
`;

Modal.setAppElement('#root');

class MandalArtListsPresenter extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const {
      data: { GetMyMandalarts: { mandalarts = null } = {} } = {},
      loading,
    } = this.props;
    return (
      <Container>
        <MandalartHeader>나의 만다라트 목록</MandalartHeader>
        <FlexContainer>
          {!loading && (
            <AddMandalart>
              <PlusIcon onClick={this.openModal}>+</PlusIcon>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={modalStyles}
                contentLabel="새 만다라트"
              >
                <ModalHeader>새 만다라트 추가</ModalHeader>
                <CloseButton onClick={this.closeModal} />
                <form>
                  <ExtendedInput />
                </form>
              </Modal>
              <AddText>새로운 만다라트</AddText>
            </AddMandalart>
          )}

          {!loading &&
            mandalarts.length !== 0 &&
            mandalarts.map(mandalart => (
              <Mandalart key={mandalart.id}>
                <MandalartName>{mandalart.name}</MandalartName>
                <MandalartDate>
                  {mandalart.startDate} - {mandalart.endDate}
                </MandalartDate>
              </Mandalart>
            ))}
        </FlexContainer>
      </Container>
    );
  }
}

export default MandalArtListsPresenter;
