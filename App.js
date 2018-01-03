import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {

  componentDidMount(){
    this.getLocation();
    this.getWeather(21, 29);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => console.log(data),
      (error) => alert(error),
      {timeout: 10000}
    )
  }

  getWeather(lat, lng) {
    const url = `api.openweathermap.org/data/2.5/weather?appid=fb618e8c4e64283120228836fd18bf36&lat=${lat}&${lng}=139`
    fetch(url)
      .then(data => console.log(data))  
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name='ios-sunny' size={70} color='white'/>
          <Text style={styles.temp}>24°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Build a <Text style={{color: 'red'}}>fucking</Text> Weather App</Text>
          <Text style={styles.subtitle}>Let's make it rain!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD017',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30
  },
  temp: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 28,
    color: 'white'
  },
  body: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10
  },
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 55,
    color: 'white',
    marginBottom: 30
  },
  subtitle: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 20,
    color: 'white'
  }
});
