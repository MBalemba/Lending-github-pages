import React, {useState} from 'react';
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg
} from "./HeroElement";
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElement";
import {container, moveBlock} from "../../Anime/Anymation";

const HeroSection = () => {





    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer
            variants={container}
            initial={'hidden'}
            animate={'show'}
        >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type={"video/mp4"}/>
            </HeroBg>
            <HeroContent>
                <HeroH1
                    variants={moveBlock('rtl')}
                >Virtual Banking Made Easy</HeroH1>
                <HeroP
                    variants={moveBlock('ltr')}
                >
                    Sing up for a new account today and receive $250 in credit
                    towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to={'singup'} onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='false'
                            dark={false}
                            big='false'
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;