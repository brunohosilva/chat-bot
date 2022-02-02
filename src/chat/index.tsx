import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Message} from './types';
import RenderBuble from '../components/bubble';
import RenderSend from '../components/send';
import RenderToolbarInput from '../components/toolbar-input';

import {ViewChat, Container} from './styles';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const robot = 'Blue';
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `${robot} \n\nOla Bruno, vamos testar as funcionalidades de botões nesse chat, bora lá? \n\nTe apresento abaixo alguns botões, escolha para acionar a funcionalidade`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Blue',
        },
        system: false,
      },
    ]);
  }, []);

  const onSend = useCallback((messagesChat = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messagesChat),
    );
    const RandomNumber = Math.floor(Math.random() * 9999999) + 1;
    setMessages(prevState => [
      {
        _id: RandomNumber,
        text: 'resposta do cara',
        createdAt: new Date(),
        user: {
          _id: RandomNumber,
          name: 'Blue',
        },
      },
      ...prevState,
    ]);
  }, []);

  return (
    <Container>
      <ViewChat>
        <GiftedChat
          messages={messages}
          onSend={chatData => onSend(chatData)}
          showUserAvatar
          renderBubble={RenderBuble}
          renderSend={RenderSend}
          renderInputToolbar={RenderToolbarInput}
          alwaysShowSend
          placeholder="Digite uma mensagem"
          user={{
            _id: 1,
          }}
          scrollToBottom
        />
      </ViewChat>
    </Container>
  );
};

export default Chat;
