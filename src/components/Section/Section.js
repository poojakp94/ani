import React, { useState } from "react";
import styled from "styled-components";
// import "./section.css";
import ShocaseImg from "../Img&description/ShocaseImg";

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
  margin: 50px 0px;
`;
const Heading = styled.div`
  font-size: 2rem;
  font-family: "Lobster", cursive;
  margin-left: 30px;
`;
const ImgWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 768px) {
    // grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 411px) {
    // grid-template-columns: 1fr;
  }
`;
const Button = styled.button`
  width: 20px;
  color: #333;
  background: #fff;
  outline: none;
  border: 1px solid #fff;
`;

function Section({ title, data }) {
  let NumOfDisplayItem = 5;
  let newData = data.slice(0, NumOfDisplayItem);
  const [dataToRender, setData] = useState(newData);
  const [NumOfData, setNumOfData] = useState(NumOfDisplayItem);

  const handleIncrement = () => {
    if (
      NumOfData >= NumOfDisplayItem &&
      NumOfData <= data.length - NumOfDisplayItem
    ) {
      let initialIndex = NumOfData;
      let finalIndex = NumOfData + NumOfDisplayItem;
      let newArray = data.slice(initialIndex, finalIndex);
      console.log(initialIndex, finalIndex);
      setNumOfData(finalIndex);
      setData(newArray);
    }
  };
  const handleDecrement = () => {
    if (NumOfData >= NumOfDisplayItem * 2) {
      let initialIndex = NumOfData - NumOfDisplayItem * 2;
      let finalIndex = NumOfData - NumOfDisplayItem;
      console.log(initialIndex, finalIndex);
      let newArray = data.slice(initialIndex, finalIndex);
      setNumOfData(finalIndex);
      setData(newArray);
    }
  };
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <ImgWrapper>
        <Button onClick={handleDecrement}>-</Button>
        {dataToRender.map((item) => (
          <div key={item.title}>
            <ShocaseImg
              src={item.img}
              title={item.title}
              description={item.description}
              date={item.release_date}
            />
          </div>
        ))}
        <Button onClick={handleIncrement}>+</Button>
      </ImgWrapper>
      {/* <Heading>TvShows</Heading> */}
    </Wrapper>
  );
}

export default Section;
