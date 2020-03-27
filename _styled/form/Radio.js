import React from 'react';
import styled from 'styled-components';

function Radio(props) {
  const styles = ``

  const Input = styled.input`${styles}`

  return (
    <Input type="radio" {...props} />
  )
}

export default Radio;