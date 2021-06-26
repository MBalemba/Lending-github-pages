import React from 'react';
import {Button} from "../ButtonElement";
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
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
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
                        <Column2>
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