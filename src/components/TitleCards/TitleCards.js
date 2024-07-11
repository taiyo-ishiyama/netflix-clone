import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODM1NGRmMmMxYTBkZjViZjZmNTk2NjZhY2M3NTc3YyIsIm5iZiI6MTcyMDQ5MTM0Mi4xNDQwMzMsInN1YiI6IjY2OGM5Y2FiZWNmNDVkNzhmYjllYTM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9WoQEpFbKE63BRyMzWcxsPX-z_m-ysjU3ANp8mA1W0Q",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <Container>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <CardList ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} key={index}>
              <Card key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt=''
                />
                <p>{card.original_title}</p>
              </Card>
            </Link>
          );
        })}
      </CardList>
    </Container>
  );
}

export default TitleCards;

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;

  h2 {
    margin-bottom: 8px;
    text-align: left;

    @media (max-width: 800px) {
      font-size: 20px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
  @media (max-width: 800px) {
    margin-top: 20px;
    margin-bottom: 0;
  }
`

const CardList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

  img {
    width: 240px;
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 800px) {
    width: 200px;
    }
    @media (max-width: 500px) {
    width: 165px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }

`

const Card = styled.div`
  position: relative;

  p {
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-decoration: none;
    color: #fff;

    @media (max-width: 800px) {
    font-size: 12px;
    }
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
`
