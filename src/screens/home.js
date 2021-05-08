import React, {useState, useEffect} from 'react';
import {Dimensions, View, StyleSheet, ImageBackground} from 'react-native';

import {TextBase, ButtonBase} from './../components';

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countDownContainer: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    backgroundColor: '#ffffff3b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeCountWrapperDayItem: {
    marginBottom: 10,
  },
  timeCountWrapperItem: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    marginBottom: 10,
  },
  buttonTitle: {
    marginBottom: 40,
  },
  button: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff3b',
  },
  buttonContent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default function Home({navigation}) {
  const [dayCount, setDayCount] = useState('-');
  const [hourCount, setHourCount] = useState('--');
  const [minuteCount, setMinuteCount] = useState('--');
  const [secondCount, setSecondCount] = useState('--');

  const calculateTime = (count, isFormatCount, format) => {
    const countNumber = Number(count);

    if (isFormatCount) {
      if (format === 24) {
        if (countNumber >= 9 && countNumber < 23) {
          return countNumber + 1;
        }
      } else if (format === 60) {
        if (countNumber >= 9 && countNumber < 59) {
          return countNumber + 1;
        }
      }

      if (countNumber < 9) {
        return '0' + (countNumber + 1);
      }

      return '00';
    } else {
      return countNumber + 1 || 0;
    }
  };

  const redirectToProcess = () => {
    navigation.navigate('Progress');
  };

  useEffect(() => {
    setInterval(() => {
      setSecondCount(count => calculateTime(count, true, 60));
    }, 1000);
  }, []);

  useEffect(() => {
    if (Number(secondCount) === 0) {
      setMinuteCount(count => calculateTime(count, true, 60));
    }
  }, [secondCount]);

  useEffect(() => {
    if (Number(minuteCount) === 0) {
      setHourCount(count => calculateTime(count, true, 24));
    }
  }, [minuteCount]);

  useEffect(() => {
    if (Number(hourCount) === 0) {
      setDayCount(count => calculateTime(count, false, 0));
    }
  }, [hourCount]);

  return (
    <ImageBackground
      style={styles.bg}
      source={require('./../assets/images/bg.jpeg')}>
      <View style={styles.root}>
        <View style={styles.buttonTitle}>
          <ButtonBase style={styles.button} onPress={redirectToProcess}>
            <View>
              <TextBase style={styles.buttonContent}>New kid</TextBase>
            </View>
          </ButtonBase>
        </View>
        <View style={styles.countDownContainer}>
          <View style={styles.title}>
            <TextBase color="#fff" fontSize={22} opacity={0.8}>
              It has been
            </TextBase>
          </View>

          {Number(dayCount) !== 0 && (
            <View
              style={[styles.timeCountWrapper, styles.timeCountWrapperDayItem]}>
              <View>
                <TextBase color="#fff" fontWeight="bold" fontSize={50}>
                  {dayCount + ' '}
                </TextBase>
              </View>
              <View>
                <TextBase color="#fff">
                  {Number(dayCount) > 1 ? 'days' : 'day'}
                </TextBase>
              </View>
            </View>
          )}

          <View style={styles.timeCountWrapper}>
            {Number(hourCount) !== 0 && (
              <View style={styles.timeCountWrapperItem}>
                <View>
                  <TextBase color="#fff" fontWeight="bold">
                    {hourCount}
                  </TextBase>
                </View>
                <View>
                  <TextBase color="#fff" fontSize={12}>
                    {Number(hourCount) > 1 ? 'hours' : 'hour'}
                  </TextBase>
                </View>
              </View>
            )}
            {Number(minuteCount) !== 0 && (
              <View style={styles.timeCountWrapperItem}>
                <View>
                  <TextBase color="#fff" fontWeight="bold">
                    {minuteCount}
                  </TextBase>
                </View>
                <View>
                  <TextBase color="#fff" fontSize={12}>
                    {Number(minuteCount) > 1 ? 'minutes' : 'minute'}
                  </TextBase>
                </View>
              </View>
            )}
            <View style={styles.timeCountWrapperItem}>
              <View>
                <TextBase fontWeight="bold" color="#fff">
                  {secondCount}
                </TextBase>
              </View>
              <View>
                <TextBase color="#fff" fontSize={12}>
                  {Number(secondCount) > 1 ? 'seconds' : 'second'}
                </TextBase>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
