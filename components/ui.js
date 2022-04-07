import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1328px;
  margin: 0 auto;
  background-color: #e0e0e0;
`;
export const Title = styled(motion.h1)`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

export const StyledP = styled(motion.p)`
  font-size: ${({ fs }) => fs}px;
  font-weight: 300;
  padding: 10px 0px;
  color: ${({ color }) => color};
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const StyledSpan = styled(motion.span)`
  font-size: ${({ fs }) => fs}px;
  font-weight: 700;
`;

export const StyledHeading = styled(motion.h2)`
  font-weight: 700;
  color: ${({ color }) => color};
  font-size: ${({ fs }) => fs}px;
  padding-bottom: ${({ pb }) => pb}px;
  @media (max-width: 1000px) {
  }
  @media (max-width: 500px) {
    font-size: ${({ fs }) => fs / 1.2}px;
  }
`;

export const HomePage = styled.section`
  //   margin: 0 auto;
  position: relative;
  height: 600px;
  width: 1300px;
  overflow: hidden;
  z-index: -1;
`;

export const BgText = styled.p`
  color: white;
  position: absolute;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  padding-top: 20vh;
  text-shadow: 1px 1px 1px #3c5c5e;
`;

export const Container = styled.div`
  max-width: 1900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: ${({ $dark }) => ($dark ? "#191919" : "white")};
  background-position: 1% 50%;
  background-size: 600% 300%;
  color: ${({ $dark }) => ($dark ? "#ECECEC" : "#191919")};
  margin: 50px 0 35px 0;
  padding: 23px 40px;
  text-align: center;
  font-weight: 700;
  transition: all 0.7s ease-out;
  cursor: pointer;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-image: ${({ $dark }) =>
    $dark
      ? `linear-gradient(
      1000deg,
      //260 idk czy ladniej
      //lub bialy
      rgba(255, 255, 255, .9),
      rgba(255, 255, 255, .9),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    )`
      : `linear-gradient(
        270deg,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1 ),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      )`};

  &:hover {
    border-color: ${({ $dark }) => ($dark ? "#191919" : "white")};
    color: ${({ $dark }) => ($dark ? "#191919" : "white")};
    background-position: 90% 50%;
  }
`;

export const Section = styled(motion.section)`
  padding: ${({ p }) => p}px;
  padding-top: ${({ pt }) => pt}px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ color }) => {
    switch (color) {
      case "dark":
        return css`
          background-color: #191919;
          color: #ffffff;
        `;
      case "grey":
        return css`
          background-color: #eeeeee;
          color: #000;
        `;
      default:
        return css`
          background-color: #f2f2f2;
          color: #000;
        `;
    }
  }}

  &.shop-info {
    padding: 130px 60px 60px 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (max-width: 700px) {
    &.shop-info {
      padding: 80px 40px 60px 40px;
    }
  }
`;
