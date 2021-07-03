import React, {useEffect} from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon, ServicesP,
    ServicesWrapper
} from "./servicesElements";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Services = () => {
    const control = useAnimation();

    const { ref, inView, entry } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    })



    useEffect(()=>{
        if(inView){
            control.start((i)=>({
                scale: 1,
                opacity: 1,
                transition:{
                    delay:1 + i * 0.3,
                    duration:(i+1)*0.3,
                }
            }))
        }
    })

    control.start({
        opacity:0,
        scale:4
    })

    return (
        <>
            <ServicesContainer ref={ref} id={'services'}>
                <ServicesH1
                    animate={inView?{
                        scale: 1,
                        transition:{
                            type: 'spring'
                        }
                    }:''}
                    initial={{
                        scale: 0,
                    }}
                >Our Services</ServicesH1>
                <ServicesWrapper animate={inView?{
                    opacity: 1,
                    transition:{
                        duration: 1,
                    }
                }:''}
                initial={{
                    opacity: 0,
                }}
                >
                    <ServicesCard custom={0}  animate={control}>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard custom={1} animate={control}>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the word</ServicesP>
                    </ServicesCard >
                    <ServicesCard custom={2} animate={control}>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 55 cash back</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;