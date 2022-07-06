import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
const InstructionText = ({children,style}) => {
  return <Text style={[styles.instructionText,style]}>{children}</Text>;
};

export default InstructionText;
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'Mitr-Medium',
  },
});
