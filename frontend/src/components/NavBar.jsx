import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';
import logo from './logo.svg';

const NavBar = () => {
  if (localStorage.getItem('token')) {
    return (
                <>
                    <img src={logo} className="logo" />
                    <Link to="/">Home</Link>&nbsp;|&nbsp;
                    <Link to="/listings">Host List</Link>&nbsp;|&nbsp;
                    <Link to="/listing/create">Listing Create</Link>&nbsp;|&nbsp;
                    <Link to="/listing/user">User List</Link>&nbsp;|&nbsp;
                    <Link to="/common/logout">Logout</Link>&nbsp;|&nbsp;
                </>
    );
  } else {
    return (
                <>
                    <img src={logo} className="logo" />
                    <Link to="/">Home</Link>&nbsp;|&nbsp;
                    <Link to="/listing/user">User List</Link>&nbsp;|&nbsp;
                    <Link to="/common/login">Login</Link>&nbsp;|&nbsp;
                    <Link to="/common/register">Register</Link>&nbsp;|&nbsp;
                </>
    );
  }
}

export default NavBar;
