import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreator';
import * as loginActionCreators from '../../pages/login/store/actionCreators';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

class Header extends Component {

  getShowMore() {
    const newList = this.props.originList.toJS();
    const pageList = [];
    for (let i = (this.props.page - 1) * 5; i < this.props.page * 5; i++) {
      pageList.push(
        <SearchInfoItem key={Math.random()}>{newList[i]}</SearchInfoItem>
      )
    }
    return pageList
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo href='/' />
        </Link>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          {
            this.props.login ? <NavItem onClick={this.props.logout} className='right'>Log Out</NavItem> : 
            <Link to='/login'><NavItem className='right'>Sign In</NavItem></Link>
          }
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={() => {this.props.handleInputFocus(this.props.originList)}}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60e;</span>
            <SearchInfo
              className={this.props.focused || this.props.mouseIn ? '' : 'focused_display'}
              onMouseEnter={this.props.handleMouseEnter}
              onMouseLeave={this.props.handleMouseLeave}
            >
              <SearchInfoTitle
              >
                Current Hot Search
                <SearchInfoSwitch onClick={()=>(this.props.handlecShowMore(this.props.page, this.props.totalPage, this.spinIcon))}>
                  <span ref= {(icon) => {this.spinIcon = icon}}className="iconfont spin">&#xe851;</span>
                  Show More
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {this.getShowMore()}
              </SearchInfoList>
            </SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <span className="iconfont">&#xe60f;</span>
              Compose
            </Button>
          </Link>
          <Button className='reg'>Sign Up</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    originList: state.getIn(['header', 'originList']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    showMoreList: state.getIn(['header', 'showMoreList']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])

  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(originList) {
      if (originList.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.changeMouseIn());
    },
    handleMouseLeave() {
      dispatch(actionCreators.changeMouseLeave());
    },
    handlecShowMore(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
    

      if (page < totalPage) {
        dispatch(actionCreators.showMore(page + 1));
      }else{
        dispatch(actionCreators.showMore(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.log_out())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
