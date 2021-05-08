import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ButtonBase, TextBase} from './../../components';
import HistoriesComponent from './histories';
import MilestoneComponent from './milestone';

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  },
  root: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 40,
  },
  contentContainer: {},
  historiesContainer: {
    marginTop: 30,
  },
  milestoneContainer: {
    marginTop: 30,
  },
  backButton: {
    backgroundColor: '#ffffff3b',
    borderRadius: 30,
    width: 100,
    marginLeft: 8,
  },
  backButtonContent: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 22,
    fontWeight: 'bold',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default function Process({navigation}) {
  const backToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      style={styles.bg}
      source={require('./../../assets/images/process-bg.jpeg')}>
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <ButtonBase style={styles.backButton} onPress={backToHome}>
            <View style={styles.backButtonContainer}>
              <Icon name="chevron-left" size={15} color="white" />
              <TextBase style={styles.backButtonContent}>Back</TextBase>
            </View>
          </ButtonBase>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.milestoneContainer}>
            <MilestoneComponent />
          </View>
          <View style={styles.historiesContainer}>
            <HistoriesComponent />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
