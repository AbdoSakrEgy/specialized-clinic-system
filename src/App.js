import React, { useState,useEffect } from "react";
import AppHeader from './pages/AppHeader/AppHeader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

import Breaking from './pages/BandAid/breaking';
import Drowing from './pages/BandAid/drowing';
import Burn from './pages/BandAid/burn';
import Headaches from './pages/BandAid/headaches';

import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';
import Profile from './pages/Account/Profile';
import VisitsHistory from './pages/visits history/VisitsHistory';

import VisitsHistoryDoctorView from "./pages/visits history/VistsHistoryDoctorView";

function App() {
  // logedin user data
  const [userData,setUserData]=useState({});
  // localed data
  useEffect(()=>{
    const localedUserIn=localStorage.getItem('userSignIn');
    const localedUserUp=localStorage.getItem('userSignUp');

    if(localedUserIn){
      const foundUser=JSON.parse(localedUserIn);
      setUserData(foundUser);
    }else if(localedUserUp){
      const foundUser=JSON.parse(localedUserUp);
      setUserData(foundUser);
    }else{
    }
    // console.log("userData:",userData);
  },[])

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHeader userData={userData} setUserData={setUserData}/>}>
            <Route index element={<Home />} />
            
            <Route path='/VisitsHistory' element={<VisitsHistory userData={userData}/>}/>
            <Route path='/VisitsHistoryDoctorView' element={<VisitsHistoryDoctorView/>}/>

            <Route path='/bandAid/breaking' element={<Breaking/>} />
            <Route path='/bandAid/drowing' element={<Drowing/>} />
            <Route path='/bandAid/burn' element={<Burn/>} />
            <Route path='/bandAid/headaches' element={<Headaches/>} />

            <Route path='/signup' element={<SignUp userData={userData} setUserData={setUserData}/>} />
            <Route path='/signin' element={<SignIn userData={userData} setUserData={setUserData}/>} />

            <Route path='/profile' element={<Profile userData={userData} setUserData={setUserData} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
