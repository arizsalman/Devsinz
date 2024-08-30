
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstTask from './Firebase_auth/First Task';
import SecondTask from './Firebase_auth/Second Task'
import ThirdTask from './Firebase_auth/Third Task';
import FourthTask from './Firebase_auth/Fourth Task';
import Login from './Firebase_auth/login'
import './App.css'
import Sigin from './Firebase_auth/Sigin';
import Hero from './components/Hero';
import Header from './components/header';



function App() {


  return (
    <div>

    

      <BrowserRouter>
      
      <Header/>
    {/* <Hero/>  */}
        <Routes>
          

          <Route path='/firstTask' element={<FirstTask />} />
          <Route path='/secondTask' element={<SecondTask />} />
          <Route path='/thirdTask' element={<ThirdTask />} />
          <Route path='/fourthTask' element={<FourthTask />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sigin' element={<Sigin/>} />
          <Route path='/hero' element={<Hero/>} />
          
        </Routes>
      </BrowserRouter>





    </div>


  )
}

export default App;

