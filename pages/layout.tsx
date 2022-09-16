import Navbar from "../components/Navbar";
import {StyledBox} from "../styles/commonStyled";

const Layout = ({children}) => {
    return(
        <StyledBox>
            <Navbar/>
            {
                children
            }
        </StyledBox>

    )
}

export default Layout