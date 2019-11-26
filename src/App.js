import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import studentActionReducer from './mystore/MyReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRouter from './myroute/MyRouter';

const myStudentStore = createStore(studentActionReducer);

export default class App extends React.Component {

  render() {
    return <Provider store={myStudentStore}>
      <Router>
        <MyRouter/>
      </Router>
    </Provider>
  }
}