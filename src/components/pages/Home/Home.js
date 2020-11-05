import React, { useContext } from "react";
import Section from "../../HomeSection/Section";
import { MovieContext } from "../../../MovieData/MovieContext";
import {TvShowsContext} from "../../../TvShowsData/TvShowsContext"

function Home() {
  const movieData = useContext(MovieContext);
  const TvShowsData = useContext(TvShowsContext);
  
  return (
    <div style={{ marginBottom: "125px" }}>
      <Section title="Movies" data={movieData} to="/Movies" />
      <Section title="TvShows" data={TvShowsData} to="/TvShows" />
    </div>
  );
}

export default Home;
