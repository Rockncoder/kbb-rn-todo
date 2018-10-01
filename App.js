/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from './src/Header';
import Input from './src/Input';
import Button from './src/Button';
import TodoList from './src/TodoList';

let todoIndex = 0;

type Props = {};
export default class App extends Component<Props> {
  constructor() {
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
    console.log('This = ', this);
    if (this.state.inputValue.match(/^\s*$/)) {
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

  deleteTodo = (todoIndex) => {
    const {todos} = this.state;
    const updatedTodos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({todos: updatedTodos});
  };

  toggleComplete = todoIndex => {
    const {todos} = this.state;
    const updatedTodos = todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos: updatedTodos});
  };

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps='always'
        >
          <Header/>
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            type={type}
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Button submitTodo={this.submitTodo}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
