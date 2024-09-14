import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import Home from './pages/Home';
import Header from './layout/Header';
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'
import Profile from './pages/profile/Profile'
import Treatments from './pages/treatments/Treatments'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/test' element={<Test />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/treatments' element={<Treatments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
