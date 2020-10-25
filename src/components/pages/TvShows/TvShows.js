import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Overlay from "../../Overlay/overlay";
import ImgCard from "../../ImgCard/ImgCard";

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 200px;
`;
const Heading = styled.div`
  font-size: 2rem;
  font-family: "Lobster", cursive;
`;
const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem 1rem;
  justify-items: center;
  margin-top: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 415px) {
    grid-template-columns: 1fr;
  }
`;

function TvShows() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jikan1.p.rapidapi.com/producer/1/1", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_API_K}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data.anime) )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Heading>TvShows</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <div key={item.mal_id}>
            <ImgCard
              src={item.image_url}
              title={item.title}
              description={item.synopsis}
              episodes={item.episodes}
              score={item.score}
              date={item.airing_start}
            />
          </div>
        ))}
      </ImgWrapper>
      <Heading>Other Movies</Heading>
    </Wrapper>
  );
}

export default TvShows;
