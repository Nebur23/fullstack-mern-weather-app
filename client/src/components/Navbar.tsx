import * as React from 'react';
import { Link } from 'react-router-dom';


interface INavbarProps {
  setUnits: React.Dispatch<React.SetStateAction<string>>
  units:string
  setFahrenheit:React.Dispatch<React.SetStateAction<boolean>>
  fahrenheit:boolean
}


const Navbar: React.FunctionComponent<INavbarProps> = ({setUnits,units,setFahrenheit,fahrenheit}) => {
 

 const  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     const selectedunits =  e.currentTarget.name
       if(units != selectedunits) setUnits(selectedunits)
  }

  const handleclickCel = () => { if(fahrenheit) setFahrenheit(false)}
  const handleclickFah = () => { if(!fahrenheit) setFahrenheit(true)}
  
  return (
    <div className='ml-[30%] flex min-h-fit mt-7'>
        <div className='flex gap-4 items-center justify-center'>
            <a href="#">Today</a>
            <a href="#" className='border-black border-b-2'>Week</a>
        </div>
        <div className='flex gap-2 justify-end items-center w-[83%]'>
            <button
            name='metric'
             className="h-8 w-8 p-2 rounded-full bg-black text-white flex items-center justify-center hover:scale-110" onClick={(e) => {
              handleClick(e)
              handleclickCel()
              }}>°C</button>
            <button  
            name='imperial'
            className="h-8 w-8 p-2 rounded-full bg-white text-black flex items-center justify-center hover:scale-110"  onClick={(e) => {
              handleClick(e)
              handleclickFah()
            }}>°F</button>
            <img 
            className="h-[55px] w-[55px] p-2 rounded-full"
            src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwcGVvcGxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" 
            alt="" />

            <Link to="/login"><button className='bg-white p-2 rounded-md text-sm hover:bg-black hover:text-white'>Login</button> </Link>
          
        </div>
    </div>
  );
};

export default Navbar;
