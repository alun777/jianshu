import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header';
import { IconFont } from './statics/iconfont/icon-font.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import detail from './pages/detail';


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </ Provider>
      </div>
    )
  }
}

export default App;
