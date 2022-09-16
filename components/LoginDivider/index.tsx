import {StyledBox, StyledP} from "../../styles/commonStyled";

const LoginDivider = () => {
    return(
        <StyledBox css={{display:"flex",flexDirection:'row',alignItems:"center", width:"100%",justifyContent:"space-between", margin:"35px 0"}}>
            <StyledBox css={{height:"2px", width:"45%",backgroundColor:"white"}}/>
            <StyledP>Or</StyledP>
            <StyledBox css={{height:"2px", width:"45%",backgroundColor:"white"}}/>
        </StyledBox>
    )
}
export default LoginDivider