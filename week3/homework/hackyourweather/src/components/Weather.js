import React from "react";

function Weather({searchWeather, deleteCity }) {

  if (searchWeather.cod === 200) {
    const {
      id,
      name,
      sys: { country },
      weather,
      main: { temp_min, temp_max },
      coord: { lon, lat },
    } = searchWeather;

    const { main, description } = weather[0]

    return (
      <div >

        <div >
          <h1> {name}, {country} </h1>
          <button  onClick={() => deleteCity(id)}> x </button>
        </div>

        <div >
            <h2> {main} </h2>
            <p> {description} </p>
        </div>

        <div >
            <p> min temp: {temp_min} </p>
            <p> max temp: {temp_max} </p>
            <p> location: {lon}, {lat} </p>
        </div>
      </div>
    );

  } else {
    return <p> enter a valid city name </p>;

  }

}
export default Weather;