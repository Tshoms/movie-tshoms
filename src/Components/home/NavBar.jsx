import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getFilter, getMoviesState } from "../../redux/createSlice";
import { movies$ } from "../../data/movies";
import store from "../../redux/store";

function NavBar({ name }) {
  // state --------
  const [searchValue, setSearchValue] = useState("");
  console.log("valeur de searchValue :", searchValue);
  const dispatch = useDispatch();
  dispatch(getFilter(searchValue));
  // comportement -------
  useEffect(() => {
    const handleMoviesFilter = () => {
      movies$.then((movies) => {
        console.log("Liste des films dans Nav :", movies);
        store.dispatch(getMoviesState(movies));
      });
    };
    handleMoviesFilter();
  }, []);

  return (
    <NavBarStyled>
      <div className="left-space">
        <h3 className="Brand">Particeep-Movie</h3>
        <div className="search">
          <select onChange={(e) => setSearchValue(e.target.value)}>
            <option value="nothing">catégory</option>
            <option value="Thriller">Thriller</option>
            <option value="Drame">Drame</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
      </div>
      <div className="right-space">
        <div className="user-space">
          <div className="user-info">
            <p className="name">{name} :</p>
          </div>
          <div className="logo-user">
            <FaUserCircle className="icon" />
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
      width: 150px;
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
