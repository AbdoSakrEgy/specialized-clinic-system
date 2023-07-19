import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css files/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppHeader from './pages/AppHeader/AppHeader';
import Home from './pages/Home/Home';
import VisitsHistory from './pages/visits history/VisitsHistory';
import VisitsHistoryDoctorView from './pages/visits history/VistsHistoryDoctorView';
import TimeManagement from './pages/TimeManagement/TimeManagement';
import RateDoctors from './pages/DoctorsRate/RateDoctors';
import Breaking from './pages/BandAid/breaking';
import Drowing from './pages/BandAid/drowing';
import Burn from './pages/BandAid/burn';
import Headaches from './pages/BandAid/headaches';
import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';

// // logedin user data
// const [userData,setUserData]=useState({});
// // localed data
// useEffect(()=>{
//   const localedUserIn=localStorage.getItem('userSignIn');
  
//   if(localedUserIn){
//       const foundUser=JSON.parse(localedUserIn);
//       setUserData(foundUser);
//   }
// },[])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppHeader userData={userData} setUserData={setUserData}/>,
//     errorElement: <div>page error</div>,
//     children:[
//       {
//         index:true,
//         element:<Home userData={userData} setUserData={setUserData}/>
//       },
//       {
//         path:'VisitsHistory',
//         element:<VisitsHistory userData={userData}/>
//       },
//       {
//         path:'VisitsHistoryDoctorView',
//         element:<VisitsHistoryDoctorView userData={userData} setUserData={setUserData}/>
//       },
//       {
//         path:'timeManagement',
//         element:<TimeManagement userData={userData} setUserData={setUserData}/>
//       },
//       {
//         path:'ratedoctors',
//         element:<RateDoctors userData={userData} setUserData={setUserData}/>
//       },
//       {
//         path:'bandAid/breaking',
//         element:<Breaking/>
//       },
//       {
//         path:'bandAid/drowing',
//         element:<Drowing/>
//       },
//       {
//         path:'bandAid/burn',
//         element:<Burn/>
//       },
//       {
//         path:'bandAid/headaches',
//         element:<Headaches/>
//       },
//       {
//         path:'signup',
//         element:<SignUp userData={userData} setUserData={setUserData}/>
//       },
//       {
//         path:'signin',
//         element:<SignIn userData={userData} setUserData={setUserData}/>
//       },
//     ]
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
    // <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
