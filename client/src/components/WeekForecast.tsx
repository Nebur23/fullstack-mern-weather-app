import * as React from 'react';
import { IForecastWeatherType, iconUrlFromeCode } from '../api/services';

interface IWeekUIProps {
    forecast : IForecastWeatherType | null
}

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

 
const WeekUI: React.FunctionComponent<IWeekUIProps> = ({forecast}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
        <div className='ml-[30%] flex gap-2  w-[80%]  mt-5'>
            {forecast?.list.splice(0,7).map((item,idx) => (
                <div className='flex flex-col items-center justify-center py-3 shrink-0 rounded-md w-[10%] h-[10%] bg-white' key={idx}>
                        <small>{forecastDays[idx]} </small>
                        <img src={iconUrlFromeCode(item.weather[0].icon)} alt="img" className='w-12 h-12' />
                       <small>{item.main.temp_max.toFixed()}°-{item.main.temp_min.toFixed()}°</small>
                     </div>
            ))}
        </div>
    </>
  
  );
};

export default WeekUI;
