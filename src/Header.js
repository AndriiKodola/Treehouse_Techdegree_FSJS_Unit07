import React from 'react';
import SearchForm from './SearchForm';
import NavBar from './NavBar';


const Header = (props) => (
  <>
    <SearchForm changeTopic={props.changeTopic} />
    <NavBar />
  </>
);

export default Header;
