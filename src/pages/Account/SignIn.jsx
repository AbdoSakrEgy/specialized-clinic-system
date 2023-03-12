import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const SignIn = (props) => {
    // ---------- password field ----------
    const [pwdInputType,setPwdInputType] = useState("password")
    const [pwdIcon,setPwdIcon] =useState(faEyeSlash)
    
    function showPassword() {
        if (pwdInputType == "password") {
            setPwdInputType("text")
            setPwdIcon(faEye);
        } else {
            setPwdInputType("password")
            setPwdIcon(faEyeSlash);
        }
    }
    // ---------- isUserExist fn ----------
    const isUserExist = async () =>{
        const userObj=await props.usersDatabase.usersDatabase.find((obj)=>obj.email===inputEmail);
        if(userObj){
            if(userObj.password === inputPassword){
                setIsSubmitted(true);
                // load user data
                props.userData.setUserData(userObj);
                // save user data localy
                localStorage.setItem('user',JSON.stringify(userObj));
            }else{
                setInputErrorMessage("! تحقق من البريد الإلكتروني أو كلمة المرور"); 
            }
        }else{
            setInputErrorMessage("! تحقق من البريد الإلكتروني أو كلمة المرور"); 
        }
    }
    // ---------- validateUserInputs fn ----------
    const [inputEmail,setInputEmail]=useState("");
    const [inputPassword,setInputPassword]=useState("");

    const [inputErrorMessage,setInputErrorMessage]=useState("");

    const validateUserInputs=()=>{
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!inputEmail || !regex.test(inputEmail) || !inputPassword || inputPassword.length<4 || inputPassword.length>10){
            setInputErrorMessage("! تحقق من البريد الإلكتروني أو كلمة المرور");
        }else{
            setInputErrorMessage("");
            isUserExist();
        }
    }
    // ---------- handleSignIn fn ----------
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleSignIn= async (e)=>{
        e.preventDefault();
        validateUserInputs();
        if(isSubmitted){
            
        }
    }

    return ( 
        <React.Fragment>
            {isSubmitted ? (
                <div className="h-screen flex flex-col justify-center items-center w-full pb-40 bg-gray-1">
                    <div className="px-10 py-8 rounded-xl w-screen shadow-md max-w-sm bg-white">
                        <div className="space-y-4">
                            <h1 className="text-right text-2xl font-semibold text-green-600">! تم تسجيل الدخول</h1>
                            <h1 className="text-right text-2xl font-semibold text-gray-600">
                                <Link to="/" >
                                    إذهب إلي الصفحة الرئيسية
                                </Link>
                            </h1>
                        </div>
                    </div>                        
                </div>
            ) : ( 
                <div>
                    <div className="h-screen bg-gray-1 flex flex-col justify-center items-center w-full pb-40">
                        <form>
                            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                                <div className="space-y-4">
                                    <h1 className="text-center text-2xl font-semibold text-gray-600">تسجيل الدخول</h1>
                                    <div>
                                        <label className="label">البريد الإلكتروني</label>
                                        <input
                                        value={inputEmail}
                                        type="email"
                                        className="ourInput"
                                        onChange={(e)=>{setInputEmail(e.target.value)}}
                                        />
                                    </div>
                                    <div>
                                        <label className="label">كلمة المرور</label>
                                        <div className="relative">
                                            <input
                                            value={inputPassword}
                                            type={pwdInputType}
                                            className="ourInput"
                                            onChange={(e)=>{setInputPassword(e.target.value)}}
                                            />
                                            <div className="text-right text-red-600">{inputErrorMessage}</div>
                                            <FontAwesomeIcon onClick={showPassword} icon={pwdIcon} className="absolute top-[30%] left-4 cursor-pointer"/>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <label className="inline-block pr-2 cursor-pointer" htmlFor="RememberMeCheckBox">تذكرني</label>
                                        <input type="checkbox" id="RememberMeCheckBox" className="cursor-pointer"/>
                                    </div>
                                </div>
                                {/* <Link to="/profile"> */}
                                    <button
                                        className="my-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
                                        onClick={handleSignIn}
                                    >تسجيل الدخول</button>
                                {/* </Link> */}
                                <p className="text-right text-sm cursor-pointer text-blue-1">هل نسيت كلمة المرور؟</p>
                            </div>
                        </form>
                        <span className="pt-5">
                            <Link to="/signup" className="text-xs ml-2 text-blue-500 font-semibold">إنشاء حساب</Link>
                            <p className="inline-block pl-2">!إنشاء حساب جديد</p>
                        </span>
                    </div>
                </div>
            )}
        </React.Fragment>
     );
}
 
export default SignIn;
