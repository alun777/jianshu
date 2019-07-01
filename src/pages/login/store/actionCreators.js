import axios from 'axios';

const changeLogin = ()=> ({
  type: 'change_login',
  value: true 
})

export const log_out = () => ({
  type: 'log_out',
  value: false
})

export const login =(account, password)=> {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin())
      }else{
        alert('log in fail')
      }
    })
  }
}