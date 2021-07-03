import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import NavAnimation from './NavAnimation.scss'

import {
    Nav, NavbarContainer, NavLogo, MobileIcon,
    NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn
} from './NavbarElements'

function Navbar({toggle}) {
    const [scrollNav, setScrollNav] = useState(false);

    function runSliderMenu(Links){
        setTimeout(()=>{

            let i = 0;

            let setNavSlider = function (link, index) {
                let line = document.querySelector('.underline')
                line.classList.add('rightToLeft');

                function getLeft(ind) {
                    let left = 0;
                    for(let i = 0; i< Links.length; i++){
                        if(i === ind){
                            break
                        }
                        left += Links[i].offsetWidth
                    }

                    return left
                }

                switch (index.toString()) {
                    case '0':
                        line.style = `
                        left: ${getLeft(index)}px;
                        width: ${link.offsetWidth}px;
                        background: #0BA6BF;
                                `
                        break;
                    case '1':

                        line.style = `
                        left: ${getLeft(index)}px;
                        width: ${link.offsetWidth}px;
                        background: #0BA6BF;
                                `
                        break;
                    case '2':
                        line.style = `
                        left: ${getLeft(index)}px;
                        width: ${link.offsetWidth}px;
                        background: #0BA6BF;
                        `
                        break;
                    case '3':
                        line.style = `
                        left: ${getLeft(index)}px;
                        width: ${link.offsetWidth}px;
                        background: #0BA6BF;
                        `
                        break;
                    default:
                        line.style = ``
                        line.classList.remove('rightToLeft');

                }
            }


            Links.forEach((link,index) => {


                try {
                    link.classList.forEach((classN) => {
                        if (classN === 'active') {
                            setNavSlider(link, index);
                            throw new Error();
                        }
                    })
                    i++;
                    if(i===4){
                        setNavSlider(link, 6);
                        i=0;
                    }
                }
                catch (e) {

                }

            })
        }, 60)
    }



    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }


    useEffect(() => {
        let Links = document.querySelectorAll('.link');
        window.addEventListener('scroll', runSliderMenu.bind(null, Links))
    })

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to={'/'} onClick={toggleHome} to="/">dolla</NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>

                            <NavLinks className={'link'} to={"about"}
                                      smooth={true} duration={500} exact='true' offset={-80} activeClass={"active"}
                                      spy={true}


                            >
                                About
                                <div className={'underline'}></div>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className={'link'} to={"discover"}
                                      smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className={'link'} to={"services"}
                                      smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className={'link'} to={"signup"}
                                      smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Sing Up
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={"signin"}>
                            Sing In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;