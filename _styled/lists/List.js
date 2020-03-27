import React from 'react';
import styled from 'styled-components';

function List(props) {
  const styles = ``

  const Ul = styled.ul`${styles}`
  const Ol = styled.ol`${styles}` 

  return (
    (props.type === 'ol')
      ? <Ol {...props} >{props.children}</Ol>
      : <Ul {...props} >{props.children}</Ul>
  )
}

export default List;