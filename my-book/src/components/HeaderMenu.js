import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const HeaderMenu = () => {
  
    return (
      <div className="header-menu--container">
            <div className="menu-button--container">
                <span className="button__image"></span>
            </div>
            <nav className="menu-nav--container">
                <NavLink to="/my-book/home" className="nav__home" activeClassName="active" >HOME</NavLink>
                <NavLink to="/my-book/login" className="nav__login" activeClassName="active">LOGIN</NavLink>
                <NavLink to="/my-book/account" className="nav__account" activeClassName="active">ACCOUNT</NavLink>
                <NavLink to="/my-book/about" className="nav__about" activeClassName="active" >ABOUT</NavLink>
            </nav>
            <span className="menu-logo--container">
                <Link to="/my-book/home" className="logo__principal-logo"></Link>
            </span>
        </div>
  );
};
