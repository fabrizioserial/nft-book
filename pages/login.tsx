import {StyledBox, StyledH1, StyledImg, StyledP, StyledSpan} from "../styles/commonStyled";
import LogoWithEffectIcon from "../icons/LogoWithEffectIcon";
import InputField from "../components/InputField";
import {FilledColourButton} from "../components/Button/styles";
import Link from "next/link";
import {useTheme} from "styled-components";
import ButtonWithIcon from "../components/ButtonWithIcon";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LoginDivider from "../components/LoginDivider";

const Login = () => {
    const theme = useTheme()
    return (
        <StyledBox css={{width: "100vw", minHeight: "100vh"}}>
            <StyledBox css={{display: "flex", flexDirection: "row"}}>
                <StyledBox
                    css={{width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2}}>
                    <LogoWithEffectIcon/>
                </StyledBox>
                <StyledBox css={{
                    minHeight: "100vh", width: "50vw",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(300px)",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <StyledBox css={{
                        width: "max-content",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <StyledH1 css={{marginBottom: '80px'}}>Login</StyledH1>
                        <StyledBox css={{display: "flex", flexDirection: "row", columnGap: 12}}>
                            <ButtonWithIcon name={"Sign in with Google"} icon={<GoogleIcon/>} handleAction={() => {
                            }}/>
                            <ButtonWithIcon handleAction={() => {
                            }} name={"Sign in with Facebook"} icon={<FacebookIcon/>}/>
                        </StyledBox>
                        <LoginDivider/>
                        <InputField name={"email"} value={""} type={"text"} label={"Email"}
                                    placeholder={"email@example.com"}/>
                        <InputField name={"password"} value={""} type={"text"} label={"Password"}
                                    placeholder={"Min of 8 characters"}/>
                        <FilledColourButton css={{
                            maxWidth: "486px",
                            width: "100%",
                            fontSize: "20px",
                            fontFamily: "Inter",
                            fontWeight: 600,
                            cursor: "pointer",
                            marginTop: "60px",
                        }}>Login</FilledColourButton>
                        <StyledP css={{marginTop: "20px"}}>Don’t have an account?
                            <Link href={"/signup"} passHref>
                                <StyledSpan
                                    css={{color: theme.colors.lightPurple, marginLeft: "5px", cursor: "pointer"}}
                                >
                                    Sign up
                                </StyledSpan>
                            </Link>
                        </StyledP>
                    </StyledBox>
                </StyledBox>
            </StyledBox>
        </StyledBox>
    )
}

export default Login