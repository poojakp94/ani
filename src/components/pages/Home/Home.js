import React, { useContext } from "react";
import Section from "../../HomeSection/Section";
import { MovieContext } from "../../../MovieData/MovieContext";
import {TvShowsContext} from "../../../TvShowsData/TvShowsContext"
import {CONTENT_TYPE} from "../../../utils/constant";
import HeroSection from "../../HeroSection/HeroSection";
import img1 from "../../../assets/carousel/banana-fish.jpg";
import img2 from "../../../assets/carousel/doukyusei.jpg";
import img3 from "../../../assets/carousel/haikyuu.jpg";
import img4 from "../../../assets/carousel/wolf-children.jpg";
import img5 from "../../../assets/carousel/bungo.jpg";
import img6 from "../../../assets/carousel/a-silent-voice.jpg";
import img7 from "../../../assets/carousel/yuri-on-ice.jpg";
import img8 from "../../../assets/carousel/Twittering-Birds-Never-Fly.jpg"
function Home() {
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
  const movieData = useContext(MovieContext);
  const TvShowsData = useContext(TvShowsContext);
  
  return (
    <div style={{ marginBottom: "125px", flex:1 }}>
      <HeroSection items={items}/>
      <Section type={CONTENT_TYPE.MOVIES} data={movieData} />
      <Section type={CONTENT_TYPE.TVSHOWS} data={TvShowsData} />
    </div>
  );
}

export default Home;
