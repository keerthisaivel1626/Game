import React from 'react'
import { View, Text ,StyleSheet,Pressable} from 'react-native'
import Colors from '../../Constants/Colors';
const PrimaryButton = ({children, onPress}) => {
  return (
    
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => {
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer;
        }}
        onPress={onPress}
        android_ripple={{color: Colors.primary600, height: 40}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: 'hidden',
    backgroundColor: Colors.primary500,
    height: 40,
    padding: 8,
  },
  buttonInnerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 40,
    elevation: 2,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Mitr-Medium',
  },
  pressed: {
    opacity: 0.75,
  },
});