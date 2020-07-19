import React from 'react';
import './App.css';
import { GlobalState } from "./context/GlobalState";

import WeatherSection from "./components/WeatherSection";
import SearchComponent from "./components/Search";

function App() {

  return (
      <GlobalState>
        <SearchComponent/>
        <WeatherSection/>
      </GlobalState>
  );
}

export default App;
