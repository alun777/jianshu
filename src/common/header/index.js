import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = (props) => {
  return (<HeaderWrapper>
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
          in={props.focused}
          timeout={200}
          classNames='slide'
        >
        <NavSearch
          className={props.focused ? 'focused' : ''}
          onFocus={props.handleInputFocus}
          onBlur={props.handleInputBlur}
        ></NavSearch>
        </CSSTransition>
        <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60e;</span>
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
)};

const mapStateToProps = (state) => {
  return {
    focused: state.focused 
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action);
    }
    
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
