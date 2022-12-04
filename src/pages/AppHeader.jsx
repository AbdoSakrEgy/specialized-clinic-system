import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaFacebookF,FaLinkedin,FaInstagram,FaClock,FaPhone,FaEnvelope,FaStethoscope } from "react-icons/fa";

const AppHeader = () => {
    return ( 
        <React.Fragment>
            {/* -------contact------- */}
            <div className="hv-bc bg-blue-1 text-white py-5 px-10">
                <div className="flex justify-start">
                    <div className="time hv-bc">
                        <FaClock style={{fontSize: '20px'}}/><p className="pl-2 pr-5">السبت-الخميس 9-5</p>
                    </div>
                    <div className="phone hv-bc">
                        <FaPhone style={{fontSize: '20px'}}/><p className="pl-2 pr-5">01007137667</p>
                    </div>
                    <div className="email hv-bc">
                        <FaEnvelope style={{fontSize: '20px'}}/><p className="pl-2 pr-5">email@gmail.com</p>
                    </div>
                </div>
                <div className="hv-bc">
                    <FaFacebookF style={{fontSize: '20px'}} className="ml-5"/>
                    <FaLinkedin style={{fontSize: '20px'}} className="ml-5"/>
                    <FaInstagram style={{fontSize: '20px'}} className="ml-5"/>
                </div>
            </div>
            {/* -------navbar------- */}
            <nav className="hv-bc py-5 px-10 shadow-md sticky top-0 bg-white">
                <div className="logo hv-bc text-blue-2">
                    <FaStethoscope style={{fontSize:'30px'}} className="mr-3"/>
                    <div>Specialized Clinic System</div>
                </div>
                <div className="text-lg font-bold text-[#78727f]" id="myDIV">
                    <Link to="/" className="pl-10 myOptions">الصفحة الرئيسية</Link>
                    <Link to="/" className="pl-10 myOptions">السجل الطبي </Link>
                    <Link to="/bandAid" className="pl-10 myOptions">إسعافات أولية</Link>
                    <Link to="/" className="pl-10 myOptions">إستشارة سريعة</Link>
                </div>
                <div>
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
                </div>
            </nav>
            {/* -------outlet------- */}
            <Outlet/>
        </React.Fragment>
     );
}
 
export default AppHeader;