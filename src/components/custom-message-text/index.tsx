import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
// import {
//   ButtonRounded,
//   FixedButton,
//   Rating,
// } from '~/components/molecules/Buttons/Neon';
// import {colors} from '../../styles/colors';
// import {FixedIcons, RatingIcons} from './icons';
import {
  TextName,
  MessageText,
  MessageTextBody,
  ViewButtons,
  // SpacingTop,
  LinkStyle,
  ButtonStyle,
  TextButton,
} from './styles';
const onRenderMessageText = ({
  currentMessage,
  previousMessage,
  memberId,
  onSendButton,
  lastMessage,
  finished,
}: any) => {
  const isUser = memberId === currentMessage?.user._id;

  const itsFirstMessageUser =
    currentMessage?.user?._id !== previousMessage?.user?._id ||
    currentMessage?.type !== previousMessage?.type;
  const nameUser =
    currentMessage?.user._id === memberId ? 'Você' : currentMessage?.user.name;
  if (currentMessage?.image) return null;

  const structureText = {
    text: null,
    textArea: null,
    buttons: null,
    fixedButtons: null,
    likeButtons: null,
  };
  const disabled = finished || lastMessage !== currentMessage?._id;

  if (currentMessage.text && currentMessage.text.trim().length)
    structureText.text = currentMessage.text && (
      <Hyperlink linkDefault>
        <MessageTextBody>{currentMessage.text}</MessageTextBody>
      </Hyperlink>
    );

  structureText.textArea = currentMessage?.textArea && (
    <Hyperlink linkDefault>
      <MessageTextBody>{currentMessage?.textArea}</MessageTextBody>
    </Hyperlink>
  );

  structureText.buttons = currentMessage?.buttons && (
    <>
      {currentMessage?.buttons.map((button: any) => (
        <ViewButtons key={button.key}>
          <ButtonStyle
            key={`${lastMessage}-${currentMessage.userAnswer}`}
            onPress={() => console.log('click on -->', button.key)}>
            <TextButton>{button.key}</TextButton>
          </ButtonStyle>
        </ViewButtons>
      ))}
    </>
  );

  // structureText.fixedButtons = currentMessage?.fixedButtons && (
  //   <>
  //     <SpacingTop top={8} />
  //     {currentMessage?.fixedButtons.map(button => (
  //       <ViewButtons key={button.key}>
  //         <FixedButton
  //           key={`${lastMessage}-${currentMessage.userAnswer}`}
  //           idTrack="FIXBUTTON_BOT"
  //           disabled={disabled}
  //           onPress={() => onSendButton(button.value)}
  //           value={button.key}
  //           icon={FixedIcons[button.direction]}
  //         />
  //       </ViewButtons>
  //     ))}
  //   </>
  // );

  const pressedPositive =
    currentMessage?.likeButtons &&
    currentMessage.userAnswer &&
    currentMessage.likeButtons?.positive === currentMessage.userAnswer;

  const pressedNegative =
    currentMessage?.likeButtons &&
    currentMessage.userAnswer &&
    currentMessage.likeButtons?.negative === currentMessage.userAnswer;

  // structureText.likeButtons = currentMessage?.likeButtons && (
  //   <ViewButtons key={`${lastMessage}-${currentMessage.userAnswer}`}>
  //     <SpacingTop top={16} />

  //     <Rating
  //       title="Avalie essa resposta:"
  //       disabled={pressedNegative || pressedPositive}
  //       icons={[
  //         {
  //           idTrack: 'POSITIVE',
  //           icon: RatingIcons({icon: 'thumbUp', pressed: pressedPositive}),
  //           onPress: () => onSendButton(currentMessage.likeButtons?.positive),
  //           pressed: pressedPositive,
  //         },
  //         {
  //           idTrack: 'NEGATIVE',
  //           icon: RatingIcons({icon: 'thumbDown', pressed: pressedNegative}),
  //           onPress: () => onSendButton(currentMessage.likeButtons?.negative),
  //           pressed: pressedNegative,
  //         },
  //       ]}
  //     />
  //   </ViewButtons>
  // );

  return (
    <MessageText>
      {/* {itsFirstMessageUser && (
        <TextName right={currentMessage?.user._id === memberId}>
          {nameUser}
        </TextName>
      )} */}
      {structureText.text}
      {structureText.textArea}
      {structureText.buttons}
      {structureText.fixedButtons}
      {structureText.likeButtons}
    </MessageText>
  );
};

export default onRenderMessageText;
