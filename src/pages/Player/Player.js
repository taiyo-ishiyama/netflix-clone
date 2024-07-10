import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_API_KEY', // Replace with your actual API key
    },
  };

  useEffect(() => {
    console.log("Fetching video data for movie ID:", id);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        console.log("Fetched video data:", response.results[0]);
        setApiData(response.results[0]);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <Container>
      <img src="/assets/back_arrow_icon.png" alt="" onClick={() => navigate(-1)} />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <PlayerInfo>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </PlayerInfo>
    </Container>
  );
}


export default Player

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    cursor: pointer;
  }

  iframe {
    border-radius: 10px;
  }
`

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
`