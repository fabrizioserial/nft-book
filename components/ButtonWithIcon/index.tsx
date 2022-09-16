import React, {ReactElement} from "react";
import {StyledP} from "../../styles/commonStyled";
import {StyledButtonWithIcon} from "../Button/styles";

interface ButtonWithIconProps {
    handleAction: () => void,
    name: string,
    icon: ReactElement
}

const ButtonWithIcon = ({handleAction,name,icon}:ButtonWithIconProps) => {
    return(
        <StyledButtonWithIcon onClick={handleAction}>
            {icon}
            <StyledP css={{marginLeft:"15px",fontSize:"16px",fontWeight:300}}>
                {name}
            </StyledP>
        </StyledButtonWithIcon>
    )
}

export default ButtonWithIcon