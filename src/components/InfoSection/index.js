import React, {useEffect, useState} from 'react';
import {Button} from "../ButtonElement";
import { useInView } from 'react-intersection-observer';

import {
    BtnWrap,
    Column1, Column2, Heading,
    Img,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper, Subtitle,
    TextWrapper,
    TopLine
} from "./InfoElements";
import {container, moveBlock} from "../../Anime/Anymation";

const InfoSection = ({
                         lightBg,
                         id,
                         dark,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         darkText,
                         description,
                         buttonLabel,
                         primary,
                         img,
                         alt
                     }) => {

    const [triger, changeTriger] = useState(false);

    const { ref, inView, entry } = useInView({
        threshold: 0.3,
    })

    useEffect(()=>{
        console.log(inView);
        if(inView && !triger){
            changeTriger(!triger);
        }
    })

    return (
        <>
            <InfoContainer ref={ref} lightBg={lightBg} id={id}>
                <InfoWrapper  >
                    <InfoRow variants={container}
                             initial={'hidden'}
                             animate={triger?'show':''} imgStart={imgStart}>
                        <Column1
                            variants={imgStart? moveBlock('ltr'):moveBlock('rtl') }
                        >
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button dark={dark} primary={primary} to={'home'}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2
                            variants={imgStart? moveBlock('rtl'): moveBlock('ltr') }
                        >
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    );
};

export default InfoSection;