/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/Header';
import Input from './src/Input';

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    }
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({inputValue});
  }

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <Header/>
        <Input
          inputValue={inputValue}
          inputChange={text => this.inputChange(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  font: {
    fontSize: 20,
  }
});
