import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Booking from './Pages/Booking';
import Payment from './Pages/Payment';
import LiveFeed from './Pages/LiveFeed';
function App() {
    return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/book/:locationId" element={<Booking/>}/>
          <Route path="/payment/:locationId/:slotID" element={<Payment/>}/>  
          <Route path="/live" element={<LiveFeed/>}/>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App