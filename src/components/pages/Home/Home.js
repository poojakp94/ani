import React, { useContext } from "react";
import Section from "../../HomeSection/Section";
import { MovieContext } from "../../../MovieData/MovieContext";
import {TvShowsContext} from "../../../TvShowsData/TvShowsContext"
import {CONTENT_TYPE} from "../../../utils/constant";
import HeroSection from "../../HeroSection/HeroSection";

import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 125px;
  flex: 1;

  @media(max-width: 768px) {
    margin-bottom: 20px;
  }
`

function Home() {
  const items = [
    { id: 1, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/doukyusei.jpg?alt=media&token=ad32230f-d0fb-4205-8d46-3f9add58702b" },
    { id: 2, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/bungo.jpg?alt=media&token=cf556fe3-af7e-468e-8711-ec85807cb3e2" },
    { id: 3, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/Twittering-Birds-Never-Fly.jpg?alt=media&token=c7ad5107-a206-40dd-aca9-722743fa0319" },
    { id: 4, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/banana-fish.jpg?alt=media&token=d3fbd567-0402-4ad8-a5a4-b86d95f18def" },
    { id: 5, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/bahamut.jpg?alt=media&token=ea87ab10-357a-4e99-979c-2c8219ce488c" },
    { id: 6, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/totoro.jpg?alt=media&token=be01bfc6-28c9-47b6-9272-b8746e9f5995" },
    { id: 7, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/91days.jpg?alt=media&token=8a399ab8-43f3-4ee4-bead-7a54451bb4e8" },
    { id: 8, img: "https://firebasestorage.googleapis.com/v0/b/photo-storage-9945c.appspot.com/o/wolf-children.jpg?alt=media&token=bfadab2b-9508-44ef-8690-0b8255d18291" }
  ];
  const movieData = useContext(MovieContext);
  const TvShowsData = useContext(TvShowsContext);
  
  return (
    <Container>
      <HeroSection items={items}/>
      <Section type={CONTENT_TYPE.MOVIES} data={movieData} />
      <Section type={CONTENT_TYPE.TVSHOWS} data={TvShowsData} />
    </Container>
  );
}

export default Home;
