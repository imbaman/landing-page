import React from "react";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { container, fadeInUp } from "./Animations";
import { motion } from "framer-motion";
import { Section, StyledP, StyledSpan } from "./ui";
import Link from "next/link";

const TextDiv = styled(motion.div)`
  padding: 70px 0 40px 0;
  max-width: 60%;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  // &:hover {
  //   filter: brightness(40%);
  // }
`;

const StyledLink = styled.a`
  position: relative;
  &::after {
    content: url(/plus.svg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: #c4c4c4;
    padding: 0;
    pointer-events: none;
    // transition: opacity 0.2s ease;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const InspirationsSection = () => {
  const [element, controls] = useScroll();

  return (
    <Section
      variants={container}
      ref={element}
      animate={controls}
      initial='hidden'>
      <TextDiv variants={fadeInUp} style={{ maxWidth: "80%" }}>
        {" "}
        <StyledP fs={36} color={"#424242"}>
          Zainspiruj się{" "}
          <StyledSpan fs={36} style={{ fontFamily: "Arial" }}>
            naszymi realizacjami
          </StyledSpan>
        </StyledP>
        <StyledP fs={19} color={"#474040"}>
          Wybierz model i kolor okien RGB idealnie dopasowanych do projektu
          Twojego wymarzonego domu. Poznaj również szeroki asortyment rolet
          okiennych.
        </StyledP>
      </TextDiv>
      <Grid>
        {["Realizacja1", "Realizacja2", "Realizacja3", "Realizacja4"].map(
          (item) => (
            <Link href={item} key={item}>
              <StyledLink>
                <StyledImg
                  alt='wizualizacja'
                  variants={fadeInUp}
                  src={item + ".png"}
                  // layoutId={item}
                  whileHover={{
                    filter: "brightness(20%)",
                  }}
                />
              </StyledLink>
            </Link>
          )
        )}
      </Grid>
    </Section>
  );
};

export default InspirationsSection;
