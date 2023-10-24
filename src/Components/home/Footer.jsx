import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <h2>Tshoms-Movie</h2>
      <br />
      <p>by Tshoms Jordy</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  background-color: black;

  h2 {
    font-family: "Lilita One", cursive;
    font-size: 30px;
    color: #1ce783;
  }

  p {
    font-family: "Caveat", cursive;
    font-size: 25px;
    color: #1ce783;
  }
`;

export default Footer;
