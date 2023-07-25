import { DateObjectUnits } from 'luxon';
import * as React from 'react';
import { IForecastWeatherType } from '../api/services';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar';
import WeekUI from '../components/WeekForecast';
import DaliyUI from '../components/DailyForecast';

interface IHomeProps {
    weather: {
        time: string;
        visibility: number;
        description: string;
        all: number;
        name: string;
        country: string;
        timezone: DateObjectUnits;
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
    } | null
    setWeather?: React.Dispatch<React.SetStateAction<{
        time: string;
        visibility: number;
        description: string;
        all: number;
        name: string;
        country: string;
        timezone: DateObjectUnits;
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
    } | null>>
    forecast : IForecastWeatherType | null;
    setForecast :  React.Dispatch<React.SetStateAction<IForecastWeatherType | null>>
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    units: string
    setUnits: React.Dispatch<React.SetStateAction<string>>
    fahrenheit:boolean
    setFahrenheit: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FunctionComponent<IHomeProps> = ({weather,setQuery,fahrenheit,setFahrenheit,units,setUnits,forecast}) => {
  return (
    <>
        { weather && <>
        <Sidebar weather={weather} setQuery={setQuery}  fahrenheit={fahrenheit} />
        <Navbar  setUnits={setUnits} units={units}  fahrenheit={fahrenheit} setFahrenheit={setFahrenheit}  />
      <WeekUI  forecast={forecast} />
      <DaliyUI weather={weather} fahrenheit={fahrenheit} />
      

      </>
      }
    </>
  );
};

export default Home;
