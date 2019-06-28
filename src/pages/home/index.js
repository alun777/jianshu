import React, { Component } from 'react';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writter from './components/writter';
import axios from 'axios';
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
    axios.get('/api/home.json').then((res) => {
      const result = res.data;
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action);
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
})


export default connect(null, mapDispatch)(Home);
