import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { movies$ } from "../../data/movies";
import Card from "../../reusable-ui/Card";
import {
  getMoviesFilter,
  getMoviesState,
  removeMovie,
} from "../../redux/createSlice";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  // state -----------
  const moviesArray = useSelector((state) => state.moviesItems.moviesItems);
  const dispatch = useDispatch();

  // searchValue  ------------
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // pagination ----------
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4; // NB items/movies par page.
  const lastIndex = currentPage * recordsPerPage; // obtenir le dernier index par page afin de le multiplier par 4.
  const firstIndex = lastIndex - recordsPerPage; // obtenir le premier index par page afin de le soustraire par 4.
  const records = moviesArray.slice(firstIndex, lastIndex);
  const npage = Math.ceil(moviesArray.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // comportements ------------
  useEffect(() => {
    const getMovies = () => {
      movies$.then((movies) => {
        dispatch(getMoviesState(movies));
        dispatch(getMoviesFilter(searchValue));
      });
    };
    getMovies();
  }, [searchValue]);

  // pagination algo ----------
  const prePage = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  // ----------------------
  const handleDelete = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <MainStyled>
      <h3>Movies</h3>
      <div className="search">
        <select onChange={handleChange}>
          <option value="nothing">catégory</option>
          <option value="Thriller">Thriller</option>
          <option value="Drame">Drame</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div>
      <div className="array-movie">
        {records.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            title={item.title}
            category={item.category}
            likes={item.likes}
            dislikes={item.dislikes}
            onclick={() => handleDelete(item.id)}
          />
        ))}
      </div>
      <>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((item, i) => (
            <li
              className={`page-item ${currentPage === item ? "active" : ""}`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCPage(item)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
  width: 100%;

  h3 {
    font-family: "Caveat", cursive;
    color: #1ce783;
    font-size: 40px;
    margin-bottom: 20px;
  }

  .array-movie {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px); /* pixel - row */
    grid-gap: 30px; /* espace entre les items*/
    justify-content: center;
    align-items: center;
    height: auto;
    max-width: 800px; /* largeur max */
    width: 80%;
    margin: 30px auto;

    p {
      color: white;
    }
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 250px;

    .page-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50px;
      border: 1px solid #1ce783;
    }

    a {
      color: #1ce783;
    }

    .active {
      background-color: #1ce783;
      a {
        color: black;
      }
    }
  }

  /* ---- media Querie ---- */
  @media (max-width: 440px) {
    .array-movie {
    }
  }

  @media (max-width: 912px) {
    height: 1150px;
  }
`;

export default Main;
