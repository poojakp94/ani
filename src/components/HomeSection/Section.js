import React, {useContext} from 'react';
import styled from 'styled-components';
import HomeImgCard from '../HomeImgCard/HomeImgCard';
// import useWindowSize from '../WindowSize/windowSize';
import {Link } from "react-router-dom";
import {MovieContext} from "../../MovieData/MovieContext"

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: center; 
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
//   border: none;
//   transition: transform;
//   &:hover {
//     transform: scale(1.1, 1.2);
//     background: rgba(0, 0, 0, 0.2);
//   }
// `;
// const ButtonRight = styled(Button)`
//   left: calc(100% - 20px);
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
  

const Section = ({title, data, to}) => {
  const movieData = useContext(MovieContext);
  // console.log(data)
  // const [itemToDisplay, setItemToDisplay] = useState(6);
  // const [startIndex, setStartIndex] = useState(0);
  // const [stopIndex, setStopIndex] = useState(itemToDisplay);

  // let windowSize = useWindowSize();
  // useEffect(() => {
  //   if (windowSize >= 300 && windowSize < 768) {
  //     setItemToDisplay(2);
  //     setStartIndex(0);
  //     setStopIndex(2);
  //   } else if (windowSize >= 768 && windowSize <= 800) {
  //     setItemToDisplay(3);
  //     setStartIndex(0);
  //     setStopIndex(3);
  //   } else {
  //     setItemToDisplay(6);
  //     setStartIndex(0);
  //     setStopIndex(6);
  //   }
  // }, [windowSize]);
  // const handleRightClick = () => {
  //   if (stopIndex >= itemToDisplay && stopIndex <= data.length - itemToDisplay) {
  //     let startIndex = stopIndex - 1;
  //     let finalIndex = stopIndex - 1 + itemToDisplay;
  //     // setInProp(true);
  //     setStartIndex(startIndex);
  //     setStopIndex(finalIndex);
  //   }
  // };
  // const handleLeftClick = () => {
  //   if (stopIndex >= itemToDisplay * 2 - 1) {
  //     let startIndex = stopIndex - (itemToDisplay * 2 - 1);
  //     let finalIndex = stopIndex - itemToDisplay + 1;
  //     setStartIndex(startIndex);
  //     setStopIndex(finalIndex);
  //     // setInProp(true);
  //   }
  // };

  return (    
    <Wrapper>
      {/* {stopIndex > itemToDisplay ? (
        <Button onClick={handleLeftClick}>
          <i className="fas fa-angle-left"></i>
        </Button>
      ) : (
        <Button />
      )} */}
      <Box> 
        <div style={{display:"flex", alignItems: "center"}}>
      <Heading>{title} </Heading>
      <SeeMoreLink to={to}>See more</SeeMoreLink>
      </div>
        <ImgWrapper>
          {((data || movieData).slice(0, 5)).map((item) => (
            <StyledLink to="/description" key={item.title}>
              <HomeImgCard
                src={item.img}
                title={item.title}
                description={item.description}
                date={item.release_date}
                score={item.score}
              />
            </StyledLink>
          ))}
        </ImgWrapper>
      </Box>
      {/* {stopIndex >= itemToDisplay && stopIndex <= data.length - itemToDisplay ? (
        <ButtonRight onClick={handleRightClick}>
          <i className="fas fa-angle-right"></i>
        </ButtonRight>
      ) : (
        <ButtonRight />
      )} */}
    </Wrapper>
  );
};

export default Section;
