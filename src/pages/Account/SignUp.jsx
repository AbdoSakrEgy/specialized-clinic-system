import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const SignUp = (props) => {
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
    // ---------- isInputEmailUsed fn ----------
    const isInputEmailUsed = () =>{
        const userObj=props.usersDatabase.usersDatabase.find((obj)=>obj.email===inputEmail);
        if(userObj){
            return true;
        }else{
            return false;
        }
    }
    // ---------- createNewUser fn ----------
    const [inputUsername,setInputUsername]=useState("");
    const [inputEmail,setInputEmail]=useState("");
    const [inputPassword,setInputPassword]=useState("");
    const [confirmInputPassword,setConfirmInputPassword]=useState("");

    const baseURL="http://localhost:4111/users";
    const createNewUser= ()=>{
       axios
       .post(baseURL,{
            "username":inputUsername,
            "email":inputEmail,
            "password":inputPassword
       }).then(async(response)=>{
            // update usrs.json
            props.usersDatabase.setUsersDatabase(response.data);
            // load user data
            const userObj=await props.usersDatabase.usersDatabase.find((obj)=>obj.email===inputEmail);
            props.userData.setUserData(userObj);
       })
    }
    // ---------- validateUserInputs fn ----------
    const [usernameErrorMessage,setUsernameErrorMessage]=useState("");
    const [emailErrorMessage,setEmailErrorMessage]=useState("");
    const [passwordErrorMessage,setPasswordErrorMessage]=useState("");
    const [confirmPasswordErrorMessage,setConfirmPasswordErrorMessage]=useState("");

    const validateUserInputs =()=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!inputUsername){
            setUsernameErrorMessage("!اسم المستخدم مطلوب");
        }else if(inputUsername.length>15){
            setUsernameErrorMessage("!يجب ألا يزيد اسم المستخدم عن 15 حروف");
        }else{
            setUsernameErrorMessage(null);
            if(!inputEmail){
                setEmailErrorMessage("!البريد الإلكتروني مطلوب");
            }else if(!regex.test(inputEmail)){
                setEmailErrorMessage("!صيغة الايميل غير صحيحة");
            }else if(isInputEmailUsed()){
                setEmailErrorMessage("! البريدالإلكتروني مستخدم بالفعل");
            }else{
                setEmailErrorMessage(null);
                if(!inputPassword){
                    setPasswordErrorMessage("!كلمة المرور مطلوبة");
                }else if(inputPassword.length>10){
                    setPasswordErrorMessage("!يجب ألا تزيد كلمة المرور عن 10 حروف");
                }else if(inputPassword.length<4){
                    setPasswordErrorMessage("!يجب ألا تقل كلمة المرور عن 4 حروف");
                }else{
                    setPasswordErrorMessage(null);
                    if(!confirmInputPassword){
                        setConfirmPasswordErrorMessage("!كلمة المرور مطلوبة");
                    }else if(confirmInputPassword!=inputPassword){
                        setConfirmPasswordErrorMessage("!كلمة المرور غير متطابقة");
                    }
                    else{
                        setConfirmPasswordErrorMessage(null);
                        setIsSubmitted(true);
                    }
                }
            }
        }
    }
    // ---------- handleSignUp fn ----------
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        validateUserInputs();
        if(isSubmitted){
            createNewUser();
        }
    }

    return ( 
        <React.Fragment>
            {isSubmitted ? (
                <div className="h-screen flex flex-col justify-center items-center w-full pb-40 bg-gray-1">
                    <div className="px-10 py-8 rounded-xl w-screen shadow-md max-w-sm bg-white">
                        <div className="space-y-4">
                            <h1 className="text-right text-2xl font-semibold text-green-600">! تم إنشاء الحساب</h1>
                            <h1 className="text-right text-2xl font-semibold text-gray-600">
                                <Link to="/">
                                    إذهب إلي الصفحة الرئيسية
                                </Link>
                            </h1>
                        </div>
                    </div>                        
                </div>
            ):(
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
                                    value={inputUsername}
                                    onChange={(e)=>{setInputUsername(e.target.value)}}
                                />
                                <div className="text-right text-red-600">{usernameErrorMessage}</div>
                            </div>
                            <div>
                                <label className="label">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    className="ourInput"
                                    value={inputEmail}
                                    onChange={(e)=>{setInputEmail(e.target.value)}}
                                />
                                <div className="text-right text-red-600">{emailErrorMessage}</div>
                            </div>
                            <div>
                                <label className="label">كلمة المرور</label>
                                <div className="relative">
                                    <input
                                        type={passInputType}
                                        className="ourInput"
                                        value={inputPassword}
                                        onChange={(e)=>{setInputPassword(e.target.value)}}
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
                                        value={confirmInputPassword}
                                        onChange={(e)=>{setConfirmInputPassword(e.target.value)}}
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
            )}
        </React.Fragment>
     );
}
 
export default SignUp;