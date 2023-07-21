import * as React from 'react';
import icon from '../assets/icons/01d.png'

interface IWeekUIProps {
}

const WeekUI: React.FunctionComponent<IWeekUIProps> = (props) => {
  return (
    <div className='ml-[30%] flex gap-2  w-[66%] mt-5'>
        <div className='flex flex-col items-center justify-center py-3 shrink-0 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
        <div className='flex flex-col items-center justify-center py-3 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
        <div className='flex flex-col items-center justify-center py-3 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
        <div className='flex flex-col items-center justify-center py-3 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
        <div className='flex flex-col items-center justify-center py-3 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
        <div className='flex flex-col items-center justify-center py-3 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
        <div className='flex flex-col items-center justify-center py-3 rounded-md w-[10%] h-[10%] bg-white'>
            <small>Sun</small>
            <img src={icon} alt="" className='w-12 h-12' />
            <small>15°-3°</small>
        </div>
    </div>
  );
};

export default WeekUI;
