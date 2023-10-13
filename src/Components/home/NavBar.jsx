import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import PrimaryButton from "../../reusable-ui/PrimeryButton.jsx";
import { useNavigate } from "react-router-dom";

function NavBar({ name }) {
  // state --------------
  const navigate = useNavigate();
  // comportement ---------
  const handleLogOut = (e) => {
    e.preventDefault();
    alert("log-out !!!");
    navigate({
      pathname: "/",
    });
  };
  return (
    <NavBarStyled>
      <div className="left-space">
        <h3 className="Brand">Particeep-Movie</h3>
      </div>
      <div className="right-space">
        <div className="user-space">
          <div className="user-info">
            <p className="name">{name} :</p>
          </div>
          <div className="logo-user">
            <FaUserCircle className="icon" />
          </div>
          <div className="log-out">
            <PrimaryButton label="log-out" onClick={handleLogOut} />
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: fixed;

  .left-space {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 50%;
    /* border: 1px solid black; */

    .Brand {
      font-family: "Lilita One", cursive;
      color: #1ce783;
      font-size: 23px;
      margin-top: 25px;
      margin-left: 15px;
    }
  }

  .right-space {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    width: 50%;
    /* border: 1px solid black; */
    .user-space {
      display: flex;
      flex-direction: row;
      height: 60px;
      width: 200px;
      /* border: 1px solid black; */
      margin-top: 10px;
      margin-right: 15px;

      .user-info {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 70%;
        /* border: 1px solid black; */

        .name {
          font-family: "Lilita One", cursive;
          color: #1ce783;
          font-size: 20px;
        }
      }

      .logo-user {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 30%;
        /* border: 1px solid black; */

        .icon {
          color: #1ce783;
          font-size: 35px;
          cursor: pointer;
        }
      }

      .log-out {
        height: 75%;
        width: 130px;
        margin-top: 7px;
        margin-left: 10px;
      }
    }
  }

  /* ---- media Querie ---- */
  @media (max-width: 414px) {
    .left-space {
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .right-space {
      display: none;
    }
  }

  @media (max-width: 375px) {
    .left-space {
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .right-space {
      display: none;
    }
  }

  @media (max-width: 365px) {
    .left-space {
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .right-space {
      display: none;
    }
  }

  @media (max-width: 350px) {
    .left-space {
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .right-space {
      display: none;
    }
  }
`;

export default NavBar;
