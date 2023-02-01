import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaFacebookF,FaLinkedin,FaInstagram,FaClock,FaPhone,FaEnvelope,FaStethoscope } from "react-icons/fa";
import { useState } from "react";

const AppHeader = () => {
    const [firstNaveItemColor,setFirstNaveItemColor]=useState("#3b82f6")
    const [secondNaveItemColor,setSecondNaveItemColor]=useState("#78727f")
    const [thirdNaveItemColor,setThirdNaveItemColor]=useState("#78727f")
    const [fourthNaveItemColor,setFourthNaveItemColor]=useState("#78727f")

    return ( 
        <React.Fragment>
            {/* -------contact------- */}
            <div className="hv-bc bg-blue-1 text-white py-4 px-10">
                <div className="flex justify-start">
                    <div className="time hv-bc">
                        <FaClock style={{fontSize: '15px'}}/><p style={{fontSize: '14px'}} className="pl-2 pr-5">السبت-الخميس 9-5</p>
                    </div>
                    <div className="phone hv-bc">
                        <FaPhone style={{fontSize: '15px'}}/><p style={{fontSize: '14px'}} className="pl-2 pr-5">0100-7137-667</p>
                    </div>
                    <div className="email hv-bc">
                        <FaEnvelope style={{fontSize: '15px'}}/><p style={{fontSize: '14px'}} className="pl-2 pr-5">email@gmail.com</p>
                    </div>
                </div>
                <div className="hv-bc">
                    <FaFacebookF style={{fontSize: '15px'}}className="ml-5"/>
                    <FaLinkedin style={{fontSize: '15px'}}className="ml-5"/>
                    <FaInstagram style={{fontSize: '15px'}}className="ml-5"/>
                </div>
            </div>
            {/* -------navbar------- */}
            <nav className="hv-bc py-5 px-10 shadow-md sticky-top bg-white">
            {/*                                        sticky-top top-0 */}
                <div className="logo hv-bc text-blue-2">
                    <FaStethoscope style={{fontSize:'30px'}} className="mr-3"/>
                    <div>Specialized Clinic System</div>
                </div>
                <div className="text-lg font-bold text-[#78727f]" id="myDIV">
                    <Link
                        to="/"
                        className="pl-10"
                        style={{color:`${firstNaveItemColor}`}}
                        onClick={()=>{
                            setFirstNaveItemColor("#3b82f6");
                            setSecondNaveItemColor("#78727f");
                            setThirdNaveItemColor("#78727f");
                            setFourthNaveItemColor("#78727f");
                        }}
                    >الصفحة الرئيسية</Link>

                    <Link
                        to="/"
                        className="pl-10"
                        style={{color:`${secondNaveItemColor}`}}
                        onClick={()=>{
                            setFirstNaveItemColor("#78727f");
                            setSecondNaveItemColor("#3b82f6");
                            setThirdNaveItemColor("#78727f");
                            setFourthNaveItemColor("#78727f");
                        }}
                    >السجل الطبي </Link>

                    <Link
                        to="/bandAid"
                        className="pl-10"
                        style={{color:`${thirdNaveItemColor}`}}
                        onClick={()=>{
                            setFirstNaveItemColor("#78727f");
                            setSecondNaveItemColor("#78727f");
                            setThirdNaveItemColor("#3b82f6");
                            setFourthNaveItemColor("#78727f");
                        }}
                    >إسعافات أولية</Link>

                </div>
                <div>
                    {/* ------------- sign--------------- */}
                    <Link to="/signup">
                        <button className="text-sm font-normal py-2 px-4 rounded shadow-md bg-blue-1 text-white mr-5">
                            إنشاء حساب
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="text-sm bg-transparentn text-blue-1 font-semibold  py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent">
                            تسجيل دخول
                        </button>
                    </Link>
                    {/* ------------- sign--------------- */}
                    {/* ------------- profile circle --------------- */}

                    {/* ------------- profile circle --------------- */}
                </div>
            </nav>
            {/* -------outlet------- */}
            <Outlet/>
        </React.Fragment>
     );
}
 
export default AppHeader;