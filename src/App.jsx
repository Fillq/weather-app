import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorPage from "./components/404-page/ErrorPage";
import Search from "./components/search/Search";
import Card from "./components/weather-card/Card";
import Switch from "./features/unitSwitch/Switch";

function App() {
  const [searchResult, setSearchResult] = useState({current: {is_day: true}, location: {}, forecast: {}});
  const bgVariations = [
    "w-screen min-h-screen flex flex-row flex-nowrap bg-gradient-to-b from-gradient-top-day to-gradient-bottom-day",
    "w-screen min-h-screen flex flex-row flex-nowrap bg-gradient-to-b from-gradient-top-night to-gradient-bottom-night",
  ];

  return (
    <>
      <div className="transition-all duration-300 fixed top-3 left-3 md:top-14/15 z-10 w-fit">
        <Switch/>
      </div>
      <div className={(searchResult && searchResult.current ? (searchResult.current.is_day ? bgVariations[0] : bgVariations[1]) : bgVariations[0])}>
        
        <main className="flex flex-col items-center flex-grow">
          <Router>
              <Routes>
                <Route path="/weather-app" element={
                  <>
                    <div className="p-3">
                      <Search searchResultHandler={setSearchResult}/>
                    </div>
                    <Card weatherData={searchResult}/>
                  </>
                } />
                <Route path="/" element={
                  <>
                    <div className="p-3">
                      <Search searchResultHandler={setSearchResult}/>
                    </div>
                    <Card weatherData={searchResult}/>
                  </>
                } />
                <Route path="/*" element={<ErrorPage/>} />
              </Routes>
            </Router>
        </main>
      </div>
    </>
  )
}

export default App
