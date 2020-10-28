import React from "react";
import styled from "styled-components";
import data from "./data";
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
width: 100%;
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

function Movies() {
  return (
        <Wrapper>
              <HeroSection></HeroSection>
              <Container>
                      <Heading>Studio Ghibli Films</Heading>
                      <ImgWrapper>
                            {data.map((item) => (
                                  <Link key={item.title} to="/description" style={{flex: "1 1 240px"}}>
                                        <ImgCard
                                              src={item.img}
                                              title={item.title}
                                              description={item.description}
                                              date={item.release_date}
                                        />
                                  </Link>
                            ))}
                      </ImgWrapper>
              </Container>
              <Heading>Other Movies</Heading>
        </Wrapper>
  );
}

export default Movies;
