import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function ButtonBase(props) {
  const {onPress, style, children} = props;

  const defaultStyle = {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  };

  return (
    <TouchableOpacity style={{...defaultStyle, ...style}} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
