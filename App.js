import React, { Component } from 'react';
import { Dimensions } from "react-native";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers/Reducers';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';
import StudentList from './components/StudentList';
import AddNewStudent from './components/AddNewStudent';
import StudentDetail from './components/StudentDetail';
import StudentNote from './components/StudentNote';
import styles from './Styles/MainStyle';

const { width } = Dimensions.get('window');


export default class App extends Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router
          titleStyle={{ color: 'white' }}
          navigationBarStyle={{ backgroundColor: '#00897B', width }}
          sceneStyle={styles.container}
        >
          <Stack key='root'>
            <Scene
              key='studentList'
              component={StudentList}
              title='Student List'
              initial
            />
            <Scene
              key='addNewStudent'
              component={AddNewStudent}
              title='Add New Student'
            />
            <Scene
              key='studentDetail'
              component={StudentDetail}
              title='Student Detail'
            />
            <Scene
              key='studentNote'
              component={StudentNote}
              title='Student Notes'
            />
          </Stack>
        </Router>
      </Provider >
    );
  }
}

