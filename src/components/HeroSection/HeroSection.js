import React, { useRef } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import img1 from "../../assets/carousel/a-silent-voice.jpg";
import img2 from "../../assets/carousel/banana-fish.jpg";
import img3 from "../../assets/carousel/haikyuu.jpg";
import img4 from "../../assets/carousel/wolf-children.jpg";
import img5 from "../../assets/carousel/a-whisker-away.jpg";
import img6 from "../../assets/carousel/kakushigoto.jpg";
import img7 from "../../assets/carousel/yuri-on-ice.jpg";
import img8 from "../../assets/carousel/my-neighbor-totoro.jpg"

const ImgWrapper = styled.div`
  width: 100%;
  heigth: 400px;
`;
const Img = styled.img`
  width: 100%;
  height: 400px;
  background-size: cover;
  // border: 1px solid black;
  @media (max-width: 411px) {
    height: inherit;
  }
`;
function HeroSection() {
  const items = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 }
  ];
  const delayTime = 5000;
  const carouselRef = useRef(0);
  return (
    <Carousel
    
      enableAutoPlay
      autoPlaySpeed={delayTime}
      itemsToShow={1}
      ref={carouselRef}
      onChange={(pageIndex) => {
        if (pageIndex.index === 7) {
          setTimeout(function () {
            carouselRef.current.goTo(0);
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
