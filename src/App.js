import logo from './logo.svg';
import React from 'react';
import './App.css';
import Hello from './Hello.js';
import logo_pizza from './img/logoPizza.png';
import Contact from "./Contact.js";
import { Link } from 'react-router';

function App() {
      return (
            <nav>
            <div className="nav-wrapper">
                  <img src={logo_pizza} height="60" width="60"></img>
                  <ul className="right hide-on-med-and-down">
                        <li><a href="home"><i className="material-icons">home</i></a></li>
                        <li><a href="menu"><i className="material-icons">menu</i></a></li>
                        <li><a href="contact"><i className="material-icons">contact</i></a></li>
                  </ul>
            </div>
            <Hello/>
            </nav>
      );
}

export default App;