import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="appContainer">
      <h1 className="title">Weather App 🌦️</h1>
      <SearchBox updateInfo={updateInfo} />

      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <div className="noData">
          <h3>No Data Yet</h3>
          <p>Search for a city to see weather details 🌤️</p>
        </div>
      )}
    </div>
  );
}
