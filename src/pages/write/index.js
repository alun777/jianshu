import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    if (this.props.loginStatus) {
      return ( 
        <div>Compose</div>
      )
    }else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

const mapState = (state)=> ({
  loginStatus: state.getIn(['login', 'login'])
})


const mapDispatch = (dispatch) => ({
})

export default connect(mapState, mapDispatch)(Write);
