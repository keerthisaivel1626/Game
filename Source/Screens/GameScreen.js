import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Title from '../Components/ui/Title';
import NumberContainer from '../Components/game/NumberContainer';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Card from '../Components/ui/Card';
import InstructionText from '../Components/ui/InstructionText';
import ButtonContainer from '../Components/ui/ButtonContainer';
import GuessLogItem from '../Components/game/GuessLogItem';
const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = direction => {
    //direction=>'lower,'greater
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'you know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
      const newRandomNumber = generateRandomNumber(
        minBoundary,
        maxBoundary,
        currentGuess,
      );
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds(previousGuessRounds => [
      newRandomNumber,
      ...previousGuessRounds,
    ]);
  };
  const guessRoundListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <ButtonContainer style={{flexDirection: 'row'}}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Icon name="minus-thick" size={22} color={(color = 'white')} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Icon name="plus-thick" size={22} color={(color = 'white')} />
            </PrimaryButton>
          </View>
        </ButtonContainer>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Icon name="minus-thick" size={22} color={(color = 'white')} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Icon name="plus-thick" size={22} color={(color = 'white')} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound, index) => {
          return <Text key={index}>{guessRound}</Text>;
        })} */}
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
