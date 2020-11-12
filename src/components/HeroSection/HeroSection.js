import React, { useRef } from "react";
import styled from "styled-components";
import "./HeroSection.css"
import Carousel from "react-elastic-carousel";

const ImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: inherit;
  background-size: cover;
  @media (max-width: 768px) {
    height: inherit;
  }
`;
function HeroSection({items}) {
  
  const delayTime = 5000;
  const carouselRef = useRef(0);
  return (
    <Carousel
      className="addon-style"
      enableAutoPlay
      autoPlaySpeed={delayTime}
      itemsToShow={1}
      ref={carouselRef}
      onChange={(pageIndex) => {
        if (pageIndex.index === 7) {
          setTimeout(function () {
            if(carouselRef.current){
            carouselRef.current.goTo(0)};
          }, delayTime);
        }
      }}
    >
      {items.map((item) => (
        <ImgWrapper key={item.id}>
          <Img src={item.img} alt="img1" />
        </ImgWrapper>
      ))}
    </Carousel>
  );
}

export default HeroSection;
