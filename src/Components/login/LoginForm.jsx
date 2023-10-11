import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimeryButton from "../../reusable-ui/PrimeryButton";
import TextInput from "../../reusable-ui/TextInput";

function LoginForm() {
  // state -------------
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  // comportement -------------
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/Home/:username",
      search: createSearchParams({
        userName: userName,
      }).toString(),
    });
  };
  return (
    <LoginFormStyled>
      <hr />
      <TextInput onChange={handleChange} value={userName} />
      <PrimeryButton label="Accèder" onClick={handleClick} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 30%;
  /* border: 1px solid red; */

  hr {
    height: 3px;
    width: 100%;
    background-color: white;
    margin-bottom: 20px;
  }

  .icon {
    font-size: 20px;
    margin-right: 13px;
    color: grey;
  }

  /* ---- media Querie ---- */

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 70%;
  }
`;

export default LoginForm;
