import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators'
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return ( 
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='Username' ref = {(input) => {this.account=input}}></Input>
            <Input placeholder='Password' type='password' ref = {(input) => {this.password=input}}></Input>
            <Button onClick={()=> this.props.login(this.account, this.password)}>Sign In</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = (state)=> ({
   loginStatus: state.getIn(['login', 'login'])
})


const mapDispatch = (dispatch) => ({
  login(accountElem, passworldElem){
    dispatch(actionCreators.login(accountElem.value, passworldElem.value))
  }

})

export default connect(mapState, mapDispatch)(Login);
