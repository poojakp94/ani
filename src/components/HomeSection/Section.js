import React from 'react';
import styled from 'styled-components';
import HomeImgCard from '../HomeImgCard/HomeImgCard';
// import useWindowSize from '../WindowSize/windowSize';
import {Link } from "react-router-dom";
import {CONTENT_TYPE} from "../../utils/constant"


const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  /* flex-direction: column; */
`;
const Box = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* transform: ${props => props.scrollDiv ? `translateX(-100%)` : `translateX(100%)`}; */
  display: flex;
  gap: 20px;
  @media (max-width: 768px){
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;
const Heading = styled.p`
  font-size: 2rem;
  font-family: 'Lobster', cursive;
  margin-right: 10px;
  &::first-letter{
    text-transform: capitalize;
  }
`;
// const Button = styled.button`
//   position: absolute;
//   left: 0px;
//   width: 25px;
//   height: 100px;
//   align-self: center;
//   font-size: 2rem;
//   color: #fff;
//   background: none;
//   outline: none;
//   border: 1px solid red;
//   transition: transform;
//   &:hover {
//     transform: scale(1.1, 1.2);
//     background: rgba(0, 0, 0, 0.2);
//   }
// `;
// const ButtonRight = styled(Button)`
  // left: calc(100% - 20px);
// `;

const StyledLink = styled(Link)`
  text-decoration: none;
`
const SeeMoreLink = styled(Link)`
  color: #6FDFF7;
  text-decoration:none;
  &:hover {
    color: #3692B5;
  }
  `
  

const Section = ({type, data}) => {
  // const [scrollImgwrapper, setScroll] =useState(null);
  
  // const handleRightClick = () => {
  //  setScroll(true)
  // };
  // const handleLeftClick = () => {
  //   setScroll(false)
  // };

  return (    
    <Wrapper>
      {/* <Button onClick={handleLeftClick}> <i className="fas fa-angle-left"></i></Button> */}
      <Box> 
      
        <div style={{display:"flex", alignItems: "center"}}>
      <Heading>{type} </Heading>
      <SeeMoreLink to={type === CONTENT_TYPE.MOVIES ? "/movies" : "/tvShows" }>See more</SeeMoreLink>
      </div>
      <div style={{width: "100%"}}>
        <ImgWrapper>
          {data.map((item) => (
            <StyledLink to={type === CONTENT_TYPE.MOVIES ? `/movies/description/${item.mal_id}` : `/tvshows/description/${item.mal_id}`} key={item.title}>
              <HomeImgCard
                src={item.image_url}
                title={item.title}
                description={item.synopsis}
                date={item.airing_start}
                score={item.score}
              />
            </StyledLink>
          ))} 
        </ImgWrapper>
        </div>
      </Box>
      
        {/* <ButtonRight onClick={handleRightClick}><i className="fas fa-angle-right"></i></ButtonRight> */}
    </Wrapper>
  );
};

export default Section;
