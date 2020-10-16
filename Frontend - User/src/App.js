import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import About from './Components/About';
import PostCollection from './Containers/PostCollection';
import Home from './Components/Home';
import PostReview from './Containers/PostReview';
import Login from './Components/Login';

import Header from './Header';
import './App.css'


export default function Website() {
  return (
    <Router>
      <div>
        <Header/>     
		<nav className="navbar navbar-fixed-top bg-white navbar-expand-lg justify-content-center">
		 	<ul className="navbar-nav">
			 	<li className="nav-item">
	            	<Link to="/home" className="nav-item nav-link text-wrap text-center" style={{width: "8rem"}}>Welcome Page</Link>
	            </li>
	            <li className="nav-item">
	            	<Link to="/profil" className="nav-item nav-link text-wrap text-center" style={{width: "8rem"}}>Library Profile</Link>
	            </li>
	            <li className="nav-item">
	            	<Link to="/collection" className="nav-item nav-link text-wrap text-center" style={{width: "8rem"}}>Book Collection</Link>
	            </li>
	        </ul>
	    </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profil">
            <About />
          </Route>
          <Route path="/collection">
            <PostCollection />
          </Route>
          <Route path="/review">
            <PostReview />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

