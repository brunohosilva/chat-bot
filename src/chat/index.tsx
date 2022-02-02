import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Message} from './types';
import RenderBuble from '../components/bubble';
import RenderSend from '../components/send';
import RenderToolbarInput from '../components/toolbar-input';
import RenderComposer from '../components/composer';
import RenderButton from '../components/custom-message-text';

import {ViewChat, Container} from './styles';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const robot = 'Blue';
  useEffect(() => {
    setMessages([
      {
        _id: 0.21830403410838659,
        buttons: [
          {
            key: 'Abertura de CNPJ',
            value: 'Abertura de CNPJ',
          },
          {
            key: 'Burocracia do MEI',
            value: 'Burocracia do MEI',
          },
          {
            key: 'Conta MEI Fácil',
            value: 'Conta MEI Fácil',
          },
          {
            key: 'Serviços de contabilidade',
            value: 'contabilidade',
          },
        ],
        createdAt: new Date(),
        system: false,
        text: ' ',
        type: 'standard',
        user: {
          _id: '3b6cc4f9-9072-4834-a7fd-0b8983d6c2d8',
          name: 'Blue',
        },
      },
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
        text: 'resposta do sistema',
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
          renderMessageText={RenderButton}
          // renderInputToolbar reponsavel pelo balao que compoe o input text
          renderInputToolbar={RenderToolbarInput}
          // render composer responsavel pelo input de mandar a mensagem
          renderComposer={RenderComposer}
          alwaysShowSend
          placeholder="Digite uma mensagem"
          renderDay={() => null}
          renderTime={() => null}
          renderAvatar={() => null}
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
