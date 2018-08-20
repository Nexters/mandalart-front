import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../styled-components';

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

const MandalArtListsPresenter = ({
  data: { GetMyMandalarts: { mandalarts = null } = {} } = {},
  loading,
}) => (
  <Container>
    <MandalartHeader>나의 만다라트 목록</MandalartHeader>
    <FlexContainer>
      {!loading && (
        <AddMandalart>
          <Link to="mandal-arts/new">
            <PlusIcon>+</PlusIcon>
          </Link>
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
export default MandalArtListsPresenter;
