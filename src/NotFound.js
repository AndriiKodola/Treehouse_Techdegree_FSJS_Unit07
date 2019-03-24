import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = (props) => (
  <div>
    <p className="not-exist">Oops! This page doesn't exist.</p>{/*404-like message component*/}
    <NavLink className="not-exist" to='/'>Go back.</NavLink>{/*Link for users to be able to go back to the site*/}
  </div>
);

export default NotFound;
