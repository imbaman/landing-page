import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { StyledHeading } from "./ui";

const StyledHeroText = styled.div`
  position: absolute;
  bottom: 104px;
  left: 90px;
  font-size: 48px;
  color: #fff;
  font-family: "Arial";
  font-weight: 400;
  line-height: 64px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.25),
    2px 2px 0px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    font-size: 1.5em;
    left: 5%;
    bottom: 5%;
    line-height: 20px;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

const StyledLogo = styled.img.attrs({
  src: "/Logo.svg",
})`
  position: absolute;
  left: 5.86%;
  top: 8.33%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 1200px) {
    top: 5%;
    left: 3%;
  }
  @media (max-width: 520px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledBgContainer = styled.div`
  position: relative;
  max-height: 600px;
  // @media (max-width: 600px) {
  //   height: 400px;
  //   background-color: #eeeeee;
  // }
`;

const HeroSection = () => {
  return (
    <StyledBgContainer>
      <Image
        alt='header image train'
        src='/photo.jpg'
        layout='responsive'
        width={5464}
        height={2400}
        priority={true}
      />
      <StyledLogo alt='logo' />
      <StyledHeroText>
        Lorem ipsum
        <StyledHeading fs={48}>dolor set ignify</StyledHeading>
      </StyledHeroText>
    </StyledBgContainer>
  );
};

export default HeroSection;
