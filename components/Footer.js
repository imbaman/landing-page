import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 40px;
  background-color: #e4e4e4;
  color: #787878;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.01em;
`;

const Footer = () => {
  return <FooterContainer>©2021</FooterContainer>;
};

export default Footer;
