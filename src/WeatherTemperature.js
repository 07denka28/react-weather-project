import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius")

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit")
  }

  function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
    <span className="weatherTemperature">
      <span className="temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="unit">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
    </span>
    );
  } else {
    return (
      <span className="weatherTemperature">
      <span className="temperature">
        {Math.round(props.fahrenheit)}
      </span>
      <span className="unit"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
    </span>
    );
  
  }
  

}