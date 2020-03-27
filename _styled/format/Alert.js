import styled from 'styled-components';
import { color } from '../config/Styles';

const Alert = styled.div`
  background-color: ${color.primary.original};
  border: 1px solid ${color.primary.hover};
  padding: 8px 16px;
  border-radius: 4px;
  color: ${color.primary.text}; 
  margin-bottom: 24px;
`;

export default Alert;