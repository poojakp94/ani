import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  height: 300px;
  width: 240px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }
`;
const Img = styled.img`
  height: inherit;
  width: 100%;
`;
const DescriptionWrapper = styled.div`
  height: 180px;
  width: 240px;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 20px 10px;
  margin-top: -12px;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  height: 20px;
  overflow: hidden;
  letter-spacing: 1px;
`;
const Description = styled.p`
  font-size: 0.8rem;
  height: 50px;
  overflow: hidden;
  margin: 10px 0;
`;
const SubContent = styled.div`
  color: gray;
  margin: 3px 0;
`;
// const Episodes = styled.p`
//   font-size: 0.9rem;
//   color: grey;
//   margin-top: 6px;
// `;
function HomeImgCard({ src, title, description, episodes, score, date }) {
  const [isCardHovered, setHoverCard] = useState(false);
  return (
    <Card
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      {isCardHovered ? (
        <>
          <Img src={src} alt="img"></Img>
          <DescriptionWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <SubContent>
              <p>{new Date(date).getFullYear()}</p>
            </SubContent>
            <SubContent><span role="img" aria-label="star">⭐</span>{score}</SubContent>
            {/* <Episodes>{episodes}</Episodes> */}
          </DescriptionWrapper>
        </>
      ) : (
        <Img src={src} alt="img"></Img>
      )}
    </Card>
  );
}

export default HomeImgCard;