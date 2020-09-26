import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Movies from "./components/pages/Movies/Movies";
import TvShows from "./components/pages/TvShows/TvShows"

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={TvShows}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
