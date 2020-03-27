import styled from 'styled-components';
import { color } from '../config/Styles';

const Message = styled.div`
  padding: 4px 8px;
  border: 1px solid ${color.primary.hover};
  background-color: ${color.primary.original};
  border-radius: 2px;
  font-size: 14px;
  color: ${color.primary.text};
  margin-bottom: 24px;
`;

export default Message;