import React from 'react';
import {InputToolbar, InputToolbarProps} from 'react-native-gifted-chat';
import {styles} from './styles';

const onRenderInputToolbar = (
  props: Readonly<InputToolbarProps> &
    Readonly<{
      children?: React.ReactNode;
    }>,
) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolbarStyle}
      primaryStyle={styles.inputToolbarPrimaryStyle}
    />
  );
};

export default onRenderInputToolbar;
