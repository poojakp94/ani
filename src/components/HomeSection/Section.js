import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgCard from '../ImgCard/ImgCard';
import useWindowSize from '../WindowSize/windowSize';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  position: relative;
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
  gap: 20px;
  margin-top: 10px;
`;
const Heading = styled.p`
  font-size: 2rem;
  font-family: 'Lobster', cursive;
`;
const Button = styled.button`
  position: absolute;
  left: 0px;
  width: 25px;
  height: 100px;
  align-self: center;
  font-size: 2rem;
  color: #fff;
  background: none;
  outline: none;
  border: none;
  transition: transform;
  &:hover {
    transform: scale(1.1, 1.2);
    background: rgba(0, 0, 0, 0.2);
  }
`;
const ButtonRight = styled(Button)`
  left: calc(100% - 20px);
`;

const Section = ({ title, data }) => {
  const [itemToDisplay, setItemToDisplay] = useState(6);
  const [startIndex, setStartIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(itemToDisplay);

  let windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize >= 300 && windowSize < 768) {
      setItemToDisplay(2);
      setStartIndex(0);
      setStopIndex(2);
    } else if (windowSize >= 768 && windowSize <= 800) {
      setItemToDisplay(3);
      setStartIndex(0);
      setStopIndex(3);
    } else {
      setItemToDisplay(6);
      setStartIndex(0);
      setStopIndex(6);
    }
  }, [windowSize]);
  const handleRightClick = () => {
    if (stopIndex >= itemToDisplay && stopIndex <= data.length - itemToDisplay) {
      let startIndex = stopIndex - 1;
      let finalIndex = stopIndex - 1 + itemToDisplay;
      // setInProp(true);
      setStartIndex(startIndex);
      setStopIndex(finalIndex);
    }
  };
  const handleLeftClick = () => {
    if (stopIndex >= itemToDisplay * 2 - 1) {
      let startIndex = stopIndex - (itemToDisplay * 2 - 1);
      let finalIndex = stopIndex - itemToDisplay + 1;
      setStartIndex(startIndex);
      setStopIndex(finalIndex);
      // setInProp(true);
    }
  };

  return (
    <Wrapper>
      {stopIndex > itemToDisplay ? (
        <Button onClick={handleLeftClick}>
          <i className="fas fa-angle-left"></i>
        </Button>
      ) : (
        <Button />
      )}
      <Box>
        <Heading>{title}</Heading>
        <ImgWrapper>
          {data.slice(startIndex, stopIndex).map((item) => (
            <div key={item.title}>
              <ImgCard
                src={item.img}
                title={item.title}
                description={item.description}
                date={item.release_date}
              />
            </div>
          ))}
        </ImgWrapper>
      </Box>
      {stopIndex >= itemToDisplay && stopIndex <= data.length - itemToDisplay ? (
        <ButtonRight onClick={handleRightClick}>
          <i className="fas fa-angle-right"></i>
        </ButtonRight>
      ) : (
        <ButtonRight />
      )}
    </Wrapper>
  );
};

export default Section;
