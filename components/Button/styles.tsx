import {StyledButton} from "../../styles/commonStyled";
import styled, { css as styledComponentCss,CSSObject} from "styled-components";

export interface CustomCssProps {
    css?: CSSObject
}
export const OutlinedButton = styled(StyledButton)<CustomCssProps>`
  border: 1px solid white;
  border-radius: 25px;
  padding: 12px 30px 13px;
  color: white;
  background-color: transparent;
  transition: all 0.3s ease-out;
  cursor: pointer;
  ${(props) => styledComponentCss`${props.css}`}
  &:hover{
    background-color: white;
    color: #000;
  }
`

export const OutlinedPurpleButton = styled(StyledButton)<CustomCssProps>`
  background: linear-gradient(180deg, #BE04FF 0%, #7900C2 100%);
  border: 0px none transparent;
  border-radius: 25px;
  padding: 12px 30px 13px;
  color: white;
  transition: all 0.3s ease-out;
  cursor: pointer;
  ${(props) => styledComponentCss`${props.css}`}
  ${(props) => ` background: linear-gradient(180deg, ${props.theme.colors.lightPurple} 0%, ${props.theme.colors.purple} 100%)`}
  &:hover{
    ${(props) => ` background: linear-gradient(180deg, ${props.theme.colors.purple} 0%, ${props.theme.colors.lightPurple} 100%)`}
  }
`

export const FilledColourButton = styled(StyledButton)<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}
  background: linear-gradient(90.87deg, #BE04FF 13.87%, #0038FF 98.62%);
  border-radius: 10px;
  height: 60px;
  box-sizing: border-box;
  border-style: none;
`

export const StyledButtonWithIcon = styled(StyledButton)<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}
  border-radius: 10px;
  padding: 15px 25px 16px;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(300px);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(300px);
  }
`

