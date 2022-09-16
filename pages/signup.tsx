import {StyledBox, StyledH1, StyledImg, StyledP, StyledSpan} from "../styles/commonStyled";
import LogoIcon from "../icons/LogoIcon";
import LogoWithEffectIcon from "../icons/LogoWithEffectIcon";
import InputField from "../components/InputField";
import {FilledColourButton} from "../components/Button/styles";
import Link from "next/link";

const Signup = () => {
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
                        minWidth:"486px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <StyledH1 css={{marginBottom: '80px'}}>Create account</StyledH1>
                        <InputField name={"username"} value={""} type={"text"} label={"Username"}
                                    placeholder={"Cryptousername"}/>
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
                            marginTop:"70px",
                        }}>Register</FilledColourButton>
                    </StyledBox>
                </StyledBox>
            </StyledBox>
        </StyledBox>
    )
}

export default Signup