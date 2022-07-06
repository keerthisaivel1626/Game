import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './Source/Screens/StartGameScreen';
import GameScreen from './Source/Screens/GameScreen';
import GameOverScreen from './Source/Screens/GameOverScreen';
import Colors from './Source/Constants/Colors';
const App = () => {
  const [useNumber, setUseNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = pickedNumber => {
    setUseNumber(pickedNumber);
    setGameOver(false);
  };
  const gameOverHandler = numberOfRounds => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };
  const startNewGameHandler = () => {
    setUseNumber(null);
    setGuessRounds(0);
  };
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (useNumber) {
    screen = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler} />;
  }
  if (gameOver && useNumber) {
    screen = (
      <GameOverScreen
        userNumber={useNumber}
        roundNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootContainer}>
        <ImageBackground
          source={require('./Source/Assets/Images/background.png')}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
