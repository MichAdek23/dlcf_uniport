// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;

  svg {
    margin: 0 0.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #3498db;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 DLCF | Uniport-abuja campus</p>
      <SocialIcons>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;
