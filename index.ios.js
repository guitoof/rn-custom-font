/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CustomFont extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This is the default font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.extraLight]}>
          This is my awesome extra light font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.light]}>
          This is my awesome light font
        </Text>
        <Text style={[styles.text, styles.customFont]}>
          This is my awesome font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.semiBold]}>
          This is my awesome semi-bold font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.bold]}>
          This is my awesome bold font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.black]}>
          This is my awesome black font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.italic]}>
          This is my awesome italic font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.extraLight, styles.italic]}>
          This is my awesome extra light italic font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.light, styles.italic]}>
          This is my awesome light italic font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.semiBold, styles.italic]}>
          This is my awesome semi-bold italic font
        </Text>
        <Text style={[styles.text, styles.customFont, styles.italic, styles.bold]}>
          This is my awesome bold italic font
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  customFont: {
    fontFamily: 'Titillium Web',
  },
  extraLight: {
    fontWeight: '200'
  },
  light: {
    fontWeight: '300'
  },
  semiBold: {
    fontWeight: '600'
  },
  bold: {
    fontWeight: '700'
  },
  black: {
    fontWeight: '900'
  },
  italic: {
    fontStyle: 'italic'
  },
});

AppRegistry.registerComponent('CustomFont', () => CustomFont);
