import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Details from "./components/Details";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherMapData";

function App() {
  const [bg, setBg] = useState(hotBg);
  const [city, setCity] = useState("Los Angeles");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
 

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      // creating a dymamic background is not easy!
      const threshold = units === "metric" ? 10 : 50;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              {/* <button onClick={(e) => handleUnitsClick(e)}>°F</button> */}
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>

            {/* bottom*/}
            <Details weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;