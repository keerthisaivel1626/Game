import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Colors from '../../Constants/Colors';
const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,

    textAlign: 'center',
    color: 'white',
    borderWidth: Platform.select({ios: 2, android: 0.2}),
    borderColor: 'white',
    padding: 12,
    fontFamily: 'PatrickHand-Regular',
    maxWidth: '80%',
    width: 300,
  },
});
