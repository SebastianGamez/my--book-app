import React from 'react';
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';

import { showMenu } from '../helpers/showMenu';

export const HeaderMenuResponsive = () => {
  
    const [classShowMenu, setClassShowMenu] = useState("menu-nav--container");
    const [rotateMenuImage, setRotateMenuImage] = useState("button__image");
  
    return (
        
        <div className="header-menu--responsive">
            <div className="menu-button--container">
                <span 
                    className={rotateMenuImage}
                    onClick={ () => showMenu(classShowMenu, rotateMenuImage, setClassShowMenu, setRotateMenuImage) }>    
                </span>
                <span className="menu-logo--container">
                    <Link to="/my-book/home" className="logo__principal-logo"></Link>
                </span>
            </div>
            <nav className={classShowMenu}>
                <NavLink 
                    to="/my-book/home"
                    className="nav__home--responsive"
                    activeClassName="active" 
                    onClick={ () => showMenu(classShowMenu, rotateMenuImage, setClassShowMenu, setRotateMenuImage) }>
                    HOME
                </NavLink>
                <NavLink to="/my-book/login"
                    className="nav__login--responsive"
                    activeClassName="active"
                    onClick={ () => showMenu(classShowMenu, rotateMenuImage, setClassShowMenu, setRotateMenuImage) }>
                    LOGIN
                </NavLink>
                <NavLink 
                    to="/my-book/account"
                    className="nav__account--responsive"
                    activeClassName="active"
                    onClick={ () => showMenu(classShowMenu, rotateMenuImage, setClassShowMenu, setRotateMenuImage) }>
                    ACCOUNT
                </NavLink>
                <NavLink 
                    to="/my-book/about"
                    className="nav__about--responsive"
                    activeClassName="active"
                    onClick={ () => showMenu(classShowMenu, rotateMenuImage, setClassShowMenu, setRotateMenuImage) }>
                    ABOUT
                </NavLink>
            </nav>
        </div>
        
    );
};
