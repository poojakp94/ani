import React, {useContext} from "react";
import styled from "styled-components";
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';
import {MovieContext} from "../../../MovieData/MovieContext"
import Herosection from "../../HeroSection/HeroSection"

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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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

function Movies() {
    const items = [
    { id: 1, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/totoro.jpg?alt=media&token=be01bfc6-28c9-47b6-9272-b8746e9f5995" },
    { id: 2, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/the-girl-who-leapt-through-time.jpg?alt=media&token=612d2726-c7c2-4b90-ba71-07073d4d321d" },
    { id: 3, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/spirited-away.jpg?alt=media&token=1670cb6b-c64a-43df-bb7d-c5d8a6cbf99f" },
    { id: 4, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/your-name.jpg?alt=media&token=d96e31c5-a593-43b8-aff9-4841df104c2c" },
    { id: 5, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/doukyusei.jpg?alt=media&token=ad32230f-d0fb-4205-8d46-3f9add58702b" },
    { id: 6, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/a-silent-voice.jpg?alt=media&token=c6a3db49-44b4-42f6-9ea5-8bd8d0538679" },
    { id: 7, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/Twittering-Birds-Never-Fly.jpg?alt=media&token=c7ad5107-a206-40dd-aca9-722743fa0319" },
    { id: 8, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/grave.jpg?alt=media&token=3e65948f-6472-46bb-b802-f2635b72d49d" }
    ]
const data = useContext(MovieContext);
  return (
      <>
      <Herosection items={items}/>
      <Wrapper>
              <Container>
                      <Heading>Movies</Heading>
                      <ImgWrapper>
                            {(data).map((item) => (
                                  <StyledLink key={item.title} to={`movies/description/${item.mal_id}`} style={{flex: "1 1 240px"}}>  
                                        <ImgCard
                                              src={item.image_url}
                                              title={item.title}
                                              description={item.synopsis}
                                              date={item.airing_start}
                                              score={item.score}
                                        />
                                  </StyledLink>
                            ))}
                      </ImgWrapper>
                      
              </Container>
      </Wrapper>
      </>
  );
}

export default Movies;
