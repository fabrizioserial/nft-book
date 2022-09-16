import styled from "styled-components";
import {StyledBox} from "../../styles/commonStyled";

export const StyledTopSellerItem = styled(StyledBox)`
  height: 115px;
  width: 260px;
  display: flex;
  flex-direction: row;
  gap: 17px;
  padding: 22px;
  background-color: rgba(222, 222, 222, 0.03);
  backdrop-filter: blur(250px);
  border-radius: 20px;
  transition: all 0.8s ease-out;
  cursor: pointer;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, transparent);
    z-index: -1;
    filter: blur(10px);
  }

  &:hover {
    outline: 1px solid white;
    background-color: rgba(222, 222, 222, 0.1);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, rgba(0, 56, 255, 0.3), rgba(237, 80, 31, 0.3), rgba(189, 0, 255, 0.3));
      z-index: -1;
      filter: blur(50px);
    }
  }
`