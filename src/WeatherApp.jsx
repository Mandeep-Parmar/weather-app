import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <div style={{ marginTop: "20px", color: "gray" }}>
          <h3>No Data Yet</h3>
          <p>Search for a city to see weather details 🌤️</p>
        </div>
      )}
    </div>
  );
}
