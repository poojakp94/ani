import React, {useEffect, useState} from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 470px);
    gap:10px;
    padding: 50px;
    &:hover {
        transition: all 0.3s ease-out;
    }
`

const DescriptionCard = styled.div`
    color:#fff;
    background: #242424;
    height: 320px;
    width: 470px; 
    border-radius: 10px;
    padding: 10px;
    // display:flex;
    // gap:2px;
`

function Movies() {
    const [studioGhibliFilmData, setStudioGhibliFilmData] = useState([])
    
    useEffect(() => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => (setStudioGhibliFilmData(data)))
    .catch((error) => console.log(error))
    }, []);
  
  return (
    <Wrapper>
      {studioGhibliFilmData.map((item) => (
        <DescriptionCard>
          <p><b>Title:</b> {item.title}</p>
          <br/>
          <p><b>Description:</b> {item.description}</p>
          <br/>
          <p><b>Director:</b> {item.director}</p>
          <br/>
          <p><b>Release Date:</b> {item.release_date}</p>
          
        </DescriptionCard>
      ))}
    </Wrapper>
  );
}

export default Movies;
