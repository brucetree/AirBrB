import React from 'react';
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
        Email: <input type="text" value={email} onChange={ event => { setEmail(event.target.value) } }/><br/>
        Password: <input type="text" value={password} onChange={ event => { setPassword(event.target.value) } }/><br/>
        <button onClick={loginFunction}>Login</button>
    </>;
}

export default Login;
