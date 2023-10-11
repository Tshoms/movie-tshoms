import React from "react";
import styled from "styled-components";

function TextInput({ onChange, value }) {
  return (
    <TextInputStyled>
      <input
        type="text"
        placeholder="Ecrivez votre prénom ..."
        onChange={onChange}
        value={value}
        required
      />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  background-color: white;
  border: 2px solid #1ce783;
  margin-bottom: 15px;
  border-radius: 10px;

  input {
    width: 80%;
    border: none;
  }
`;

export default TextInput;
