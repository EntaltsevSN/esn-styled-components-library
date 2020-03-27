import React from 'react';
import styled from 'styled-components';

function Select(props) {
  const styles = ``

  const Select = styled.select`${styles}`

  return (
    <Select {...props} >{props.children}</Select>
  )
}

export default Select;