import React, { useState } from "react";
import "./Weather.css"
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [city, setCity] = useState(null);
  const [description, setDescription] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description)
    setCity(response.data.name);
    setReady(true);

  };

  if (ready) {
    return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
            />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
        <h1>{city}</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li className="text-capitalize">{description}</li>
      </ul>
      <div className="row mt-3">
       <div className="col-6">
         <div className="clearfix">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Mostly Cloudy" className="clearfix"/>
             <span className="temperature">{temperature}</span>
             <span className="unit">°C</span>
         </div>
        </div>
        <div className="col-6 info">
          <ul>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} km/h</li>
          </ul>
        </div>
      </div>
    </div> 
    );
  } else {const apiKey = "094780c710fa4efd669f0df8c3991927";
  let city = "New York"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  
    return "Loading.."
  }
 
};
