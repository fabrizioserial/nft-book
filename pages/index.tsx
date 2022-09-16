import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {StyledBox, StyledH1, StyledH3, StyledImg, StyledP} from "../styles/commonStyled";
import {OutlinedButton, OutlinedPurpleButton} from "../components/Button/styles";
import Spline from "@splinetool/react-spline";
import styled, {keyframes} from "styled-components";
import TopSellerItem from "../components/TopSellerItem";
import {useState} from "react";

const rotate = keyframes`
  0% {
    background-position: 10% 0%
  }
  50% {
    background-position: 100% 100%
  }
  100% {
    background-position: 10% 0%
  }
`;
const SpanEffect = styled.span`
  background-color: red;
  background-image: linear-gradient(45deg, #0038FF, #ED501F, #BD00FF);
  background-size: 200% 200%;
  font-weight: 700;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-animation: ${rotate} 5s ease infinite;
  -moz-animation: ${rotate} 5s ease infinite;
  animation: ${rotate} 6s ease infinite;
`

export default function Home() {
    const [topSeller, setTopSeller] = useState([
        {name: "Elon Musk", price: 869.5}, {
            name: "Elon Musk",
            price: 869.5
        },
        {name: "Elon Musk", price: 869.5}, {name: "Elon Musk", price: 869.5}])
    return (
        <StyledBox css={{ minHeight: "100vh", width: "100vw"}}>
            <StyledBox
                css={{
                    minHeight: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: "row",
                    padding: "0 131px",
                    justifyContent: "space-between",
                    zIndex: 1,
                }}>
                <StyledBox css={{zIndex: 1}}>
                    <StyledH1 css={{maxWidth: "611px", fontSize: 80, zIndex: 1}}>
                        Discover,
                        collect and sell
                        your <SpanEffect>NFT</SpanEffect> book
                    </StyledH1>
                    <StyledP css={{width: "507px", fontSize: "18px", fontWeight: 300}}>
                        The world’s largest digital marketplace for crypto books and
                        non-fungible tokens (NFTs).
                    </StyledP>
                    <OutlinedPurpleButton css={{marginTop: "20px"}}>Explorer</OutlinedPurpleButton>
                </StyledBox>
                <Spline scene="https://prod.spline.design/FHUfXZxe5LkZhlx4/scene.splinecode"
                        style={{zIndex: 1, maxWidth: "500px", maxHeight: "500px"}}/>
            </StyledBox>
            <StyledBox css={{padding: "0 131px 60px"}}>
                <StyledH3 css={{fontSize: "20px", fontWeight: 600}}>Top Seller</StyledH3>
                <StyledBox css={{display: "flex", flexDirection: "row", columnGap:"18px"}}>
                    {
                        topSeller.map((seller,index) => <TopSellerItem key={index} name={seller.name} price={seller.price}/>)
                    }
                </StyledBox>
            </StyledBox>
        </StyledBox>
    )
}
