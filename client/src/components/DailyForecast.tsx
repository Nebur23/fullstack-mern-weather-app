import * as React from 'react';

interface IDaliyUIProps {
}

const DaliyUI: React.FunctionComponent<IDaliyUIProps> = (props) => {
  return(
    <div className='ml-[30%] mt-12'>
        <h1>Today's Highlights</h1>
        <div className='flex gap-3 flex-wrap'>
            <div className='flex flex-col p-6 mt-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <small>Wind Status</small>
                <small>7.70km/H</small>
                <small>WSW</small>
            </div>
            <div className='flex flex-col p-6 mt-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <small>Wind Status</small>
                <small>7.70km/H</small>
                <small>WSW</small>
            </div>
            <div className='flex flex-col p-6 mt-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <small>Wind Status</small>
                <small>7.70km/H</small>
                <small>WSW</small>
            </div>
            <div className='flex flex-col p-6 mt-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <small>Wind Status</small>
                <small>7.70km/H</small>
                <small>WSW</small>
            </div>
            <div className='flex flex-col p-6 mt-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <small>Wind Status</small>
                <small>7.70km/H</small>
                <small>WSW</small>
            </div>
            <div className='flex flex-col p-6 mt-4 justify-center items-center gap-4 bg-white w-[30%]'>
                <small>Wind Status</small>
                <small>7.70km/H</small>
                <small>WSW</small>
            </div>
            
        </div>
    </div>
  ) ;
};

export default DaliyUI;
