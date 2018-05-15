import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAEd93UIPltgJCh2N7PbQisnxxHPypS8Hk',
      authDomain: 'employeemanager-76c5c.firebaseapp.com',
      databaseURL: 'https://employeemanager-76c5c.firebaseio.com',
      projectId: 'employeemanager-76c5c',
      storageBucket: '',
      messagingSenderId: '701672200053'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Zac is a boss</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
