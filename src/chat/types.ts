import {IMessage} from 'react-native-gifted-chat';

export type MessageType = 'STANDARD' | 'NOTICE' | 'MEMBER-JOIN';
export type MessageTypeImages = 'images' | 'pdf';

export type Message = IMessage & {
  type?: string;
  textArea?: string;
  userAnswer?: string;
  likeButtons?: {positive: string; negative: string};
  buttons?: {
    key: string;
    value: string;
  }[];
  fixedButtons?: {
    key: string;
    value: string;
    direction: string;
  }[];
  error?: boolean;
};

export type MessageUpdate = {
  pending?: boolean;
  error?: boolean;
  text?: string;
  likeButtons?: Message['likeButtons'];
  fixedButtons?: Message['fixedButtons'];
  buttons?: Message['buttons'];
  textArea?: Message['textArea'];
  image?: string;
  createdAt?: Date;
  userAnswer?: string;
};

export type MessageAttachment = {
  fileBase64: string;
  fileName: string;
  uri: string;
};
