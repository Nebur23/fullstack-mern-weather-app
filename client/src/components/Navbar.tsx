import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className='ml-[30%] flex min-h-fit mt-7'>
        <div className='flex gap-4 items-center justify-center'>
            <a href="#">Today</a>
            <a href="#" className='border-black border-b-2'>Week</a>
        </div>
        <div className='flex gap-2 justify-end items-center w-[83%]'>
            <div className="h-8 w-8 p-2 rounded-full bg-black text-white flex items-center justify-center">°C</div>
            <div className="h-8 w-8 p-2 rounded-full bg-white text-black flex items-center justify-center">°F</div>
            <img 
            className="h-[55px] w-[55px] p-2 rounded-full"
            src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwcGVvcGxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" 
            alt="" />
          
        </div>
    </div>
  );
};

export default Navbar;
