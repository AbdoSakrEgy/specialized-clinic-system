import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";

const SignUp = () => {
    // ---------- password field ----------
    const [passInputType,setPassInputType] = useState("password")
    const [passIcon,setPassIcon] =useState(faEyeSlash)
    const [passInputType2,setPassInputType2] = useState("password")
    const [passIcon2,setPassIcon2] =useState(faEyeSlash)
    
    
    function showPassword() {
        if (passInputType == "password") {
            setPassInputType("text")
            setPassIcon(faEye);
        } else {
            setPassInputType("password")
            setPassIcon(faEyeSlash);
        }
    }

    function showPassword2() {
        if (passInputType2 == "password") {
            setPassInputType2("text")
            setPassIcon2(faEye);
        } else {
            setPassInputType2("password")
            setPassIcon2(faEyeSlash);
        }
    }
    // ---------- password field ----------
    return ( 
        <React.Fragment>
            <div className="h-screen bg-gray-1 flex flex-col justify-center items-center w-full pb-40">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-600">إنشاء حساب</h1>
                            <div>
                                <label className="label">اسم المستخدم</label>
                                <input type="text" className="ourInput" />
                            </div>
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
                            <div>
                                <label className="label">تأكيد كلمة المرور</label>
                                <div className="relative">
                                    <input type={passInputType2} className="ourInput"/>
                                    <FontAwesomeIcon onClick={showPassword2} icon={passIcon2} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                        <Link to="/profile">
                            <button className="mt-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide">إنشاء حساب</button>
                        </Link>
                    </div>
                </form>
                <span className="pt-5">
                    <Link to="/signin" className="text-xs ml-2 text-blue-500 font-semibold">تسجيل دخول</Link>
                    <p className="inline-block pl-2">هل تمتلك حساب بالفعل؟</p>
                </span>
            </div>
        </React.Fragment>
     );
}
 
export default SignUp;