import React, {useState} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Colors from '../Constants/Colors';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
import ButtonContainer from '../Components/ui/ButtonContainer';
const StartGameScreen = ({onPickedNumber}) => {
  const [guessNumber, setGuessNumber] = useState('');
  const {width, height} = useWindowDimensions();
  const guessNumberInputHandler = num => {
    setGuessNumber(num);
  };
  const resetInputHandler = () => {
    setGuessNumber('');
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(guessNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 to 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    onPickedNumber(chosenNumber);
  };
  const marginTopDistance = height < 420 ? 30 : 100;
  return (
    <ScrollView style={styles.gamescreenrootContiner}>
      <KeyboardAvoidingView
        style={styles.gamescreenrootContiner}
        behavior="position">
        <View style={[styles.subrootContainer, {marginTop: marginTopDistance}]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText style={styles.instructionText}>
              Enter a Number
            </InstructionText>
            <TextInput
              style={styles.inputBox}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={guessNumber}
              onChangeText={guessNumberInputHandler}
            />
            <ButtonContainer>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </ButtonContainer>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
const deviceheight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  gamescreenrootContiner: {
    flex: 1,
  },
  subrootContainer: {
    flex: 1,
    marginTop: deviceheight < 420 ? 30 : 100,
    alignItems: 'center',
  },

  inputBox: {
    height: 60,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },

  buttonContainer: {
    flex: 1,
  },
});
