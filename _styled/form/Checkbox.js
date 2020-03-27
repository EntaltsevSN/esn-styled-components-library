import React from 'react';
import styled from 'styled-components';

function Checkbox(props) {
  const styles = ``

  const Input = styled.input`${styles}`

  return (
    <Input type="checkbox" {...props} />
  )
}

export default Checkbox;