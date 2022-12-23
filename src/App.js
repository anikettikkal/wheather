import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [city,setCity] = useState("Bangalore");
  const [temp, setTemp] = useState(0);


  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d4707888cae1cef35d3b4069b3862d3`)
      if(response.status === 200){
        const temp =(response.data.main.temp - 273.15);
         console.log(temp);
         setTemp(temp)
      }
    }
    loadData();
  }, [city])


  return (
  <>
  <div className='heading col-md-12 mt-5'>
    <h2 className='mt-1 name'>WEATHER API</h2>
  </div>
  <div className='row mt-5'>
    <div className='col-md-6 div-search'>
      <img className='img-fluid image' src="https://thumbs.dreamstime.com/b/glossy-weather-stickers-16470720.jpg" />
      <input type="text" placeholder='Enter City Name' className='input-city'
      value={city}
      onChange={(e) => setCity(e.target.value)}
      />
    </div>

    <div className='col-md-6 display'>
      <button className="btn btn-outline-warning button mt-3" ><h3>City: {city}</h3></button> <br></br>
      <h3>Temprature: {temp}</h3>
      <img className="image-sec" src="https://cdn-icons-png.flaticon.com/512/5491/5491388.png" ></img>
    </div>
    

  </div>

  
  </>
  )
}

export default App;
