import React, { Component } from 'react';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writter from './components/writter';
import * as actionCreations from './store/actionCreators'
import { connect } from 'react-redux';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
 } from './style'; 


class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className= "banner_img" src="/img/home-top.jpg"></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreations.getHomeInfo();
    dispatch(action);
    
  }
})


export default connect(null, mapDispatch)(Home);
