import { useState, useEffect } from "react";

import './App.css';

function App() {

  const [city,setCity] = useState("Bangalore");
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");


  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d4707888caelcef35d3b4069b3862d3`)
      console.log(response.data);
    }
    loadData();
  }, [city])


  return (
  <>
  <div className='heading col-md-12 mt-5'>
    <h2 className='mt-4'>WHEATHER API</h2>
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
      <h1>City: {city}</h1>
    </div>

  </div>

  
  </>
  )
}

export default App;
