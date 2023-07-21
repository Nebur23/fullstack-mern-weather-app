
import './App.css'
import { formattedCurrentWeather } from './api/services'

import DaliyUI from './components/DailyForecast'
import Navbar from './components/Navbar'
import WeekUI from './components/WeekForecast'
import Sidebar from './components/sidebar'

function App() {
  
 void formattedCurrentWeather("douala")
 
 
  return(
    <div className='fixed  min-h-screen min-w-full bg-blue-50'>
      <Sidebar />
      <Navbar />
      <WeekUI />
      <DaliyUI />
   
    </div>
  )
}


export default App

