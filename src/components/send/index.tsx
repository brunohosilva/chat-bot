import React from 'react';
import {SendButton} from './styles';

type Props = {
  text: string;
  onSend: (val: {text: string}, isButton: boolean) => void;
};

const send = ({text, onSend}: Props) => {
  return (
    <SendButton onPress={() => text && onSend({text: text.trim()}, true)}>
      Enviar
    </SendButton>
  );
};

export default send;
