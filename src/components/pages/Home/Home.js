import React from "react";
import {TvShowsData} from "./data";
import Section from "../../HomeSection/Section"
import { MovieProvider} from "../../../MovieData/MovieContext"



function Home() {
  return (
    <div style={{marginBottom: '125px'}}>
      <MovieProvider>
      <Section />
      </MovieProvider>
      <Section title="TvShows" data={TvShowsData} to="/TvShows">
      </Section>
    </div>
  );
}

export default Home;
