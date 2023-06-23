import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home'
import HomeLayout from './components/HomeLayout'
import Booking from './pages/Booking';
import Hotel from './pages/hotel';
import Reserve from './pages/Reserve';
import DestinationDetails from './pages/DestinationDetails';
import InspirationDetails from './pages/InspirationDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Help from './pages/Help';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/inspiration/:id" element={<InspirationDetails />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
