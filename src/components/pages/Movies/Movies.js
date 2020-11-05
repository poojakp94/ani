import React, {useContext} from "react";
import styled from "styled-components";
import ImgCard from "../../ImgCard/ImgCard";
import { Link } from 'react-router-dom';
import {MovieContext} from "../../../MovieData/MovieContext"

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
 const StyledLink = styled(Link)`
 text-decoration: none;
`

function Movies() {
const data = useContext(MovieContext);
  return (
      <Wrapper>
              <Container>
                      <Heading>Movies</Heading>
                      <ImgWrapper>
                            {(data).map((item) => (
                                  <StyledLink key={item.title} to="movies/description/:tvshowsId" style={{flex: "1 1 240px"}}>  
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
  );
}

export default Movies;
