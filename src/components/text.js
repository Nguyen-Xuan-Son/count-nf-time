import React from 'react';
import {Text} from 'react-native';

export default function TextBase(props) {
  const {children, fontSize, color, opacity, fontWeight, style} = props;
  const defaultStyle = {
    color: color || '#fff',
    fontSize: fontSize || 30,
    opacity: opacity || 1,
    fontWeight: fontWeight || 'normal',
  };

  return (
    <Text
      style={{
        ...defaultStyle,
        ...style,
      }}>
      {children}
    </Text>
  );
}
