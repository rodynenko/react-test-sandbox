import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/createStore';
import logo from './logo.svg';
import './App.css';
import TestForm from './components/TestForm';
import List from './components/List';
import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <TestForm />
            <List />
          </div>
          <div style={{ marginTop: '100px' }}>
            <h3>Example component is under this header</h3>
            <Example />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
