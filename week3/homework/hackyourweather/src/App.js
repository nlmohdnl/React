import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Form from './components/Form';

function App() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiKey = '6a76947a2a926745c0643b32fd27b030';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;
  
 

  const weatherStatus = async () => {
    try {
      if (input !== '') {
        setLoading(true);
        const res = await fetch(apiUrl );

        if (res.status === 200) {
          const data = await res.json();
          setWeather((cities) => [data, ...cities]);
        } else {
          throw Error(' There is an error.');
        }
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    weatherStatus();
    e.preventDefault();
  };

  const deleteCity = (id) => {
    setWeather((cities) => {
      cities = cities.filter((item) => item.id !== id);
      return cities;
    });
  };

  const cityWeather= weather.length !== 0;

  return (
    <div className="App">
      <h1 style={{color: "pink" ,textShadow:" 0 0 3px #FF0000, 0 0 5px #0000FF"}}> Weather </h1>
      <Form input={input} setInput={setInput} onSubmit={onSubmit} />
      {isLoading && <p> Loading... </p>}
      {error && <p>  There is an error. </p>}
      {weather &&
       weather.map((city) => (
        <div key={city.id}>
          <Weather searchWeather={city}  deleteCity={deleteCity} />
        </div>
      ))}

    </div>
  );
}

export default App; 