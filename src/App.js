import React from 'react';
import AppHeader from './pages/AppHeader/AppHeader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

import BandAid from './pages/BandAid/BandAid';
import Breaking from './pages/BandAid/breaking';
import Drowing from './pages/BandAid/drowing';
import Burn from './pages/BandAid/burn';
import Headaches from './pages/BandAid/headaches';

import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';
import Profile from './pages/Account/Profile';
import VisitsHistory from './pages/visits history/VisitsHistory';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHeader />}>
            <Route index element={<Home/>} />
            
            <Route path='/VisitsHistory' element={<VisitsHistory/>}/>

            <Route path='/bandAid/breaking' element={<Breaking/>} />
            <Route path='/bandAid/drowing' element={<Drowing/>} />
            <Route path='/bandAid/burn' element={<Burn/>} />
            <Route path='/bandAid/headaches' element={<Headaches/>} />

            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn/>} />

            <Route path='/profile' element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
