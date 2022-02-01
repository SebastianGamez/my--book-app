import React from 'react';

import { HeaderMenu } from './HeaderMenu';
import { HeaderMenuResponsive } from './HeaderMenuResponsive';
import { HeaderNetworks } from './HeaderNetworks';

export const NavBar = () => {
    return (

    <header className="body-header--container">
        
        <HeaderMenu />
        <HeaderMenuResponsive />
        <HeaderNetworks></HeaderNetworks>

    </header>
    )
}