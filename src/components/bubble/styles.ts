import {colors} from '../../styles/colors';

const LeftMessage = {
  backgroundColor: colors.white,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderWidth: 1,
  padding: 10,
};

const RightMessage = {
  ...LeftMessage,
  backgroundColor: colors.gray200,
  elevation: 0,
};

const TextMessage = {
  fontSize: 16,
  color: colors.gray700,
};

export {LeftMessage, RightMessage, TextMessage};
