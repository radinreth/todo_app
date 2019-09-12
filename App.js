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
  TextInput,
  FlatList,
  SafeAreaView
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '', todos: [] }
  }

  addTodo = () => {
    let {text, todos} = this.state
    this.setState({
      todos: [...todos, text]
    })

    this.setState({text: ''})
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{height: 40, fontSize: 23, width: 160, borderWidth: 1}}
            placeholder="Type here..."
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />

            <Button title="Add todo" onPress={this.addTodo} />

            <Text>All todos:</Text>
            <FlatList 
              data={this.state.todos}
              renderItem={({item}) => <Text>{item}</Text>}
              keyExtractor={item=>item}
            />
        </View>
      </SafeAreaView>
    );
  }
};

export default App;
