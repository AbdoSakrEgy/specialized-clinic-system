import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import { FaStethoscope } from "react-icons/fa";
import Avatar from "./Avatar";

function NavBar(props) {
  return (
    <React.Fragment>
      <nav className="hv-bc h-20 px-10 shadow-md sticky top-0 z-50 bg-white">
        {/*Logo*/}
        <Link2
          to="HeaderSection"
          smooth={true}
          duration={100}
          spy={true}
          spyThrottle={0}
          offset={-135}
        >
          <Link to="/">
            <div className="logo flex flex-col items-center cursor-pointer text-blue-2">
              <FaStethoscope style={{ fontSize: "25px" }} className="mr-3" />
              <div className="font-bold text-lg">Specialized Clinic</div>
            </div>
          </Link>
        </Link2>

        {/*nav links*/}
        <div className="hv-bc text-lg font-bold text-blue-2" id="myDIV">
          <Link2
            to="AboutUs"
            className="ml-10 nav-item"
            smooth={true}
            duration={100}
            spy={true}
            spyThrottle={0}
            offset={-135}
          >
            <Link to="/">
              <div className="inline-block py-3">من نحن</div>
            </Link>
          </Link2>

          <Link2
            to="BandAidSection"
            className="ml-10 nav-item"
            smooth={true}
            duration={100}
            spy={true}
            spyThrottle={0}
            offset={-135}
          >
            <Link to="/">
              <div className="inline-block py-3">الإسعافات الأولية</div>
            </Link>
          </Link2>

          <Link2
            to="AppointmentSection"
            className="ml-10 nav-item"
            smooth={true}
            duration={100}
            spy={true}
            spyThrottle={0}
            offset={-135}
          >
            <Link to="/">
              <div className="inline-block py-3">الحجز</div>
            </Link>
          </Link2>

          <Link2
            to="MedicalStaff"
            className="ml-10 nav-item"
            smooth={true}
            duration={100}
            spy={true}
            spyThrottle={0}
            offset={-135}
          >
            <Link to="/">
              <div className="inline-block py-3">الطاقم الطبي</div>
            </Link>
          </Link2>

          <Link2
            to="MedicalServices"
            className="ml-10 nav-item"
            smooth={true}
            duration={100}
            spy={true}
            spyThrottle={0}
            offset={-135}
          >
            <Link to="/">
              <div className="inline-block py-3">الخدمات الطبية</div>
            </Link>
          </Link2>
          <Link2
            to="HeaderSection"
            className="ml-10 nav-item"
            smooth={true}
            duration={100}
            spy={true}
            spyThrottle={0}
            offset={-135}
          >
            <Link to="/">
              <div className="inline-block py-3">الصفحةالرئيسية</div>
            </Link>
          </Link2>
        </div>
        {/* have account or not */}
        {Object.keys(props.userData).length ? (
          // profile avatar
          <div>
            <Avatar userData={props.userData} setUserData={props.setUserData} />
          </div>
        ) : (
          // signup and signin
          <div className="hv-bc">
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
        )}
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
