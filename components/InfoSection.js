import React from "react";
import styled from "styled-components";
import { Section, StyledSpan } from "../pages/ui";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade, container } from "./Animations";
import Image from "next/image";

const StyledText = styled(motion.h1)`
  padding: 100px 0px;
  font-size: 26px;
  font-weight: 300;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 713px;
  padding: 0 40px;
`;

const InfoSection = () => {
  const [element, controls] = useScroll();

  return (
    <Section
      variants={container}
      ref={element}
      animate={controls}
      initial='hidden'>
      <StyledText variants={fade} style={{ color: "#474040" }}>
        Ładny tekst opisujący produkty firmy <StyledSpan>RANDOM</StyledSpan>
      </StyledText>
      <ImgContainer>
        <Image
          src='/render.png'
          layout='responsive'
          width={713}
          height={280}
          alt='okna'
          priority={true}
        />
      </ImgContainer>
    </Section>
  );
};

export default InfoSection;
