import "./App.css";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { Dimmer, Loader } from "semantic-ui-react";

const APIKey = process.env.REACT_APP_API_KEY;
const weatherAPIURl = process.env.REACT_APP_API_URL;

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [weatherAPIData, setWeatherAPIData] = useState([]);

  async function getWeather() {
    if (latitude && longitude) {
      await fetch(
        `${weatherAPIURl}/weather/?lat=${longitude}&lon=${longitude}&units=metric&APPID=${APIKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherAPIData(result);
          console.log(result);
        });
    }
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    console.log("Latitude is:", latitude);
    console.log("Longitude is:", longitude);
    getWeather();
  }, [latitude, longitude]);

  return (
    <div className="App">
      {typeof weatherAPIData.main != "undefined" ? (
        <Weather weatherData={weatherAPIData} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default App;
