import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header';
import { IconFont } from './statics/iconfont/icon-font.js'


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconFont />
        <Header />
        Hello World
      </div>
    )
  }
}

export default App;
