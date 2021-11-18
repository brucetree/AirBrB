import React from 'react';
import '../css/Buttons.css';
import '../css/Logout.css';
const Logout = () => {
  const logoutFunction = () => {
    const token = localStorage.token;
    fetch('http://localhost:5005/user/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('logout fails');
          localStorage.token = null;
          localStorage.email = null;
          window.location.href = '/common/login';
          return;
        }
        localStorage.clear();
        window.location.href = '/common/login';
      });
  };
  return <div className='log_out_page'>
        <button className='log_out_btn' onClick={logoutFunction}>Logout</button>
    </div>;
}

export default Logout;
