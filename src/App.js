import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Booking from './Pages/Booking';
import Payment from './Pages/Payment';
import LiveFeed from './Pages/LiveFeed';
import Navbar from './Pages/Navbar';
import AuthPage from './Pages/AuthPage';
import SignuPage from "./Pages/SignuPage";
import Footer from './Pages/Footer';
import Modal from './Pages/Modal';
import ParkingView from './Pages/ParkingView';
function App() {


    return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/book/:locationId" element={<Booking/>}/>
          <Route path="/payment/:locationId/:slotID" element={<Payment/>}/>  
          <Route path="/live" element={<LiveFeed/>}/>
          <Route path="/login" element={<AuthPage/>} />
          <Route path="/sign-up" element={<SignuPage/>} />
          <Route path="/payment" element={<Modal/>} />
          <Route path="/parking" element={<ParkingView/>} />
          
          
      </Routes>
    <Footer/>
  
    </BrowserRouter>
  )
}

export default App