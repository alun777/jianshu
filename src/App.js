import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header';
import { IconFont } from './statics/iconfont/icon-font.js';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <Header />
        </ Provider>
        Hello World
      </div>
    )
  }
}

export default App;
