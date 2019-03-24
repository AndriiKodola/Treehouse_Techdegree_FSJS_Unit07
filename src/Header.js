import React from 'react';
import SearchForm from './SearchForm';
import NavBar from './NavBar';


const Header = (props) => (
  <>
    <SearchForm changeTopic={props.changeTopic} />
    <NavBar changeTopic={props.changeTopic} />
  </>
);

export default Header;
