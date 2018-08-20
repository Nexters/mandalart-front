import React from 'react';
import styled from '../../styled-components';

const Container = styled.input`
  border: none;
  border-radius: 20px;
  background: #f4f4f4;
  font-size: 20px;
  width: 100%;
  height: 50px;
  text-align: center;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: #d4d4d4;
    font-weight: 300;
  }
`;

const Input = ({
  placeholder = '',
  type = 'text',
  required = true,
  value,
  name = '',
  onChange,
  className,
}) => (
  <Container
    className={className}
    onChange={onChange}
    name={name}
    type={type}
    required={required}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;
