import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavBar, CompanyName, NavList, NavListItem } from './style';
import { TextGreen } from '../ui/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const navigate = useNavigate();
    //it's only change the menu visibility on mobil
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NavBar>
            <CompanyName onClick={() => navigate('/')}>
                <TextGreen>T</TextGreen>rendy <TextGreen>D</TextGreen>esign<TextGreen>.</TextGreen>
            </CompanyName>
            <FontAwesomeIcon size="3x" icon={faBars} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <NavList className={isMenuOpen ? 'show' : ''}>
                <CustomLink to="/">Főoldal</CustomLink>
                <CustomLink to="/rolunk">Rólunk</CustomLink>
                <CustomLink to="/munkaink">Munkáink</CustomLink>
                <CustomLink to="/kapcsolat">Kapcsolat</CustomLink>
            </NavList>
        </NavBar>
    );
}

/* eslint-disable-next-line react/prop-types */
function CustomLink({ to, children }) {
    return (
        <NavListItem>
            <NavLink to={to}>{children}</NavLink>
        </NavListItem>
    );
}

export default Header;
