import React from 'react';
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
          return;
        }
        // console.log('zheshi data', data);
        localStorage.token = {};
        window.location.href = '/common/login';
        // console.log('zheshi token', localStorage.token);
        // console.log(typeof localStorage.token);
      });
  };
  return <>
        <button onClick={logoutFunction}>Logout</button>
    </>;
}

export default Logout;
