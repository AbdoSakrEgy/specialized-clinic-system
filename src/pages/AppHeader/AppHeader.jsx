import React, { useState,useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import {Link as Link2} from 'react-scroll'
import Media from "./Media";
import Avatar from "./Avatar";

const AppHeader = () => {
    
    return ( 
        <React.Fragment>
            {/* -------media header------- */}
            <Media/>
            {/* -------navbar------- */}
            <nav className="hv-bc h-20 px-10 shadow-md sticky-top bg-white">
            {/*                                        sticky-top top-0 */}
                <Link to='/'>
                    <div className="logo hv-bc text-blue-2 cursor-pointer">
                        <FaStethoscope style={{fontSize:'30px'}} className="mr-3"/>
                        <div className="font-bold text-3xl">Specialized Clinic</div>
                    </div>
                </Link>
                <div className="text-lg font-bold text-[#78727f]" id="myDIV">

                    <Link2 to="AboutUs" className="pl-10">
                        <Link to="/">
                            <div className="inline-block">من نحن</div>
                        </Link>
                    </Link2>

                    <Link to="/bandAid" className="pl-10">
                        <div className="inline-block">الإسعافات الأولية</div>
                    </Link>

                    <Link2 to="MedicalStaff" className="pl-10">
                        <Link to="/">
                            <div className="inline-block">الطاقم الطبي</div>
                        </Link>
                    </Link2>

                    <Link2 to="MedicalServices" className="pl-10">
                        <Link to="/">
                            <div className="inline-block">الخدمات الطبية</div>
                        </Link>
                    </Link2>

                    <Link to="/" className="pl-10">
                        <div className="inline-block">الصفحةالرئيسية</div>
                    </Link>
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
                    {/* ------------- profile avatar --------------- */}
                    {/* <Avatar/> */}
                </div>
            </nav>
            {/* -------outlet------- */}
            <Outlet/>
        </React.Fragment>
     );
}
 
export default AppHeader;