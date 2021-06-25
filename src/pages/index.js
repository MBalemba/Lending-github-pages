import React, {useState} from 'react';
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
        </>
    );
};

export default Home;