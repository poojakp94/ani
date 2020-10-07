import React from "react";
import styled from "styled-components";
import Card from "../Card/Card.js";
import Carousel from "react-elastic-carousel";
import "./section.css";
// import img1 from "../../assets/carousel/your-name.jpg"
// import data from "../pages/Movies/data";
const SectionWrapper = styled.div`
  width: 100%;
  //   padding: 20px;
  //   border: 1px solid green;
`;
// const CardWrapper = styled.div`
//   display: grid;
//   grid-auto-flow: column;
//   grid-gap: 2rem;
//   overflow-x: scroll;

// `;
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px 0px 10px 60px;
`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];
function Section({ title, data }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Carousel
        breakPoints={breakPoints}
        className="rec rec-arrow style-example"
      >
        {data.map((item) => (
          <>
            <Card img={item.img} alt={item.alt}></Card>
          </>
        ))}
      </Carousel>
    </SectionWrapper>
  );
}

export default Section;
