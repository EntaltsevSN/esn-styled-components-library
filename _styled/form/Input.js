import styled from 'styled-components';
import { color } from '../config/Styles';

const Input = styled.input`
  line-height: 1.6;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid ${color.border.original};
  outline: none;

  &:hover,
  &:focus {
    border-color: ${color.border.hover};
  }
`;

export default Input;