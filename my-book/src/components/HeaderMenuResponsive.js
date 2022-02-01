import React from 'react';
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';

export const HeaderMenuResponsive = () => {
  
    const [classShowMenu, setClassShowMenu] = useState("menu-nav--container");
    const [rotateMenuImage, setRotateMenuImage] = useState("button__image");

    const showMenu = () => {

        const classMenu = (classShowMenu === "menu-nav--container") ? "menu-nav--active" : "menu-nav--container";
        const classMenuImage = (rotateMenuImage === "button__image") ? "button__image button__image--selected" : "button__image";

        setClassShowMenu(classMenu);
        setRotateMenuImage(classMenuImage);

    }
  
    return (
        <div className="header-menu--responsive">
            <div className="menu-button--container">
                <span className={rotateMenuImage} onClick={showMenu}></span>
                <span className="menu-logo--container">
                    <Link to="/my-book/home" className="logo__principal-logo"></Link>
                </span>
            </div>
            <nav className={classShowMenu}>
                <NavLink to="/my-book/home" className="nav__home--responsive" activeClassName="active" onClick={showMenu}>HOME</NavLink>
                <NavLink to="/my-book/login" className="nav__login--responsive" activeClassName="active" onClick={showMenu}>LOGIN</NavLink>
                <NavLink to="/my-book/account" className="nav__account--responsive" activeClassName="active" onClick={ showMenu }>ACCOUNT</NavLink>
                <NavLink to="/my-book/about" className="nav__about--responsive" activeClassName="active" onClick={showMenu}>ABOUT</NavLink>
            </nav>
        </div>
    );
};
