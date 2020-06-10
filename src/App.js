import React,{Component,useState} from 'react';

import './App.css';
const api={

key:"de01193e6e6c36e23186913382839a54",
base:"https://api.openweathermap.org/data/2.5/"


}
function App(){
  const [query,setQuery]=useState('');
  const[weather,setWeather] = useState({})
  const search=(evt)=>{
if(evt.key=="Enter"){
fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
.then(res=>res.json())
.then(result=>{
  setQuery('')
  setWeather(result)
  console.log(weather)
})


}


  }


const date=(e)=>{
let months=["January","February","March","April","May","June","July","August",
"September","October","November","December"];
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day=days[e.getDay()];
let date=e.getDate();
let month=months[e.getMonth()];
let year=e.getFullYear();
return `${day} ${date} ${month} ${year}`


} 




  
  
  return (
    <div className="app">
      <h1>Weather Now </h1>
      <marquee style={{color:"red"}}>By Rabib</marquee>
<main>
<div className="search-box">
<input type="text" className="search-bar" placeholder="search by city name"

onChange={e=>setQuery(e.target.value)}
value={query}
onKeyPress={search}

/>


</div>
{(typeof weather.main !="undefined")? (
<div>
<div className="location-box">

  <div className="location">{weather.name}  {weather.sys.country}</div>
  <div className="date">{date(new Date())}</div>
</div>
<div className="weather-box">
<div className="temp">
Temparature : {weather.main.temp}°C...
Feels like: {weather.main.feels_like}°C
</div>
<div className="weather">

  {weather.weather[0].description}
</div>
</div>
</div>
):('')}
</main>

    </div>
  );
  }


export default App;
 