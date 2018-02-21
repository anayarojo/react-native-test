/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {

    const img = "https://static.pexels.com/photos/837500/pexels-photo-837500.jpeg"
    const name = "Medusa"

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri:img}} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", //column, row
    //justifyContent: 'center', //flex-start, center, flex-end, space-around, space-between
    //alignItems: 'center', //flex-start, center, flex-end, stretch
    flexWrap: "wrap", //wrap, nowrap
    backgroundColor: '#f1f1f1',
    
  },
  artistBox:{
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  info:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width: 150,
    height: 150,
  },
  name:{
    fontSize: 20,
  }
});
