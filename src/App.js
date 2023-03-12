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

import axios from "axios";

function App() {
  // ---------- load users.json ----------
  const [usersDatabase,setUsersDatabase] = useState([])

  const client=axios.create({
      baseURL:"http://localhost:4111/users"
  })
  useEffect(()=>{
      async function getUsersDatabase(){
          const response = await client.get();
          setUsersDatabase(response.data)
      }
      getUsersDatabase();
  },[])
  // ---------- load user data ----------
  const [userData,setUserData]=useState({});

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('user');
    if(loggedInUser){
      const foundUser=JSON.parse(loggedInUser);
      setUserData(foundUser);
    }
  },[])

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHeader userData={{userData,setUserData}}/>}>
            <Route index element={<Home/>} />
            
            <Route path='/VisitsHistory' element={<VisitsHistory/>}/>

            <Route path='/bandAid/breaking' element={<Breaking/>} />
            <Route path='/bandAid/drowing' element={<Drowing/>} />
            <Route path='/bandAid/burn' element={<Burn/>} />
            <Route path='/bandAid/headaches' element={<Headaches/>} />

            <Route path='/signup' element={<SignUp usersDatabase={{usersDatabase,setUsersDatabase}} userData={{userData,setUserData}} />} />
            <Route path='/signin' element={<SignIn usersDatabase={{usersDatabase,setUsersDatabase}} userData={{userData,setUserData}} />} />

            <Route path='/profile' element={<Profile userData={{userData,setUserData}} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
