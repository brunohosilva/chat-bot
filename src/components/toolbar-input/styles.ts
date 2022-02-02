import {colors} from '../../styles/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputToolbarStyle: {
    borderTopWidth: 0,
    padding: 0,
    margin: 0,
    height: 44,
    paddingHorizontal: 8,
  },
  inputToolbarPrimaryStyle: {
    height: 44,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.gray200,
    borderRadius: 45,
  },
});

export {styles};
