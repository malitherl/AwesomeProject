import * as React from 'react';
import { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Cat = ({handlePress}) => {

  return( 
    <View> 
      <Button title={'🐱'} style={styles.catButton} onPress= {(() => handlePress())}/> 
    </View>
  )
}



export default function App() {

  const [name, setName] = useState('Give a cat a name?');
  const namesArray = [
    "Felix", "Fuji", "Mr. Terrible", "Trainwreck", "Meatloaf", "Brat", "Brat Boi", "Best Boi", "Rabbit", "Puppy",
    "Rorshach", "Shacky", "Shaq", "Sugar", "Nevada", "Colorado", "Mr. Kitty", "Noodle", "Bandit", "Assassin", 
    "Goblin", "Mr. Goblin", "Gobs", "Gaba Ghoul", "Nyanderson", "Tibs", "Tubbs", "Xenon"
  ];

  const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
 }

  const handlePress = () => {
    const index= getRandomInt(namesArray.length) 
    const randomName = namesArray[index]
    setName(randomName)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {name}
      </Text>
      <Cat handlePress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  catButton: {
    backgroundColor: '#ecf0f1',
    fontSize: 18, 
    flex: 1, 
    height: 100,
    width: 100,

  },
});
