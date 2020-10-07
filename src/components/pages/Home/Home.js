import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import Section from "../../Section/Section";
import data from "../Movies/data"
function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Section title="Movies" data={data}></Section>
      <Section title="TvShows" data={data}></Section>
      {/* <Section title="Comming soon.."></Section> */}
      
    </>
  );
}

export default Home;
