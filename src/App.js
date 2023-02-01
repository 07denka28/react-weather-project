import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Matt Delac and is 
          <a
            href="https://github.com/07denka28/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          > open-sourced on GitHub
          </a> and
          <a
            href="https://brilliant-bombolone-a42676.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          > hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}