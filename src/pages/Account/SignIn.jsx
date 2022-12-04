import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";

const SignIn = () => {
    const [passInputType,setPassInputType] = useState("password")
    const [passIcon,setPassIcon] =useState(faEyeSlash)
    
    function showPassword() {
        if (passInputType == "password") {
            setPassInputType("text")
            setPassIcon(faEye);
        } else {
            setPassInputType("password")
            setPassIcon(faEyeSlash);
        }
    }
    return ( 
        <React.Fragment>
             <div className="h-screen bg-gray-1 flex flex-col justify-center items-center w-full pb-40">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-600">تسجيل الدخول</h1>
                            <div>
                                <label className="label">البريد الإلكتروني</label>
                                <input type="email" className="ourInput" />
                            </div>
                            <div>
                                <label className="label">كلمة المرور</label>
                                <div className="relative">
                                    <input type={passInputType} className="ourInput"/>
                                    <FontAwesomeIcon onClick={showPassword} icon={passIcon} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                            </div>
                            <div className="text-right">
                                <label className="inline-block pr-2" for="RememberMeCheckBox">تذكرني</label>
                                <input type="checkbox" id="RememberMeCheckBox"/>
                            </div>
                        </div>
                        <Link to="/profile">
                            <button className="my-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide">تسجيل الدخول</button>
                        </Link>
                        <p className="text-right text-sm text-blue-1">هل نسيت كلمة المرور؟</p>
                    </div>
                </form>
                <span className="pt-5">
                    <Link to="/signup" className="text-xs ml-2 text-blue-500 font-semibold">إنشاء حساب</Link>
                    <p className="inline-block pl-2">!إنشاء حساب جديد</p>
                </span>
            </div>
        </React.Fragment>
     );
}
 
export default SignIn;