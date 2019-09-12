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
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  StyleSheet
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: '', 
      todos: [
        {
          id: '1',
          action: 'Buy new Monitor',
          status: 'pending'
        },
        {
          id: '2',
          action: 'Build Native App',
          status: 'completed'
        }
      ] 
    }
  }

  addTodo = () => {
    let {text, todos} = this.state
    this.setState( prev => ({
      todos: [...todos, { id: String(prev.todos.length+1), action: text, status: 'pending'}]
      }))

    this.setState({text: ''})
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={styles.inputTodo}
            placeholder="Type here..."
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />

            <TouchableOpacity 
              style={styles.btnAdd}
              onPress={this.addTodo}
              >
              <Text style={styles.todoText}>Add todo</Text>
            </TouchableOpacity>

            <Text style={styles.legend}>All todos:</Text>
            <FlatList 
              data={this.state.todos}
              renderItem={({item, index}) => <Text style={styles.todoItem}>{index+1}. {item.action}</Text>}
              keyExtractor={item=>item.id}
            />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
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
  }
})

export default App;
