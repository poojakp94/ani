import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import useWindowSize from "../WindowSize/windowSize";
import styled from "styled-components";
import ImgCard from "../ImgCard/ImgCard";
import "./section.css";

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
  margin: 50px 0px;
`;
const Heading = styled.div`
  font-size: 2rem;
  font-family: "Lobster", cursive;
  margin-left: 50px;
  @media (max-width: 768px) {
    margin-left: 110px;
  }
  @media (max-width: 415px) {
    margin-left: 80px;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  gap: 50px;
  // justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 768px) {
    gap: 80px;
  }
  // @media (max-width: 415px) {
  //   // margin-left: 80px;
  // }
`;
const Button = styled.button`
  width: 20px;
  height: 50px;
  align-self: center;
  font-size: 2rem;
  color: #333;
  background: #fff;
  outline: none;
  border: 1px solid #333;
  transition: transform;
  &:hover {
    transform: scale(1.5);
  }
`;
const Article = styled.section`
  display: flex;
  // gap: 20px;
  justify-content: space-between;
`;

function Section({ title, data }) {
  const [itemToDisplay, setItemToDisplay] = useState(5);
  const [inProp, setInProp] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(itemToDisplay);

  let windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize >= 300 && windowSize <768) {
      setItemToDisplay(1);
      setStartIndex(0);
      setStopIndex(1);
    } else if (windowSize >= 768 && windowSize <= 800) {
      setItemToDisplay(2);
      setStartIndex(0);
      setStopIndex(2);
    } else {
      setItemToDisplay(5);
      setStartIndex(0);
      setStopIndex(5);
    }
  }, [windowSize]);

  const handleIncrement = () => {
    if (
      stopIndex >= itemToDisplay &&
      stopIndex <= data.length - itemToDisplay
    ) {
      let startIndex = stopIndex;
      let finalIndex = stopIndex + itemToDisplay;
      setInProp(true);
      setStartIndex(startIndex);
      setStopIndex(finalIndex);
    }
  };
  const handleDecrement = () => {
    if (stopIndex >= itemToDisplay * 2) {
      let startIndex = stopIndex - itemToDisplay * 2;
      let finalIndex = stopIndex - itemToDisplay;
      setStartIndex(startIndex);
      setStopIndex(finalIndex);
      setInProp(true);
    }
  };
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Article>
        {stopIndex > itemToDisplay ? (
          <Button onClick={handleDecrement}>
            <i className="fas fa-angle-left"></i>
          </Button>
        ) : (
          <Button onClick={handleDecrement}></Button>
        )}
        <Transition in={inProp} timeout={500}>
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
        </Transition>
        <Button onClick={handleIncrement}>
          <i className="fas fa-angle-right"></i>
        </Button>
      </Article>
      {/* <Heading>TvShows</Heading> */}
    </Wrapper>
  );
}

export default Section;
