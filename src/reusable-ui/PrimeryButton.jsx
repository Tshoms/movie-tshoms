import React from "react";
import styled from "styled-components";

function PrimeryButton({ label, onClick }) {
  return (
    <PrimeryButtonStyled onClick={onClick}>
      <span>{label}</span>
    </PrimeryButtonStyled>
  );
}

const PrimeryButtonStyled = styled.button`
  padding: 12px 0px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  color: white;
  background-color: black;
  border: 2px solid #1ce783;

  :hover {
    color: black;
    background-color: white;
    border: 2px solid black;
    transition: all 200ms ease-out;
  }
`;

export default PrimeryButton;
