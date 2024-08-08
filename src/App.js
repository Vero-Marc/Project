
import './App.css';
import './Home.css'
import Home from './components/Home';
import Booking from './components/Booking';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarSelection from './components/CarSelection';
import ConfirmBooking from './components/ConfirmBooking';
function App() {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/carselection' element={<CarSelection/>}/>
      <Route path='/confirmbooking' element={<ConfirmBooking/>}/>
    </Routes>
    </BrowserRouter>  

    <Footer/>
    </div>
  );
}

export default App;
