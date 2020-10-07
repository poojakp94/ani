import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  // border: 1px solid red;
`
const Heading = styled.div`
  font-size: 2rem;
  font-family: 'Lobster', cursive;
  // border: 1px solid red;
`
const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem 1rem;
  justify-items: center;
  margin-top: 10px;
  // border: 1px solid pink;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 411px) {
    grid-template-columns: 1fr;
    
  }
`;

const DescriptionCard = styled.div`
  color: #fff;
  // background: #242424;
  // padding: 20px 10px 10px;
`;
const Img = styled.img`
  height: 300px;
  width: 240px;
  // display: block;
  // margin: 0 auto;
  // width: inherit;
  // margin: 0 auto;
`;

function TvShows() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jikan1.p.rapidapi.com/producer/1/1", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "jikan1.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.REACT_APP_R_API}`,
    },
  })
    .then((response) => {
      // setData(response.anime);
      // console.log(response);
      return response.json();
    })
    .then((data) => setData(data.anime))
    .catch((err) => {
      console.log(err);
    });
    
  }, [])

  
  return (
    <Wrapper>
      <Heading>TvShows</Heading>
      <ImgWrapper>
        {data.map((item) => (
          <DescriptionCard key={item.title}>
            <Img src={item.image_url} alt={item.alt} />
            {/* <br />
            <p>
              Title:{item.title}
            </p>
            <br />
            <p>
              Description: {item.synopsis}
            </p>
            <br />
            <p>
              Episodes: {item.episodes}
            </p>
            <br /> */}
            
          </DescriptionCard>
        ))}
      </ImgWrapper>
      <Heading>Other Movies</Heading>
    </Wrapper>
    // <div>
    //   {data.map((item) => (
    //     <div key={item.title}>
    //       <img src={item.image_url} alt="img" />
    //       <p>{item.title}</p>
    //       <p>{item.synopsis}</p>
    //       <p>{item.episodes}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default TvShows;
