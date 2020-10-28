import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import {MovieData} from "./data"
import {TvShowsData} from "./data";
import Section from "../../HomeSection/Section"

function Home() {
  return (
    <div style={{marginBottom: '125px'}}>
      <HeroSection></HeroSection>
      <Section title="Movies" data={MovieData}></Section>
      <Section title="TvShows" data={TvShowsData}></Section>
    </div>
  );
}

export default Home;
