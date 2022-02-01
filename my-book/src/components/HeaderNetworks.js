import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderNetworks = () => {
  return (
        <div className="header-network__menu--container">
            <div className="network__menu-sentece--container">
                <h2 className="sentence__title">THE BEST LIBRARY</h2>
            </div>
            <nav className="network__menu-nav--container">
                <span className="menu__nav-facebook--container">
                    <Link to="" className="facebook__logo" target="_blank"></Link>
                </span>
                <span className="menu__nav-instagram--container">
                    <Link to="" className="instagram__logo"></Link>
                </span>
                <span className="menu__nav-twitter--container">
                    <Link to="" target="_blank" className="twitter__logo"></Link>
                </span>
                <span className="menu__nav-whatsapp--container">
                    <Link to="" target="_blank" className="whatsapp__logo"></Link>
                </span>
            </nav>
        </div>
    );
};
