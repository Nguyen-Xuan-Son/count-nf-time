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
    marginTop: 10,
  },
  timeCountWrapperItem: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default function Home(props) {
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
    props.navigation.navigate('Progress');
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
        <View>
          <ButtonBase content="New kid" onPress={redirectToProcess} />
        </View>
        <View style={styles.countDownContainer}>
          <View>
            <TextBase
              content="It has been"
              color="#fff"
              fontSize={22}
              opacity={0.8}
            />
          </View>
          <View
            style={[styles.timeCountWrapper, styles.timeCountWrapperDayItem]}>
            <View>
              <TextBase
                content={dayCount + ' '}
                color="#fff"
                fontWeight="bold"
                fontSize={45}
              />
            </View>
            <View>
              <TextBase
                content={Number(dayCount) ? 'days' : 'day'}
                color="#fff"
              />
            </View>
          </View>
          <View style={styles.timeCountWrapper}>
            <View style={styles.timeCountWrapperItem}>
              <View>
                <TextBase content={hourCount} color="#fff" fontWeight="bold" />
              </View>
              <View>
                <TextBase
                  content={Number(hourCount) ? 'hours' : 'hour'}
                  color="#fff"
                  fontSize={12}
                />
              </View>
            </View>
            <View style={styles.timeCountWrapperItem}>
              <View>
                <TextBase
                  content={minuteCount}
                  color="#fff"
                  fontWeight="bold"
                />
              </View>
              <View>
                <TextBase
                  content={Number(minuteCount) ? 'minutes' : 'minute'}
                  color="#fff"
                  fontSize={12}
                />
              </View>
            </View>
            <View style={styles.timeCountWrapperItem}>
              <View>
                <TextBase
                  content={secondCount}
                  fontWeight="bold"
                  color="#fff"
                />
              </View>
              <View>
                <TextBase
                  content={Number(secondCount) ? 'seconds' : 'second'}
                  color="#fff"
                  fontSize={12}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
