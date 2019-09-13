/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: '', 
      todos: [
        {
          id: '1',
          action: 'Buy new Monitor',
          completed: false
        },
        {
          id: '2',
          action: 'Build Native App',
          completed: true,
        }
      ] 
    }
  }

  addTodo = () => {
    let {text, todos} = this.state

    this.setState( prev => ({
      todos:  [ ...todos, 
                { id: String(prev.todos.length+1), action: text, completed: false}
              ]
      })
    )

    this.setState({text: ''})
  }

  setCompleted = (e, item) => {
    let { todos } = this.state
    let { id, action, completed } = item

    this.setState( {
      todos: todos.map(todo => (
          todo.id != item.id ? 
            todo : 
            { id,action, completed: !completed }
        ))
      } )
  }

  render() {
    const completed = this.state.todos.filter(todo => todo.completed)

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={ styles.container }>
          <Input
              containerStyle={{margin: 20}}
              leftIconContainerStyle={{marginRight: 15}}
              placeholder='Type here...'
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />

            <Button onPress={this.addTodo} title="Add todo"/>

            <Text style={styles.legend}>All todos:</Text>
            <Text>Completed: {completed.length}/{this.state.todos.length}</Text>

            <FlatList 
              data={this.state.todos}
              keyboardShouldPersistTaps='handled'
              renderItem={({item}) => (
                <CheckBox
                  title={item.action}
                  containerStyle={styles.checkbox}
                  textStyle={{fontSize: 18,}}
                  checked={item.completed}
                  onPress={(e) => this.setCompleted(e, item)}
                />
              )}
              keyExtractor={item=>item.id}
            />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'lavender' 
  },
  inputTodo: {
    height: 40, 
    fontSize: 23, 
    width: 230, 
    borderWidth: 1
  },
  btnAdd: {
    backgroundColor: 'blue',
    padding: 15,
    margin: 10,
  },
  todoText: {
    fontSize: 23,
    color: '#fff'
  },
  completed: { 
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },
  legend: {
    fontSize: 25,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  todoItem: {
    margin: 5,
    fontSize: 18
  },
  checkbox: {
    backgroundColor: 'transparent', 
    borderWidth: 0,
    padding: 5,
    margin: 5
  }
})

export default App;
