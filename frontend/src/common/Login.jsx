import React from 'react';
import '../css/LogRegister.css'

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
          alert(data.error);
          return;
        }
        localStorage.token = data.token;
        localStorage.email = email;
        window.location.href = '/';
      });
  };
  return <>
      <div className='log_register_page l'>
          <div className='log_register_line title'>
              LOG IN
          </div>
              <div className='log_register_line'>
                  <div className='log_register_tag'>Email:</div> <input className={'login-input'} type="text" value={email} onChange={ event => { setEmail(event.target.value) } }/>
              </div>
              <div className='log_register_line'>
                  <div className='log_register_tag'>Password:</div> <input className={'login-input'} type="password" value={password} onChange={ event => { setPassword(event.target.value) } }/>
              </div>
              <button onClick={loginFunction} className='lr_btn'>Login</button>
      </div>
    </>;
}

export default Login;
