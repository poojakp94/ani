import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Movies from "./components/pages/Movies/Movies";
import TvShows from "./components/pages/TvShows/TvShows"
import Description from './components/pages/DescriptionCard/Description'
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import { MovieContext, data } from "./MovieData/MovieContext";
import {TvShowsContext}  from "./TvShowsData/TvShowsContext"

function App() {
  const [tvShowsData, setTvShowsData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch('https://jikan1.p.rapidapi.com/genre/anime/1/2', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_API_K}`,
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTvShowsData(data.anime)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=> { setLoading(false)});
  }, []);

  return (
    <div className="app"> 
    <Router>
      <Navbar/>
      {isLoading ? <div style={{color: "#333"}}>is Loading....</div> : 
      <MovieContext.Provider value={data}>
      <TvShowsContext.Provider value={tvShowsData}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/tvshows" exact component={TvShows} />
                <Route path="/movies/description/:id" component={Description} exact/>
                <Route path="/tvshows/description/:id" component={Description} exact/>
                <Route component={PageNotFound} />
              </Switch>
      </TvShowsContext.Provider>
      </MovieContext.Provider>
    }
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
