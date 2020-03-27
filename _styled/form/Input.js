import styled from 'styled-components';
import { color } from '../config/Styles';

const Input = styled.input`
  line-height: 1.6;
  padding: 6px 8px;
  border-radius: 4px;
  border: 2px solid ${color.primary.original};
  outline: none;

  &:hover,
  &:focus {
    border-color: ${color.primary.hover};
  }
`;

export default Input;