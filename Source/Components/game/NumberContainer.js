import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Constants/Colors';
const NumberContainer = ({children}) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
    fontFamily: 'Mitr-Medium',
  },
});
