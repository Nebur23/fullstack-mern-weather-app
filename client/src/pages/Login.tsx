import * as React from 'react';
import { Link } from 'react-router-dom';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return(
    <div className='min-w-full min-h-screen bg-gray-300 flex justify-center items-center'>
       <form action="" className='bg-white w-[50%] h-[50%] p-5 flex flex-col'>
        <label htmlFor="Username">Username</label>
        <input type="text" name='Username' className='w-[50%] bg-gray-50'/>
        <Link to="/sign-up">Go to sign up</Link>
       </form>
    </div>
  ) ;
};

export default Login;
