import React from 'react';
import {View, StyleSheet} from 'react-native';

const ButtonContainer = ({children}) => {
  return <View style={styles.buttonsContainer}>{children}</View>;
};

export default ButtonContainer;
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
});
