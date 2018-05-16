import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Header } from './components/common';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import config from '../config';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    config = {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
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
