import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  height: 80px;
  width: 100%;
  padding: 20px;
  background: #242424;
  color: #fff;
  text-align: center;
`;
const Title = styled.p`
  font-family: "Lobster", cursive;
  
`;
function Footer() {
  return (
    <FooterWrap>
      <Title>DeepDiveAnime</Title>
      <span>Just for entertainment purpose</span>
    </FooterWrap>
  );
}

export default Footer;
