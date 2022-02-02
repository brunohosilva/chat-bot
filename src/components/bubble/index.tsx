import React from 'react';
import {View} from 'react-native';
import {Bubble} from 'react-native-gifted-chat';
import {TextMessage, LeftMessage, RightMessage} from './styles';

const bubble: React.FC = props => {
  return (
    <View>
      <Bubble
        {...props}
        renderTicks={() => null}
        textStyle={{
          left: TextMessage,
          right: TextMessage,
        }}
        wrapperStyle={{
          left: LeftMessage,
          right: RightMessage,
        }}
      />
    </View>
  );
};

export default bubble;
