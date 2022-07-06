import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Title from '../Components/ui/Title';
import Colors from '../Constants/Colors';
import PrimaryButton from '../Components/ui/PrimaryButton';
const GameOverScreen = ({roundNumber, userNumber, onStartNewGame}) => {
  const {width, height} = useWindowDimensions();
  let imageSize = 380;
  if (width < 420) {
    imageSize = 150;
  }
  if (height < 420) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.subrootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require('../Assets/Images/success.png')}
            style={[styles.image]}
          />
        </View>

        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{' '}
          round to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
//const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  subrootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // borderRadius: deviceWidth < 420 ? 75 : 150,
    // width: deviceWidth < 420 ? 150 : 300,
    // height: deviceWidth < 420 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
  },
});