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
import Button from './src/Button';

let todoIndex = 0;

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo = () => {
    console.log('This = ',this);
    if(this.state.inputValue.match(/^\s*$/)){
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos, inputValue: ''}, () => {
      console.log('State ', this.state);
    });
  };

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <Header/>
        <Input
          inputValue={inputValue}
          inputChange={text => this.inputChange(text)}
        />
        <Button submitTodo={this.submitTodo} />
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
