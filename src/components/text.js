import React from 'react';
import {Text} from 'react-native';

export default function TextBase(props) {
  const {content, fontSize, color, opacity, fontWeight} = props;
  const style = {
    color: color || '#000',
    fontSize: fontSize || 30,
    opacity: opacity || 1,
    fontWeight: fontWeight || 'normal',
  };

  return (
    <Text
      style={{
        ...style,
      }}>
      {content}
    </Text>
  );
}
