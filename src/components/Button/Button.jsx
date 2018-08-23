import React from 'react';
import styled from '../../styled-components';

const Container = styled.input`
  width: 150px;
  background-color: #1882ff;
  color: white;
  text-transform: uppercase;
  padding: 15px 0;
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

const Button = ({ value, onClick, disabled = false }) => (
  <Container value={value} disabled={false} onClick={onClick} />
);

export default Button;
