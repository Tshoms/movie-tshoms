import React from "react";
import styled from "styled-components";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

function Card({ id, title, category, likes, dislikes, onclick }) {
  return (
    <CardStyled id={id}>
      <div className="title-space">
        <p>{title}</p>
      </div>

      <div className="category-space">
        <p className="p-category">category : {category}</p>
      </div>
      <div className="like-div">
        <div className="dislike-space">
          <BiSolidDislike className="svg-dislike" />
          <p>{dislikes}</p>
        </div>
        <div className="like-space">
          <BiSolidLike className="svg-like" />
          <p>{likes}</p>
        </div>
      </div>
      <div className="delete">
        <TiDelete className="icon-delete" onClick={onclick} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 350px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(28, 231, 131, 0.25);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;

  .title-space {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;

    p {
      font-size: 30px;
    }
  }
  .category-space {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
    background-color: #1ce783;

    .p-category {
      color: black;
    }
  }
  .like-div {
    display: flex;
    flex-direction: row;
    height: 30%;
    width: 100%;

    .dislike-space {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50%;
      background-color: black;
      border-bottom-left-radius: 10px;
      border: 1px solid #1ce783;

      .svg-dislike {
        color: red;
        font-size: 25px;
        margin-right: 5px;
      }
    }
    .like-space {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50%;
      background-color: black;
      border-bottom-right-radius: 10px;
      border: 1px solid #1ce783;

      .svg-like {
        color: #1ce783;
        font-size: 25px;
        margin-right: 5px;
      }
    }
  }
  .delete {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 35px;
    width: 60px;
    /* border: 1px solid red; */
    top: 0;

    .icon-delete {
      color: red;
      font-size: 40px;
      cursor: pointer;
    }
  }
  /* ---- media Querie ---- */

  @media (max-width: 440px) {
    width: 300px;
    margin-left: 25px;
  }

  @media (max-width: 377px) {
    width: 270px;
    margin-left: 40px;
  }

  @media (max-width: 340px) {
    width: 260px;
    margin-left: 45px;
  }
`;

export default Card;
