import { useState, useEffect } from "react";
import Search from "./components/search/Search"
import Card from "./components/weather-card/Card"

function App() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  return (
    <>
      <div className="p-3">
        <Search searchResultHandler={setSearchResult}/>
      </div>
      <Card weatherData={searchResult}/>
      
    </>
  )
}

export default App
