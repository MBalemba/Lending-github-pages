import React from 'react';
import {CloseIcon, Icon, SidebarContainer} from "./SidebarElements";

const SideBar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={'about'}>
                       About
                    </SidebarLink>
                    <SidebarLink to={'discover'}>
                       Discover
                    </SidebarLink>
                    <SidebarLink to={'services'}>
                       Services
                    </SidebarLink>
                    <SidebarLink to={'signup'}>
                       Sign up
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default SideBar;