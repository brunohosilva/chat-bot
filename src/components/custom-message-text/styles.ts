import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

const TextName = styled.Text`
  color: ${colors.gray700};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const MessageText = styled.View``;

const MessageTextBody = styled.Text`
  color: ${colors.gray700};
  font-size: 14px;
`;


const ViewButtons = styled.View`
  min-width: 100%;
`;

const FixedIcon = styled.View`
  height: 20px;
  justify-content: center;
`;

const RatingIcon = styled.View`
  height: 24px;
  justify-content: center;
`;

const ButtonStyle = styled.TouchableOpacity`
  margin-bottom: 15px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-width: 3px;
  border-color: ${colors.primary500};
  border-radius: 40px;
`;

const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.primary500};
`;



const LinkStyle = { color: colors.primary500, textDecorationLine: 'underline' };

export {
  TextButton,
  LinkStyle,
  TextName,
  MessageText,
  MessageTextBody,
  ViewButtons,
  FixedIcon,
  RatingIcon,
  ButtonStyle,
};
