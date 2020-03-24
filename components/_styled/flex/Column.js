import styled from 'styled-components';

const checkProperty = prop => {
  switch(prop) {
    case 'xs':
      return `481px`
    case 'sm':
      return `768px`
    case 'md':
      return `992px`
    case 'lg':
      return `1201px`
    default: 
      return ``
  }
}

const Column = styled.div`
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;

  ${props => Object.keys(props).map(prop => `
    @media (min-width: ${(checkProperty(prop).length > 0) && checkProperty(prop)}) {
      width: calc(100% / 12 * ${props[prop]})
    }
  `)}
`;

export default Column;