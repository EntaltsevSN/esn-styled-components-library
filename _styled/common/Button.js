import styled from 'styled-components';
import { color } from '../config/Styles';

const Button = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: inherit;
  border: 2px solid ${color.primary.original};
  border-radius: 4px;
  background-color: ${color.primary.original};
  color: ${color.primary.text};
  cursor: pointer;
  letter-spacing: .25px;
  white-space: nowrap;
  user-select: none;
  transition: all ease-out .2s;
  touch-action: manipulation;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: ${color.primary.hover};
    border-color: ${color.primary.hover};
  }

  ${props => {
    switch(props.type) {
      case 'bordered':
        return `
          &,
          &:hover,
          &:focus {
            background-color: transparent;
          }
          & {
            color: ${color.primary.original};
          }
          &:hover,
          &:focus {
            color: ${color.primary.hover}
          }
        `;
      case 'link':
        return `
          &,
          &:hover,
          &:focus {
            background-color: transparent;
            border-color: transparent;
          }
          & {
            color: ${color.primary.original};
          }
          &:hover,
          &:focus {
            color: ${color.primary.hover}
          }
        `;
      default:
        break;
    }
  }
  }
`;

export default Button;