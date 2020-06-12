import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen';
import GameScreen from './Screen/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNum => { setUserNumber(selectedNum) }

  let content = <StartGameScreen onStartGame={startGameHandler}/>
  
  if (userNumber) { content = <GameScreen userChoice={userNumber}/> };
  
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});