import {StyledBox, StyledInput, StyledP} from "../../styles/commonStyled";

interface InputFieldProps {
    label: string,
    name: string,
    value: string,
    placeholder:string,
    type?:string,
}

const InputField = ({label,name,value,placeholder,type}:InputFieldProps) => {
    return(
        <StyledBox css={{width: "100%", marginBottom:"25px"}}>
            <StyledP css={{fontSize:"14px", marginBottom:"5px",fontWeight:300, paddingLeft:"10px"}}>{label}</StyledP>
            <StyledInput
                name={name}
                value={value}
                placeholder={placeholder}
                css={{
                    maxWidth:"486px",
                    boxSizing: "border-box",
                    padding: "20px 25px",
                    width:"100%",
                    borderRadius:"10px",
                    border: "1px solid white",
                    fontSize:'16px',
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(300px)",
                }}
                placeholderCss={{color:"rgba(255,255,255,0.5)",fontWeight:300}}
            />
        </StyledBox>
    )
}

export default InputField