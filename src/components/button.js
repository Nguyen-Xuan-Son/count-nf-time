import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function ButtonBase(props) {
  const {content, onPress} = props;

  const style = {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  };

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}
