import LoginTemplate from './logintemplate'
import React from 'react';
import './login.css';

class Login extends React.Component {
  render(){
  return(<div className="Fill">
    <LoginTemplate/>
    </div>);
}
}
export default Login;