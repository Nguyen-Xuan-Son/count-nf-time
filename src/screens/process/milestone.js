import React from 'react';
import {View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {TextBase} from '../../components';
import {MILESTONES} from '../../constants';

const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: '#ffffff3b',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  processCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  contentItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentItemBg: {
    width: 200,
    marginLeft: 10,
    marginBottom: 10,
    resizeMode: 'cover',
    opacity: 0.3,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  contentItemBgActive: {
    opacity: 1,
  },
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
          {MILESTONES.map((milestone, index) => {
            return (
              <ImageBackground
                key={index}
                style={[
                  styles.contentItemBg,
                  index === 1 ? styles.contentItemBgActive : '',
                ]}
                source={milestone.imageUrl}>
                <View style={styles.contentItem}>
                  <TextBase>{milestone.value}</TextBase>
                  <TextBase>
                    {milestone.days
                      ? milestone.days + ' Days'
                      : milestone.days + ' Day'}
                  </TextBase>
                </View>
              </ImageBackground>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
