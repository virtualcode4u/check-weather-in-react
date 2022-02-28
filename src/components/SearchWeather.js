import React,{useState} from 'react';
import axios from 'axios';
import '../App.css';
import ShowWeather from './ShowWeather';

const SearchWeather = () => {
    const [city,setCity] = useState('');
    const [data,setData] = useState({
        description: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: 0,
    });

    const onSubmit = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d6d774f637babda668b4b6df7f40657`)
        .then((res)=>{
            setData({
                description: res.data.weather[0].description,
                temp: res.data.main.temp,
                temp_max: res.data.main.temp_max,
                temp_min: res.data.main.temp_min,
                humidity: res.data.main.humidity,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset,
                country: res.data.sys.country,
            })
        });
    }

  return (
      <>
        <div className='container text-center my-2'>
            <h1 className='searchWeather'>Search Weather using React JS</h1> 
            <input type="text" className='form-control' placeholder='Enter you area name' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
            <button className='btn btn-success mx-2' type='submit' onClick={onSubmit}>Get Weather</button>
            <button className='btn btn-danger'>Reset</button>
        </div>
        <ShowWeather text={data}/>
      </>
  )
}

export default SearchWeather