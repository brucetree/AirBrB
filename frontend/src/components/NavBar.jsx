import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavStyle.css';
import logo from './logo.svg';
import '../css/Buttons.css';

const NavBar = () => {
  if (localStorage.getItem('token')) {
    return (
                <div className="nav_bar">
                    <img src={logo} className="logo" />
                    <Link to="/"><button className="btn_nav">Home</button></Link>
                    <Link to="/listings"><button className="btn_nav">Host List</button></Link>
                    <Link to="/listing/create"><button className="btn_nav">Create</button></Link>
                    <Link to="/common/logout"><button className="btn_nav">Logout</button></Link>
                </div>
    );
  } else {
    return (
                <div className="nav_bar">
                    <img src={logo} className="logo" />
                    <Link to="/"><button className="btn_nav">Home</button></Link>
                    <Link to="/listing/user"><button className="btn_nav">User List</button></Link>
                    <Link to="/common/login"><button className="btn_nav">Login</button></Link>
                    <Link to="/common/register"><button className="btn_nav">Register</button></Link>
                </div>
    );
  }
}

export default NavBar;
