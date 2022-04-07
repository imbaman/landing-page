import React from "react";
import styled from "styled-components";
import { Button, Section, StyledP, StyledHeading } from "../pages/ui";
import { motion } from "framer-motion";
// import { useScroll } from "./useScroll";
// import {  fade } from "./Animations";
//mozliwa animacja/overkill

const TextContainer = styled(motion.div)`
  text-align: center;
`;
const OfferInfo = () => {
  // const [element, controls] = useScroll();
  return (
    <Section p={50} color='dark'>
      <TextContainer>
        {" "}
        <StyledHeading
          // variants={fade}
          // ref={element}
          // animate={controls}
          // initial='initial'>
          fs={36}
          style={{
            fontFamily: "Arial",
            lineHeight: "41px",
            paddingTop: "30px",
          }}>
          Skorzystaj z oferty
        </StyledHeading>
        <StyledP fs={24} style={{ color: "#BCBCBC", lineHeight: "36px" }}>
          Odwiedź nasz salon i sprawdź, co zyskujesz
        </StyledP>
        <Button>Znajdz salon</Button>
      </TextContainer>
    </Section>
  );
};

export default OfferInfo;
