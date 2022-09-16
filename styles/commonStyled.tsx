import styled, {css as styledComponentCss, CSSObject} from "styled-components";
import Image from "next/image";

export interface CustomCssProps {
    css?: CSSObject,
    hoverCss?: CSSObject,
    placeholderCss?: CSSObject,
}

export const StyledBox = styled.div<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}
`

export const StyledP = styled.p<CustomCssProps>`
  margin: 0;
  ${(props) => styledComponentCss`${props.css}`}

`

export const StyledSpan = styled.span<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}

`

export const StyledH1 = styled.h1<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}

`
export const StyledH3 = styled.h3<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}

`

export const StyledButton = styled.button<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}

`

export const StyledInput = styled.input<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}
  &::placeholder {
    ${(props) => styledComponentCss`${props.placeholderCss}`}
  }

`

export const StyledImg = styled(Image)<CustomCssProps>`
  ${(props) => styledComponentCss`${props.css}`}

`