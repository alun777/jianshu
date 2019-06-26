import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreator';
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
  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <NavItem className='right'>Sign In</NavItem>
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
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60e;</span>
            <SearchInfo className={this.props.focused ? '' : 'focused_display'}>
              <SearchInfoTitle>
                Current Hot Search
                <SearchInfoSwitch>
                  Show More
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {
                  this.props.list.map((item) => {
                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                  })
                }
              </SearchInfoList>
            </SearchInfo>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className="iconfont">&#xe611;</span>
            Compose
          </Button>
          <Button className='reg'>Sign Up</Button>
        </Addition>
      </HeaderWrapper>
    )
  };
}



const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
