import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';
import HeroSection from "../../HeroSection/HeroSection";

const Wrapper = styled.div`
  margin-bottom: 150px;
`;
const Heading = styled.div`
  font-size: 2rem;
  font-family: "Lobster", cursive;
`;
const ImgWrapper = styled.div`
  display: flex;
    flex-flow: row wrap;
    gap: 10px;
    margin: 20px 0;
    
`;

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
      padding: 30px;
     display: flex;
     flex-direction: column;
 `;

function TvShows() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jikan1.p.rapidapi.com/producer/1/1', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_API_K}`,
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data.anime))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <HeroSection></HeroSection>
      <Container>
      <Heading>TvShows</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <Link key={item.mal_id} style={{flex: "1 1 240px"}}>
            <ImgCard
              src={item.image_url}
              title={item.title}
              description={item.synopsis}
              episodes={item.episodes}
              score={item.score}
              date={item.airing_start}
            />
          </Link>
        ))}
      </ImgWrapper>
      </Container>
    </Wrapper>
  );
}

export default TvShows;
