import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";

function App() { 
  return (
  <div className="app" style={{backgroundImage: `url(${coldBg})`}}>
    <div className="overlay">
      <div className="container">
        <div className="section.section__inputs">
          <input type="text" name="city" placeholder="Enter City..." />
          <button>°F</button>
        </div>

        <div className="section.secstion__temperature">
          <div className="icon">
            <h3>London, GB</h3>
            <img 
            src="https://openweathermap.org/img/wn/02d02x.png" 
            alt="weatherIcon" 
          />
          <h3>Cloudy</h3>
        </div>
        <div className="temperature">
          <h1> 34 °C</h1>
        </div>
      </div>

        {/* bottom description will go here */}
      </div>
    </div>
  </div>
  );
}

export default App;
