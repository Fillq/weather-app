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
      <div className={(searchResult && searchResult.current ? (searchResult.current.is_day ? bgVariations[0] : bgVariations[1]) : bgVariations[0])}>
        <div className="absolute bottom-3 left-3">
          <Switch/>
        </div>
        <main className="flex flex-col items-center flex-grow">
          <Router>
              <Routes>
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
