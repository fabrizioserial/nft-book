import {StyledBox, StyledButton, StyledH1, StyledImg} from "../../styles/commonStyled";
import LogoIcon from "../../icons/LogoIcon";
import {useEffect, useState} from "react";
import {OutlinedButton} from "../Button/styles";
import Link from "next/link";
import {useRouter} from "next/router";


const Navbar = () => {
    const route = useRouter()
    const [authenticated, setAuthenticated] = useState<boolean>(true)

    useEffect(()=>{
        console.log(route)

        if(["/signup","/login"].includes(route.pathname)) {
            setAuthenticated(false)
        }else{
            setAuthenticated(true)
        }
    },[route.pathname])
    return (
        <>


        <StyledBox css={{
            display: "flex",
            width: "100vw",
            padding: "25px 80px",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            zIndex: 2,
            left: 0
        }}>
            <StyledBox css={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <LogoIcon/>
                <StyledH1 css={{marginLeft: "10px", fontSize: "20px", textTransform: "uppercase", fontWeight: 400}}>
                    Nftook
                </StyledH1>
            </StyledBox>
            <StyledBox css={{display: "flex"}}>
                {
                    authenticated ?
                        <>
                            <Link href={"/login"} passHref>
                                <StyledButton css={{
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    backgroundColor: "transparent",
                                    borderStyle: 'none',
                                    marginRight:"20px",
                                    padding:"12px 30px 13px",
                                    fontSize: "16px"
                                }}>Log In</StyledButton>
                            </Link>
                            <Link href={"/signup"} passHref>
                                <OutlinedButton css={{fontWeight: 700,fontSize:"16px"}}>Sign Up</OutlinedButton>
                            </Link>

                        </>
                        :
                        <>
                        </>
                }
            </StyledBox>

        </StyledBox>
            <StyledImg src={"/background_decoration.png"} layout='fill' css={{
                marginTop: "20px !important",
                position: "absolute !important",
                top: "-20px !important",
                left: "-10px !important",
                width: "100vw !important",
                zIndex: 0,
            }}/>
        </>
    )
}

export default Navbar