import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import Section from "../../Section/Section";
import {MovieData} from "./data"
import {TvShowsData} from "./data"
function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Section title="Movies" data={MovieData}></Section>
      <Section title="TvShows" data={TvShowsData}></Section>
      {/* <Section title="Comming soon.."></Section> */}
      
      
    </>
  );
}

export default Home;
