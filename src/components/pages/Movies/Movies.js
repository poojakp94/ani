import React from "react";
import styled from "styled-components";
import data from "./data";
import ShocaseImg from "../../Img&description/ShocaseImg";

const Wrapper = styled.div`
  padding: 20px;
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
  @media (max-width: 411px) {
    grid-template-columns: 1fr;
  }
`;

function Movies() {
  return (
    <Wrapper>
      <Heading>Studio Ghibli Films</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <div key={item.title}>
            <ShocaseImg
              src={item.img}
              title={item.title}
              description={item.description}
              date={item.release_date}
            />
          </div>
        ))}
      </ImgWrapper>
      <Heading>Other Movies</Heading>
    </Wrapper>
  );
}

export default Movies;
