import React from 'react';
import {View} from 'react-native';
import {TextBase, ButtonBase} from './../components';

export default function Process(props) {
  const backToHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View>
      <TextBase content="Process" />
      <View>
        <ButtonBase content="Back to Home" onPress={backToHome} />
      </View>
    </View>
  );
}
