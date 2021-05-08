import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextBase} from '../../components';

const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: '#ffffff3b',
  },
});

export default function HistoriesComponent() {
  return (
    <View style={styles.root}>
      <View>
        <View>
          <TextBase>Histories component</TextBase>
        </View>
        <View>
          <TextBase>Histories component</TextBase>
        </View>
      </View>
    </View>
  );
}
