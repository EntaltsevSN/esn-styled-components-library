import React from 'react';
import styled from 'styled-components';
import { color } from '../config/Styles';

function Select(props) {
  const styles = `
    border: 2px solid ${color.primary.original};
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;

    &:focus {
      border-color: ${color.primary.hover}
    }
  `

  const Select = styled.select`${styles}`

  return (
    <Select {...props} >{props.children}</Select>
  )
}

export default Select;