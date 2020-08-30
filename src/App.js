import React from 'react';
import Header from './components/Header.js';
import Sidebar from "./components/Sidebar.js";
import RecommendedVideos from "./components/RecommendedVideos.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage.js";





import './App.css';


function App() {


  return (
    
      <div className="App">
        <Router>
          <Switch>
            <Route path="/search/:searchTerm">
              <Header />
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>
            <Route path="/">
              <Header />
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
             
            </Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
