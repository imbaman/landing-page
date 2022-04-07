import React from "react";
import styled from "styled-components";
import { fade } from "../components/Animations";
import { motion } from "framer-motion";
import { Section } from "../components/ui";
import { useRouter } from "next/router";
import Link from "next/link";

//
const TextDiv = styled(motion.div)`
  padding: 80px 0;
  text-align: center;
`;

const StyledImg = styled(motion.img)`
  max-width: 1000px;
  height: auto;
`;
const StyledSpan = styled(motion.span)`
  font-weight: bold;
`;

const Item = () => {
  const {
    query: { item },
  } = useRouter();
  return (
    <Section
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
      variants={fade}
      initial='hidden'
      animate='show'>
      <TextDiv>
        <h2>
          Zainspiruj się <StyledSpan>naszymi realizacjami {item}</StyledSpan>
        </h2>
      </TextDiv>
      <Link href='/'>
        <a>
          {" "}
          <StyledImg
            src={item + ".png"}
            key={item}
            // layoutId={item}
            variants={fade}
          />
        </a>
      </Link>
    </Section>
  );
};

export default Item;
