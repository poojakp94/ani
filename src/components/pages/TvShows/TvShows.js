import React, { useContext } from "react";
import styled from 'styled-components';
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';
import HeroSection from "../../HeroSection/HeroSection";
import {TvShowsContext} from "../../../TvShowsData/TvShowsContext";
import img1 from "../../../assets/carousel/bungo.jpg";
import img2 from "../../../assets/carousel/tokyo-ghoul.jpg";
import img3 from "../../../assets/carousel/yona.jpg";
import img4 from "../../../assets/carousel/bahamut.jpg";
import img5 from "../../../assets/carousel/91days.jpg";
import img6 from "../../../assets/carousel/psycho.jpg";
import img7 from "../../../assets/carousel/banana-fish.jpg";
import img8 from "../../../assets/carousel/trigun.jpg"
const Wrapper = styled.div`
  margin-bottom: 120px;
  flex:1;
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
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 }
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
