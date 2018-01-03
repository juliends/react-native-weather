import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name='ios-sunny' size={70} color='white'/>
          <Text style={styles.temp}>24°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Build a fucking Weather App</Text>
          <Text style={styles.subtitle}>Let's make it rain!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD017'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  temp: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 28,
    color: 'white'
  },
  body: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 55,
    color: 'white'
  },
  subtitle: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 28,
    color: 'white'
  }
});
