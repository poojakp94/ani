import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Movies from "./components/pages/Movies/Movies";
import TvShows from "./components/pages/TvShows/TvShows"
import Description from './components/pages/DescriptionCard/Description'
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import HeroSection from "./components/HeroSection/HeroSection";
function App() {
  
  // document.addEventListener("touchstart", function(){}, true);
  return (
    <Router>
      <Navbar/>
      <HeroSection />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/tvshows" exact component={TvShows}/>
        <Route path="/description" component={Description}/>
        <Route component={PageNotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
