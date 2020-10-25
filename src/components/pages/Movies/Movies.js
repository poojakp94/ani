import React from "react";
import styled from "styled-components";
import data from "./data";
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';

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
  gap: 15px;
  justify-items: center;
  margin-top: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 415px) {
    grid-template-columns: 1fr;
  }
`;

function Movies() {
  return (
    <Wrapper>
      <Heading>Studio Ghibli Films</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <Link key={item.title} to="/description">
            <ImgCard
              src={item.img}
              title={item.title}
              description={item.description}
              date={item.release_date}
            />
          </Link>
        ))}
      </ImgWrapper>
      <Heading>Other Movies</Heading>
    </Wrapper>
  );
}

export default Movies;
