import React from 'react';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink, SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap
} from "./SidebarElements";

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to={'about'}>
                       About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to={'discover'}>
                       Discover
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to={'services'}>
                       Services
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to={'signup'}>
                       Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={'/singin'}>Sing In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default SideBar;