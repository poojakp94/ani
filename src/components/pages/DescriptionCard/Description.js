import React from "react";
import styled from "styled-components";
import data from "../Movies/data";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    // flex-direction: column;
  }
  @media (max-width: 411px) {
    flex-direction: column;
  }
`;
const Img = styled.img`
  height: 500px;
  justify-self: right;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;
const Title = styled.p`
  font-size: 1.2rem;
`;
const Synopsis = styled.p`
  font-size: 1rem;
`;
const Director = styled.p`
  font-size: 1rem;
`;
const Episodes = styled.p`
  font-size: 1rem;
`;
function Description() {
  
  return (
    <Wrapper>
      <Img src={data[0].img} alt="img"></Img>
      <ContentWrapper>
        <Title>{data[0].title}</Title>
        <Synopsis>{data[0].description}</Synopsis>
        <Director>{data[0].director}</Director>
        <Episodes>{data[0].release_date}</Episodes>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Description;
