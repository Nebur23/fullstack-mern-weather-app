
import { useEffect, useState } from 'react'
import './App.css'
import formattedCurrentWeather, {  IForecastWeatherType, forecastWeather, location} from './api/services'
import { DateObjectUnits } from 'luxon'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/sign-up'


function App() {
  const [query , setQuery] = useState("douala")
  const [units , setUnits] = useState("metric")
  const [fahrenheit, setFahrenheit] = useState(false)
  const [forecast, setForecast] = useState<IForecastWeatherType | null >(null);
  const [weather , setWeather] = useState<{ time: string; visibility: number; description :string; all:number;name: string; country: string;timezone: DateObjectUnits; dt: number; lat: number; lon: number; temp: number; feels_like: number; temp_min: number; temp_max: number; humidity: number; sunrise: number; sunset: number; speed: number; details: string; icon: string; }| null>(null)

  
 useEffect(() => {
   window.addEventListener("load", () => {
     if(navigator.geolocation){
       // eslint-disable-next-line @typescript-eslint/no-misused-promises
       navigator.geolocation.getCurrentPosition( async (position) => {
         const lat =  position.coords.latitude
         const lon = position.coords.longitude
             const { name } = await location(lat,lon)
           setQuery(name) 
      
       })
     }
   })
 })


useEffect(() =>  {
  setFahrenheit(fahrenheit)
},
 [fahrenheit])


useEffect(() => {
  const fetchWeather = async () => {
    const data = await formattedCurrentWeather(query,units);
  setWeather(data)
  }

 void fetchWeather();
 
 
}, [query,units ])

useEffect(() => {
  const forecast = async () => {
    const data = await forecastWeather(query)
    setForecast(data)
  }
  void forecast()
})

 
  return(
    
    <main className='fixed  min-h-screen min-w-full bg-blue-50'>  
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home weather={weather} setWeather={setWeather}  setQuery={setQuery} query={query} setFahrenheit={setFahrenheit} fahrenheit={fahrenheit} setForecast={setForecast} forecast={forecast} setUnits={setUnits} units={units}  />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='*' element={<h1>Page not found</h1>} />
    </Routes>
   </BrowserRouter>
    </main>
  )
}


export default App

