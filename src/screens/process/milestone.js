import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {TextBase} from '../../components';

const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: '#ffffff3b',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  processCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {},
});

export default function MilestoneComponent() {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View>
          <TextBase style={styles.title}>Milestone</TextBase>
        </View>
        <View>
          <TextBase style={styles.processCount}>1/8</TextBase>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
          <View style={{width: 200, height: 200}}>
            <Image
              style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
              source={require('./../../assets/images/cool-kid-level.jpeg')}
            />
            <TextBase>1/8</TextBase>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
