import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from "./components/search/Search";
import Card from "./components/weather-card/Card";
import Switch from "./features/unitSwitch/Switch";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  return (
    <>
      <div className="w-screen flex flex-row flex-nowrap">
        <div className="flex flex-col justify-around items-center h-screen w-1/4 bg-gray-800 p-4">
          <Switch/>
        </div>
        <main className="flex flex-col flex-grow">
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
                <Route path="/card" element={<Card weatherData={searchResult} unit={'C'}/>} />
              </Routes>
            </Router>
        </main>
      </div>
    </>
  )
}

export default App
