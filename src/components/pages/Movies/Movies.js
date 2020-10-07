import React from "react";
import styled from "styled-components";
import data from "./data";

const Wrapper = styled.div`
  padding: 10px;
`
const Heading = styled.div`
  font-size: 2rem;
  font-family: 'Lobster', cursive;
`
const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin-top: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 411px) {
    grid-template-columns: 1fr;
    
  }
`;

const DescriptionCard = styled.div`
  color: #fff;
  background: #242424;
  padding: 20px 10px 10px;
`;
const Img = styled.img`
  height: 400px;
  display: block;
  margin: 0 auto;
  // width: inherit;
  // margin: 0 auto;
`;
function Movies() {
  return (
    <Wrapper>
      <Heading>Studio Ghibli Films</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <DescriptionCard key={item.title}>
            <Img src={item.img} alt={item.alt} />
            <br />
            <p>
              <b>Title:</b> {item.title}
            </p>
            <br />
            <p>
              <b>Description:</b> {item.description}
            </p>
            <br />
            <p>
              <b>Director:</b> {item.director}
            </p>
            <br />
            <p>
              <b>Release Date:</b> {item.release_date}
            </p>
          </DescriptionCard>
        ))}
      </ImgWrapper>
      <Heading>Other Movies</Heading>
    </Wrapper>
  );
}

export default Movies;
