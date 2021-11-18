import React from 'react';
import '../css/LogRegister.css'
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
        localStorage.email = email;
        console.log('zheshi token', localStorage.token);
        window.location.href = '/';
      });
  };
  return <div className='log_register_page r'>
        <div className='log_register_line title'>
            REGISTER
        </div>
        <div className='log_register_line'>
            <div className='log_register_tag'>Email:</div> <input data-testid="email" type="text" value={email} onChange={ event => { setEmail(event.target.value) } }/>
        </div>
        <div className='log_register_line'>
            <div className='log_register_tag'>Name:</div> <input data-testid="name" type="text" value={name} onChange={ event => { setName(event.target.value) } }/>
        </div>
        <div className='log_register_line'>
            <div className='log_register_tag'>Password:</div> <input data-testid="password" type="password" value={password} onChange={ event => { setPassword(event.target.value) } }/>
        </div>
        <div className='log_register_line'>
            <div className='log_register_tag'>Confirm:</div> <input data-testid="confirm" type="password" value={confirmpassword} onChange={ event => { setConfirmpassword(event.target.value) } }/>
        </div>
        <button onClick={registerFunction} className='lr_btn'>Register</button>
    </div>;
}

export default Register;
