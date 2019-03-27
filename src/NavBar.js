import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/initial"><span>No Effects</span></NavLink></li>{/*Initial pictures look*/}
      <li><NavLink to="/grayscale"><span>Geyscale</span></NavLink></li>{/*With greyscale filter*/}
      <li><NavLink to="/frames"><span>Add Frames</span></NavLink></li>{/*With nice frames*/}
      <li><NavLink to="/chaotic"><span>A little chaos</span></NavLink></li>{/*Adds random rotation*/}
      <li><NavLink to="/random"><span>Don't know what I want...</span></NavLink></li>{/*Directs to the route with random topic. Added to 100% achieve Meets expectations.*/}
    </ul>
  </nav>
);

export default NavBar;
