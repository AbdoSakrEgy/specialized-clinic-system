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
    // ---------- data ----------
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const [usernameErrorMessage,setUsernameErrorMessage]=useState(null);
    const [emailErrorMessage,setEmailErrorMessage]=useState(null);
    const [passwordErrorMessage,setPasswordErrorMessage]=useState(null);
    const [confirmPasswordErrorMessage,setConfirmPasswordErrorMessage]=useState(null);


    const handleSubmit=(e)=>{
        e.preventDefault();
        validate();
    }
    const validate =()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!username){
            setUsernameErrorMessage("!اسم المستخدم مطلوب");
        }else if(username.length>15){
            setUsernameErrorMessage("!يجب ألا يزيد اسم المستخدم عن 15 حروف");
        }else{
            setUsernameErrorMessage(null);
        }
        
        if(!email){
            setEmailErrorMessage("!البريد الإلكتروني مطلوب");
        }else if(!regex.test(email)){
            setEmailErrorMessage("!صيغة الايميل غير صحيحة");
        }else{
            setEmailErrorMessage(null);
        }

        if(!password){
            setPasswordErrorMessage("!كلمة المرور مطلوبة");
        }else if(password.length>10){
            setPasswordErrorMessage("!يجب ألا تزيد كلمة المرور عن 10 حروف");
        }else if(password.length<4){
            setPasswordErrorMessage("!يجب ألا تقل كلمة المرور عن 4 حروف");
        }else{
            setPasswordErrorMessage(null);
        }

        if(!confirmPassword){
            setConfirmPasswordErrorMessage("!كلمة المرور مطلوبة");
        }else if(confirmPassword!=password){
            setConfirmPasswordErrorMessage("!كلمة المرور غير متطابقة");
        }
        else{
            setConfirmPasswordErrorMessage(null);
        }
    }

    return ( 
        <React.Fragment>
            <div className="h-screen bg-gray-1 flex flex-col justify-center items-center w-full pb-40">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-600">إنشاء حساب</h1>
                            <div>
                                <label className="label">اسم المستخدم</label>
                                <input
                                    type="text"
                                    className="ourInput"
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                />
                                <div className="text-right text-red-600">{usernameErrorMessage}</div>
                            </div>
                            <div>
                                <label className="label">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    className="ourInput"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                <div className="text-right text-red-600">{emailErrorMessage}</div>
                            </div>
                            <div>
                                <label className="label">كلمة المرور</label>
                                <div className="relative">
                                    <input
                                        type={passInputType}
                                        className="ourInput"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                     />
                                     <div className="text-right text-red-600">{passwordErrorMessage}</div>
                                    <FontAwesomeIcon onClick={showPassword} icon={passIcon} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                            </div>
                            <div>
                                <label className="label">تأكيد كلمة المرور</label>
                                <div className="relative">
                                    <input
                                        type={passInputType2}
                                        className="ourInput"
                                        value={confirmPassword}
                                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                    />
                                    <div className="text-right text-red-600">{confirmPasswordErrorMessage}</div>
                                    <FontAwesomeIcon onClick={showPassword2} icon={passIcon2} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                        <Link to="/profile">
                            <button onClick={handleSubmit} className="mt-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide">إنشاء حساب</button>
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