import { DateObjectUnits } from 'luxon';
import * as React from 'react';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { formatToLocalTime } from '../api/services';

interface IDaliyUIProps {
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
    fahrenheit:boolean
}

const DaliyUI: React.FunctionComponent<IDaliyUIProps> = ({weather,fahrenheit}) => {
  return(
    <div className='ml-[30%] mt-12'>
        <h1>Today's Highlights</h1>
        <div className='flex gap-3 flex-wrap'>
            <div className='flex flex-col p-6 mt-4 hover:scale-110 hover:mx-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <h4  className='self-start text-center opacity-40 px-auto w-[100%]'>Min & Max </h4>
                <small className='font-medium text-2xl'>{weather.temp_max.toFixed()}°c</small>
                <small className='font-medium text-2xl'>{weather.temp_min.toFixed()}°c</small>
            </div>
            <div className='flex flex-col p-6 mt-4 hover:scale-110 hover:mx-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <h4 className='self-start text-center opacity-40 w-[100%]'>Wind Status</h4>
                <small ><span className='font-medium text-4xl'>{weather?.speed.toFixed()}</span> <span> km/H</span></small>
                <small>WSW</small>
            </div>
            <div className='flex flex-col p-6 mt-4 hover:scale-110 hover:mx-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <h4 className='self-start text-center opacity-40 w-[100%]'>Sunrise & Sunset</h4>
                <small  className='font-medium text-xl flex justify-center items-center gap-3'><FiArrowUpCircle  color="blue" fontSize="2rem" /> {formatToLocalTime(weather.sunrise,weather.timezone,"hh:mm: a")}</small>
                <small className='font-medium text-xl flex justify-center items-center gap-3'><FiArrowDownCircle color="blue" fontSize="2rem"/> {formatToLocalTime(weather.sunset,weather.timezone,"hh:mm: a")}</small>
            </div>
            <div className='flex flex-col p-6 mt-4 hover:scale-110 hover:mx-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <h4 className='self-start text-center opacity-40 w-[100%]'>Humudity</h4>
                <small className='flex'><span className='font-medium text-4xl' >{weather.humidity.toFixed()}</span><span className='text-xl'>%</span></small>
                <small> {weather.humidity > 30  && weather.humidity < 51? "Normal" : weather.humidity > 51 ? "High" : "Low"} </small>
            </div>
            <div className='flex flex-col p-6 mt-4 hover:scale-110 hover:mx-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <h4 className='self-start text-center opacity-40 w-[100%]'>Vsibility</h4>
                <small ><span className='font-medium text-4xl'>{(weather?.visibility/1000).toFixed()}</span> <span> km/H</span></small>
                <small>Average</small>
            </div>
            <div className='flex flex-col p-6 mt-4 hover:scale-110 hover:mx-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <h4 className='self-start text-center opacity-40 w-[100%]'>Feels Like</h4>
                <small className='font-medium text-4xl'> {weather.feels_like.toFixed()}°{ fahrenheit? "F":"c" }</small>
                <small>{weather.feels_like > 35.6 && weather.feels_like < 37.4 ? "Normal" : weather.feels_like >= 37.4 ? "High": "Low"}</small>
            </div>
            
        </div>
    </div>
  ) ;
};

export default DaliyUI;
