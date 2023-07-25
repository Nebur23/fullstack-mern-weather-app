import * as React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import icon2 from '../assets/icons/04d.png'
import '../App.css'
import {  formatToLocalTime, iconUrlFromeCode, location } from '../api/services';
import { DateObjectUnits } from 'luxon';
import {GrLocation} from 'react-icons/gr'
//src={`../assets/icons/${weather.icon}.png`}

interface ISidebarProps {
    weather : { 
      time: string;
      description: string;
      timezone: DateObjectUnits;
      all: number;
      name: string;
      country: string;
      dt: number;
      lat: number;
      lon: number;
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
      sunrise: number;
      sunset: number;
      speed: number;
      details: string;
      icon: string;
      visibility: number;
    },
   setQuery: React.Dispatch<React.SetStateAction<string>>;
   fahrenheit?:boolean;
}



const Sidebar: React.FunctionComponent<ISidebarProps> = ({weather,setQuery,fahrenheit}) => {
  const handleSearchClick = () => {
     if(search !== "") setQuery(search)
     setSearch("")
  }
  // change query name base on info given by location fn 
  const handleClick =  () => {
    if(navigator.geolocation){
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      navigator.geolocation.getCurrentPosition( async (position) => {
        const lat =  position.coords.latitude
        const lon = position.coords.longitude
  
            const { name } = await location(lat,lon)
          setQuery(name) 
          setSearch("")
      
      })
    }
  }
  
  const [search , setSearch] = React.useState("")
 
  console.log("value of fahrenheit in sidebar",fahrenheit);
  
  return (
    <div className='fixed  pt-11 bg-white w-[25%] min-h-full mt-23'>
        {/* Search bar */}
      <div className='flex justify-center'>
                
               <button onClick={handleSearchClick}className='hover:scale-125' ><AiOutlineSearch  /></button>
                
                <input type="search" 
                placeholder='Search for places...' 
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value) }
                className=' px-2 text-sm outline-none border-none hover:outline-black hover:mx-1 '/>
               <button  className='hover:scale-125' onClick={handleClick}> <GrLocation /></button>
      </div>
        {/* weather display */}
      <div className='mt-5 flex flex-col items-center'>
            <img src={iconUrlFromeCode(weather.icon)} alt="" className='w-[190px]' />
            <h1 className='text-5xl pt-3 pb-4 '>{weather.temp.toFixed()}°  {fahrenheit ? "F": "c"}</h1>
            <small className='border-b-2 border-black-100 pb-7 
             text-center w-[80%]'>{weather.time}day, {formatToLocalTime(weather.dt,weather.timezone,"hh:mm a")}</small>
      </div>
      {/* details */}
      <div >
        <div className='flex justify-center my-5 w-[60%] gap-2 '>
            <img src={icon2} alt="" className='w-6 h-6'/>
            <small>
             
            {weather.all > 50 && weather.all < 71? `Cloudy` :  weather.all > 70 && weather.all < 101 ?  "Mostly Cloudy" :  weather.all > 0 && weather.all < 30? "Clear" :  "Moderate" }
              </small>
        </div>
        <div className='flex justify-center w-[60%] gap-2 mb-6'>
            <img  src={`src/assets/icons/${weather.icon}.png`} alt="" className='w-6 h-6'/>
            <small>{weather?.description}</small>
        </div>
       
       <div className='w-[80%] h-28  mx-auto rounded-xl before:rounded-xl space-y-2 relative bg-center bg-no-repeat bg-cover details' 
        >
            <p className='text-center relative flex justify-center items-center h-full text-white font-semibold'>{`${weather.name},${weather.country}`}</p>
        </div>
      
      </div>
    </div>
  )
};

export default Sidebar;
