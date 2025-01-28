import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const DetailsScreen = () => {

  const [{ x, y }, setData] = useState({ x: 0, y: 0 });


  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    const subscription = Gyroscope.addListener(gyroscopeData => {
      setData(gyroscopeData);


      Animated.timing(translateY, {
        toValue: gyroscopeData.x * 50, 
        duration: 150,
        useNativeDriver: true,
      }).start();

      Animated.timing(translateX, {
        toValue: gyroscopeData.y * 50,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });

    Gyroscope.setUpdateInterval(20); 

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.ojito}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              { translateX: translateX },
              { translateY: translateY },
            ],
          },
        ]}
      />
      </View>
      <View style={styles.ojito}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              { translateX: translateX },
              { translateY: translateY },
            ],
          },
        ]}
      />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    gap: 10,
  },
  ojito: {
    width: 70,
    height: 100,
    borderRadius: 50,
    position: 'relative',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    position: 'absolute',
    borderRadius: 50,
  },
});


export default DetailsScreen;