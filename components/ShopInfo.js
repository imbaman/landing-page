import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Section, StyledP, StyledHeading } from "../pages/ui";
import { useScroll } from "./useScroll";
import { width, widthSmall } from "./Animations";

const StyledSpan = styled(motion.span)`
  position: relative;
  display: inline-block;
  padding-left: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
  }
`;

const Line = styled(motion.img)`
  position: absolute;
  display: block;
  top: 97%;
  left: 3%;
  height: 4%;

  @media (max-width: 480px) {
    display: none;
  }
`;

const LineSmall = styled(motion.img)`
  position: absolute;
  display: block;
  top: 45%;
  // left: 45%;
  // transform: translate(-50%, -50%);
  left: 10%;
  height: 2%;
  @media (min-width: 350px) {
    left: 15%;
  }
  @media (min-width: 400px) {
    left: 18%;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  max-width: 70%;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const ShopInfo = () => {
  const [element, controls] = useScroll();
  return (
    <Section
      className='shop-info'
      color='grey'
      ref={element}
      animate={controls}
      initial='hidden'>
      <TextContainer>
        <StyledHeading
          fs={14}
          pb={30}
          color={"#474040"}
          style={{ fontFamily: "Arial" }}>
          Sprawdź najnowszą, sierpniową ofertę RANDOM.
        </StyledHeading>
        <StyledP fs={24} style={{ lineHeight: "158%" }} color={"#474040"}>
          Kup produkty zawierające dowolny system RGB lub CMYK i zyskaj
          <StyledSpan>
            dodatkowy rabat na zamówienie.
            <Line src='./line.png' variants={width} alt='line' />
            <LineSmall src='./line.png' variants={widthSmall} alt='line' />
          </StyledSpan>
        </StyledP>
        <Button $dark>idz do sklepu</Button>
      </TextContainer>
    </Section>
  );
};

export default ShopInfo;
