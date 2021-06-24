import React from 'react';
import {FaBars} from 'react-icons/fa'


import {
    Nav, NavbarContainer, NavLogo, MobileIcon,
    NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn
} from './NavbarElements'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">dolla</NavLogo>

                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to={"about"}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"about"}>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"services"}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={"signup"}>
                                Sing Up
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={"singin"}>
                            Sing In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;