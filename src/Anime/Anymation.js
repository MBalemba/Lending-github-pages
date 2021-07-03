

export const container = {
    hidden: {opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            duration: 0,
            delay: 0.2,
            staggerChildren: 0.5,
        }
    }
}

export const moveBlock = (side)=>{
    let obj = {};
    if(side==='rtl'){
        obj = {
            hidden: {opacity: 0, x: -100 },
            show: {opacity: 1, x: 0, transition: {
                    type: 'spring',
                    bounce: 1,
                    duration: 1.5,
                    damping: 15
                }}
        }
    } else if (side === 'ltr'){
        obj = {
            hidden: {opacity: 0, x: 100 },
            show: {opacity: 1, x: 0, transition: {
                    type: 'spring',
                    bounce: 1,
                    duration: 1.5,
                    damping: 15
                }}
        }
    }

    return obj
}