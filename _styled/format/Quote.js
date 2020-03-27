import styled from 'styled-components';
import { color } from '../config/Styles';

const Quote = styled.blockquote`
  border-left: 4px solid ${color.primary.hover};
  background-color: ${color.primary.original};
  padding: 12px 16px;
  margin: 0;
  color: ${color.primary.text};
  font-style: italic;
  margin-bottom: 24px;
`;

export default Quote;