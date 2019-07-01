import React, { PureComponent } from 'react';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writter from './components/writter';
import * as actionCreations from './store/actionCreators'
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';


class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className="banner_img" src="/img/home-top.jpg"></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter />
        </HomeRight>
        {
          this.props.showScroll ?
            (<BackTop onClick={this.handleScrollTop}>
              Back Top
              </BackTop>) : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
    
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)

  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreations.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreations.toggleTopShow(true))
    }else{
      dispatch(actionCreations.toggleTopShow(false))
    }
  }
})


export default connect(mapState, mapDispatch)(Home);
