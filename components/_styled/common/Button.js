import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: inherit;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #ddd;
  cursor: pointer;
  letter-spacing: .25px;
  white-space: nowrap;
  user-select: none;
  transition: all ease-out .2s;
  touch-action: manipulation;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: #bbb;
    border-color: #bbb;
  }

  ${props => Object.keys(props).map(prop => (props[prop] === 'bordered') && `
    &,
    &:hover,
    &:focus {
      background-color: transparent;
    }
  `)}
`;

export default Button;