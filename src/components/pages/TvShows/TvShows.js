import React, { useContext } from "react";
import styled from 'styled-components';
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';
import HeroSection from "../../HeroSection/HeroSection";
import {TvShowsContext} from "../../../TvShowsData/TvShowsContext";

const Wrapper = styled.div`
  margin-bottom: 120px;
  flex:1;
  @media(max-width: 768px) {
    margin-bottom: 20px;
  }
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
 const StyledLink = styled(Link)`
 text-decoration: none;
`

function TvShows() {
  const items = [
    { id: 1, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/gate2.jpg?alt=media&token=321b3d25-86c1-4829-a845-d133df0d1e87" },
    { id: 2, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/bungo.jpg?alt=media&token=cf556fe3-af7e-468e-8711-ec85807cb3e2" },
    { id: 3, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/yona.jpg?alt=media&token=2381ca4d-6e8c-44a2-addc-d17402cd58b6" },
    { id: 4, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/gangsta.jpg?alt=media&token=0cbdf017-5681-4331-bbdd-178016b26d5c" },
    { id: 5, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/strike-the-blood.jpg?alt=media&token=3c1abaa9-d45a-4a37-a615-e0d191237a05" },
    { id: 6, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/psycho.jpg?alt=media&token=b24ab4df-4a6b-4ae2-9e76-488420d153d0" },
    { id: 7, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/trigun.jpg?alt=media&token=e841227c-0608-42e9-a4fd-f2f989e467e6" },
    { id: 8, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/banana-fish.jpg?alt=media&token=d3fbd567-0402-4ad8-a5a4-b86d95f18def" }
    ]
  const data = useContext(TvShowsContext);
  return (
    <>
    <HeroSection items={items}/>
    <Wrapper>
      <Container>
      <Heading>TvShows</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <StyledLink key={item.mal_id} to={`tvshows/description/${item.mal_id}`} style={{flex: "1 1 240px"}}>
            <ImgCard
              src={item.image_url}
              title={item.title}
              description={item.synopsis}
              // episodes={item.episodes}
              score={item.score}
              date={item.airing_start}
            />
          </StyledLink>
        ))}
      </ImgWrapper>
      </Container>
    </Wrapper>
    </>
  );
}

export default TvShows;
