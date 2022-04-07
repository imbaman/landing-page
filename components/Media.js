import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    justify-content: center;
    gap: 30px;
  }
`;

const MediaContainer = styled.div``;

const FooterLink = styled.a`
  padding: 15px;
  color: #645f5f;
  cursor: pointer;
  font-size: 26px;
  transition: 0.4s ease;
  &:hover {
    color: black;
  }

  @media (max-width: 750px) {
    font-size: 40px;
  }
`;

const Section = styled.div`
  padding: 60px 40px;
  background-color: #f2f2f2;
`;

const MediaText = styled.div`
  font-family: "Arial";
  font-weight: 700;
  font-style: Italic;
  font-size: 18px;
  color: #645f5f;
  opacity: 0.6;
  letter-spacing: -0.01em;
`;

const Media = () => {
  return (
    <Section>
      <FooterContainer>
        <MediaText>
          Obserwuj nas i bądź na bieżąco ze wszystkimi ofertami.
        </MediaText>
        <MediaContainer>
          <FooterLink>
            <BsFacebook />
          </FooterLink>
          <FooterLink>
            <BsInstagram />
          </FooterLink>
          <FooterLink>
            <GrLinkedinOption />
          </FooterLink>
        </MediaContainer>
      </FooterContainer>
    </Section>
  );
};

export default Media;
