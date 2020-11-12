import React, {useContext} from "react";
import styled from "styled-components";
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';
import {MovieContext} from "../../../MovieData/MovieContext"
import Herosection from "../../HeroSection/HeroSection"
import img1 from "../../../assets/carousel/your-name.jpg";
import img2 from "../../../assets/carousel/doukyusei.jpg";
import img3 from "../../../assets/carousel/garden-of-words.jpg";
import img4 from "../../../assets/carousel/a-silent-voice.jpg";
import img5 from "../../../assets/carousel/colorfull.jpg";
import img6 from "../../../assets/carousel/arrietty.jpg";
import img7 from "../../../assets/carousel/grave.jpg";
import img8 from "../../../assets/carousel/wolf-children.jpg"
const Wrapper = styled.div`
    margin-bottom: 120px;
    flex:1;
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
 const StyledLink = styled(Link)`
 text-decoration: none;
`

function Movies() {
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
