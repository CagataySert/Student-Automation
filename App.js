import React, { Component } from 'react';
import { Dimensions } from "react-native";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers/Reducers';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';
import StudentList from './components/StudentList';


const { width } = Dimensions.get('window');


export default class App extends Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router
          titleStyle={{ color: 'white' }}
          navigationBarStyle={{ backgroundColor: '#183661', width }}
        >
          <Stack key='root'>
            <Scene
              key='studentList'
              component={StudentList}
              title='Student List'
            />
          </Stack>
        </Router>
      </Provider >
    );
  }
}

