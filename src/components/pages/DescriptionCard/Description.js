import React, {useContext} from "react";
import styled from "styled-components";
import {useParams, useLocation} from "react-router-dom";
import {MovieContext} from "../../../MovieData/MovieContext"
import {TvShowsContext} from "../../../TvShowsData/TvShowsContext"
import { useState } from "react";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  flex: 1;
  @media (max-width: 415px) {
    flex-direction: column;
  }
`;
const Img = styled.img`
  height: 400px;
  width: auto;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.p`
  font-size: 1.2rem;
`;

const SubContent = styled.p`
  font-size: 1rem;
`;


function Description() {
  const [isItemFound, setItemFound] = useState(true);
  let {id} = useParams();
  const location = useLocation();
  // console.log(TvShowsContext)
  const data = useContext( ((location.pathname).includes("movies")) ? MovieContext : TvShowsContext);
  // console.log(id);
  
   let found = data.find(item => Number(item.mal_id) === Number(id));
  //  console.log(found)
    if(!found){ setItemFound(false)}
  
  // console.log(isItemFound)
  return (
    <Wrapper>
      {isItemFound ? <>
      <Img src={found.image_url} alt="img"></Img>
      <ContentWrapper>
        <Title>Title: {found.title}</Title>
        <p>Synopsis</p><hr />
        <p>{found.synopsis}</p>
        <SubContent>Episodes: {found.episodes}</SubContent>
        <SubContent>Aired: {new Date(found.airing_start).getFullYear()}</SubContent>
        <SubContent>Rating: {found.score}</SubContent>
        <SubContent>Type: {found.type}</SubContent>
      </ContentWrapper></> : 
      <p> item is not available</p>
      }
    </Wrapper>
  );
}

export default Description;
