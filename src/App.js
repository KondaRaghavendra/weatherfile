import React, { useState } from 'react';
import './App.css'
const App = () => {
  const api = {
    key: "e0040343b5483ece851009f70beb3fca",
    base: "https://api.openweathermap.org/data/2.5/weather",
  }

  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function locSearch() {
    const url = `${api.base}?q=${search}&appid=${api.key}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeatherData(data); // Now we're using setWeatherData to store the fetched data
      })
      .catch(error => console.error("Fetching error:", error));
  }

  return (
    <div className='Container'>
      <h1>Weather APP</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      placeholder='Enter the City Name'/>
      <br />
      <button onClick={locSearch}>Search</button>
      {weatherData && (
        <div>
          {/* Example: Displaying the name and main temperature */}
          <h3>Weather for  {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp} k</p>
        </div>
      )}
    </div>
  );
};

export default App;


