import * as React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import icon1 from '../assets/icons/03d.png';
import icon2 from '../assets/icons/04d.png'
import icon3 from '../assets/icons/50d.png'
import '../App.css'
interface ISidebarProps {
    
}



const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  return (
    <div className='fixed  pt-11 bg-white w-[25%] min-h-full mt-23'>
        {/* Search bar */}
      <div className='flex justify-center'>
                
                <AiOutlineSearch />
                
                <input type="search" 
                placeholder='Search for places...' 
                className=' px-2 text-sm outline-none border-none '/>
      </div>
        {/* weather display */}
      <div className='mt-5 flex flex-col items-center'>
            <img src={icon1} alt="" className='w-[190px]' />
            <h1 className='text-5xl pt-3 pb-4 '>12°c</h1>
            <small className='border-b-2 border-black-100 pb-7 
             text-center w-[80%]'>Monday,16:00</small>
      </div>
      {/* details */}
      <div >
        <div className='flex justify-center my-5 w-[60%] gap-2 '>
            <img src={icon2} alt="" className='w-6 h-6'/>
            <small>Mostly Clouy</small>
        </div>
        <div className='flex justify-center w-[60%] gap-2 mb-6'>
            <img src={icon3} alt="" className='w-6 h-6'/>
            <small>windy- 30%</small>
        </div>
       
       <div className='w-[80%] h-28  mx-auto rounded-xl before:rounded-xl space-y-2 relative bg-center bg-no-repeat bg-cover details' 
        >
            <p className='text-center relative flex justify-center items-center h-full text-white font-semibold'>Douala,Cameroon</p>
        </div>
      
      </div>
    </div>
  )
};

export default Sidebar;
