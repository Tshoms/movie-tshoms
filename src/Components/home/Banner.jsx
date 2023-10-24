import React from "react";
import styled from "styled-components";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import NavBar from "./NavBar";

function Banner({ name }) {
  return (
    <BannerStyled>
      <NavBar name={name} />
      <div className="overlay"></div>
      <h3 className="Brand">Tshoms-Movie</h3>
      <p className="p-title">Enjoy your movie !</p>

      <div className="icon-space">
        <BsFillArrowDownCircleFill className="logo" />
      </div>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 715px;
  width: 100%;
  background-image: url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg");
  /* border: 1px solid red; */

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
  }

  .Brand {
    font-family: "Lilita One", cursive;
    font-size: 70px;
    color: #1ce783;
    z-index: 1;
  }

  .p-title {
    font-family: "Caveat", cursive;
    color: #1ce783;
    font-size: 40px;
    z-index: 1;
  }

  .icon-space {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 65px;
    margin-top: 50px;
    z-index: 1;
    /* border: 1px solid #1ce783; */

    .logo {
      font-size: 55px;
      color: #1ce783;
    }
  }

  /* ---- media Querie ---- */

  @media (max-width: 600px) {
    .Brand {
      font-size: 55px;
    }
  }

  @media (max-width: 430px) {
    .Brand {
      font-size: 40px;
    }
  }

  @media (max-width: 400px) {
  }
`;

export default Banner;
