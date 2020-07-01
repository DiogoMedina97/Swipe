import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements'
import Deck from './src/Deck'

import image01 from './src/assets/images/unsplash-04.jpg'
import image02 from './src/assets/images/Unsplash.jpg'
import image03 from './src/assets/images/unsplash-09.jpg'
import image04 from './src/assets/images/unsplash-01.jpg'

const DATA = [
  { id: 1, text: 'Card #1', image: image01 },
  { id: 2, text: 'Card #2', image: image02 },
  { id: 3, text: 'Card #3', image: image03 },
  { id: 4, text: 'Card #4', image: image04 },
  { id: 5, text: 'Card #5', image: image01 },
  { id: 6, text: 'Card #6', image: image02 },
  { id: 7, text: 'Card #7', image: image03 },
  { id: 8, text: 'Card #8', image: image04 },
];

class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true
  }

  renderCard(item) {
    return (
      <Card 
        key={item.id} 
        title={item.text} 
        image={item.image}
      >
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further
        </Text>
        <Button 
          icon={{ name: 'code', color: '#fff' }} 
          backgroundColor='#03A9F4' 
          title='View Now!' 
        />
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card 
        title='All Done!'
      >
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button 
          backgroundColor='#03A9F4' 
          title='Get more'
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={DATA} 
          renderCard={this.renderCard} 
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App
