import {CSSObject} from "styled-components";

interface LogoIconInterface {
    style?: CSSObject
}

const LogoIcon = ({style}:LogoIconInterface) => {
    return(
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
            <path d="M20 5L5 25L20 35L35 25L20 5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 25L20 20L35 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 5V35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default LogoIcon