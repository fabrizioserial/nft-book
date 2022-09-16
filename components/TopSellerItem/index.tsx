import {StyledBox, StyledImg, StyledP, StyledSpan} from "../../styles/commonStyled";
import {StyledTopSellerItem} from "./styles";
import {useTheme} from "styled-components";
import MetamaskIcon from "../../icons/MetamaskIcon";

interface TopSellerItemProps {
    name:string,
    url?: string,
    price: number,
}
const TopSellerItem = ({name,url="https://styles.redditmedia.com/t5_2tr91/styles/communityIcon_ko91xo4mcc281.jpg",price}:TopSellerItemProps) => {
    const theme = useTheme()

    return(
        <StyledTopSellerItem>
            <StyledImg src={url} width={70} height={70} css={{borderRadius: "10px"}}/>
            <StyledBox css={{display:"flex", flexDirection:"column",}}>
                <StyledP css={{fontSize: "20px", fontWeight: 600, marginBottom: "5px"}}>{name}</StyledP>
                <StyledP css={{fontSize:"16px"}}>{price} <StyledSpan css={{fontSize:"16px", color:theme.colors.lightPurple}}>Eth</StyledSpan></StyledP>
                <MetamaskIcon/>
            </StyledBox>
        </StyledTopSellerItem>
    )
}

export default TopSellerItem