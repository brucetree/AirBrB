import React from 'react';
const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [confirmpassword, setConfirmpassword] = React.useState('');
  const registerFunction = () => {
    if (!email || !password || !name || !confirmpassword) {
      alert('from cannot be empty');
      return;
    }

    if (password !== confirmpassword) {
      alert('password must be same');
      return;
    }
    fetch('http://localhost:5005/user/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('register fails');
          return;
        }
        console.log('zheshi data', data);
        localStorage.token = data.token;
        console.log('zheshi token', localStorage.token);
      });
  };
  return <>
      Name: <input type="text" value={name} onChange={ event => { setName(event.target.value) } }/><br/>
        Email: <input type="text" value={email} onChange={ event => { setEmail(event.target.value) } }/><br/>
        Password: <input type="text" value={password} onChange={ event => { setPassword(event.target.value) } }/><br/>
      ConfirmPassword: <input type="text" value={confirmpassword} onChange={ event => { setConfirmpassword(event.target.value) } }/><br/>
        <button onClick={registerFunction}>Register</button>
    </>;
}

export default Register;
