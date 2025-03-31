import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Banner from './Banner'
import Login2 from './Login2'
import Footer from './Footer'
import Dishesdetail from './Dishesdetail'
import Register from './Register'
import Basicinfo from './Basicinfo'
import Home from './Home'
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Body from './Body'


function App() {

  return (
    // <>
    // <Login/> 
    // <Banner/> 
    // <Login2/>
    // <Footer/>
    // <Dishesdetail/>
    // <Register/>
    // <Basicinfo/>
    // <Home/>
    // </>
  //   <>
  //  <Router className="">
  //   <div className="flex flex-col min-h-screen">
  //   <Login/>
  //   <main className="flex-grow p-4">
  //    <Routes>
  //     <Route path="/" element={<Home/>}/>
  //     <Route path="/login" element={<Register/>}/>
  //    </Routes>
  //   </main>
  //   <Footer/>
  //   </div>
  //  </Router>
  //  </>
  <div className='max-w-full'>
  <div className="w[100]">
  <header className=" text-white flex items-center px-4">
    <Login/>
  </header>
  <div className=" flex flex-grow">
    <main className="flex-1 bg-gray-100 p-4 ">
      <Body/>
      {/* <Basicinfo/> */}
    </main>
  </div>
  <footer className=" text-white text-center ">
    <Footer/>
  </footer>
</div>
</div>
   
    
  )
}

export default App
