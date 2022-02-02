import React from 'react';
import {TextInput} from 'react-native';
import {ComposerProps} from 'react-native-gifted-chat';
import {colors} from '../../styles/colors';
import {styles} from './styles';

const onRenderComposer = (
  props: Readonly<ComposerProps> &
    Readonly<{
      children?: React.ReactNode;
    }>,
) => {
  const onChangeText = (text: string) => {
    if (props.onTextChanged) props.onTextChanged(text);
  };

  return (
    <TextInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      accessible
      accessibilityLabel={props.placeholder}
      placeholder={props.placeholder}
      editable={!props.disableComposer}
      autoFocus={props.textInputAutoFocus}
      value={props.text}
      enablesReturnKeyAutomatically
      underlineColorAndroid="transparent"
      keyboardAppearance={props.keyboardAppearance}
      onChangeText={onChangeText}
      multiline={false}
      blurOnSubmit
      placeholderTextColor={colors.gray700}
      style={styles.inputStyle}
    />
  );
};

export default onRenderComposer;
