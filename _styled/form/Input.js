import styled from 'styled-components';

const Input = styled.input`
  line-height: 1.6;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;

  &:focus {
    border-color: #999;
  }
`;

export default Input;