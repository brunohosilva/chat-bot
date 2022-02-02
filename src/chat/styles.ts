import styled from 'styled-components/native';
import {colors} from '../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const ViewChat = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  flex: 1;
  background: ${colors.white};
  padding-bottom: 18px;
`;

export const ScroolBottomStyle = {
  bottom: 8,
  opacity: 1,
  elevation: 1,
};
