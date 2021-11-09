import React from 'react';
import './App.css';
import ListingList from './pages/ListingList';
import ListingCreate from './pages/ListingCreate';
import Login from './common/Login';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Register from './common/Register';
import Logout from './common/Logout';
function App () {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/listings">All Listing</Link>&nbsp;|&nbsp;
        <Link to="/listing/create">Listing Create</Link>&nbsp;|&nbsp;
          <Link to="/common/login">Login</Link>&nbsp;|&nbsp;
          <Link to="/common/register">Register</Link>&nbsp;|&nbsp;
          <Link to="/common/logout">Logout</Link>&nbsp;|&nbsp;
            <hr />
          <Routes>
              <Route path="/" />
              <Route path="/listings" element={<ListingList/>}/>
              <Route path="/listing/create" element={<ListingCreate/>}/>
              <Route path="/common/login" element={<Login/>}/>
              <Route path="/common/register" element={<Register/>}/>
              <Route path="/common/logout" element={<Logout/>}/>
          </Routes>
        </Router>
      {/* <ListingList/> */}
      {/* <ListingCreate/> */}
    </>
  );
}

export default App;
