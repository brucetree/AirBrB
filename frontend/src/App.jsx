import React from 'react';
import './App.css';
import ListingList from './pages/ListingList';
import ListingCreate from './pages/ListingCreate';
import Login from './common/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './common/Register';
import Logout from './common/Logout';
import Home from './pages/Home';
import ListingEdit from './pages/ListingEdit';
import ListingDetail from './pages/ListingDetail';
import NavBar from './components/NavBar';
import ListingPublish from './components/ListingPublish';
import BookingRequest from './pages/BookingRequest';
function App () {
  return (
    <>
      <Router>
         <NavBar />
            <hr />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/listings" element={<ListingList/>}/>
              <Route path="/listing/create" element={<ListingCreate/>}/>
              <Route path="/listing/edit/:listingId" element={<ListingEdit/>}/>
              <Route path="/listing/detail/:listingId" element={<ListingDetail/>}/>
              <Route path="/common/login" element={<Login/>}/>
              <Route path="/common/register" element={<Register/>}/>
              <Route path="/common/logout" element={<Logout/>}/>
              <Route path="/listing/publish/:listingId" element={<ListingPublish/>}/>
              <Route path="/listing/bookingRequest" element={<BookingRequest/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
