import React from 'react';
import './login.css'
import logo from '../components/logo.svg';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const loginFunction = () => {
    fetch('http://localhost:5005/user/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('login fails');
          return;
        }
        console.log('zheshi data', data);
        localStorage.token = data.token;
        localStorage.email = email;
        console.log('zheshi token', localStorage.token);
        console.log(typeof localStorage.token);
        window.location.href = '/';
      });
  };
  return <>
      <div className={'newcontainer'}>
          <div className={'right-container'}>
              <div className={'icon'}>
                  <img src={logo} className={'title-img'}/>
                      <p className={'title'}>Login</p>
              </div>
              <div className={'register-area'}>
                  Email: <input className={'login-input'} type="text" value={email} onChange={ event => { setEmail(event.target.value) } }/><br/>
                  Password: <input className={'login-input'} type="text" value={password} onChange={ event => { setPassword(event.target.value) } }/><br/>
                  <button onClick={loginFunction} className={'register-button'}>Login</button>
              </div>
      </div>
      </div>
    </>;
}

export default Login;
