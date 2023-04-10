import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../../css files/App.css'

const Profile = (props) => {
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
    // ---------- user data ----------
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [address,setAddress] = useState("");
    const [age,setAge] = useState("");
    const [password,setPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [truePassword,setTruePassword]=useState("12345");
    
    const [usernameErrorMessage,setUsernameErrorMessage]=useState("");
    const [emailErrorMessage,setEmailErrorMessage]=useState("");
    const [phoneNumberErrorMessage,setPhoneNumberErrorMessage]=useState("");
    const [addressErrorMessage,setAddressErrorMessage] = useState("");
    const [ageErrorMessage,setAgeErrorMessage] = useState("");
    const [passwordErrorMessage,setPasswordErrorMessage]=useState("");
    const [newPasswordErrorMessage,setNewPasswordErrorMessage]=useState("");

    // ---------- handleUpdatedData fn ----------
    const [isDataChanged,setIsDataChanged]=useState(false)
    const handleUpdatedData=(e)=>{
        e.preventDefault();
        validateUpdatedData();
        validatePWD();
    }
    // ---------- validateUpdatedData fn ----------
    const validateUpdatedData=()=>{
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(username.length>15){
            setUsernameErrorMessage("!يجب ألا يزيد اسم المستخدم عن 15 حروف");
        }else{
            setUsernameErrorMessage("");
        }

        if(age>200){
            setAgeErrorMessage("! أدخل بيانات صحيحة");
        }else{
            setAgeErrorMessage("");
        }
        
        if(email){
            if(!regex.test(email)){
                setEmailErrorMessage("!صيغة البريد الإلكتروني غير صحيحة");
            }else{
                setEmailErrorMessage("");
            }
        }

        if(phoneNumber.length>11){
            setPhoneNumberErrorMessage("!رقم هاتف غير صحيح");
        }else{
            setPhoneNumberErrorMessage("");
        }

        if(address.length>50){
            setAddressErrorMessage("!لا يجب أن يزيد العنوان عن 50 حرف");
        }else{
            setAddressErrorMessage("");
        }
    }
    const validatePWD=()=>{
        if(password.length!=0){
            if(password!=truePassword){
                setPasswordErrorMessage("!كلمة المرور غير صحيحة")
            }else{
                setPasswordErrorMessage("");
                if(!newPassword){
                    setNewPasswordErrorMessage("!كلمة المرور مطلوبة");
                }else if(newPassword.length<4){
                    setNewPasswordErrorMessage("!كلمة المرور يجب أن تزيد عن 4 حروف");
                }else if(newPassword.length>10){
                    setNewPasswordErrorMessage("!كلمة المرور يجب أن تقل عن 10 حروف");
                }else{
                    setTruePassword(newPassword);
                    setNewPasswordErrorMessage("");
                }
            }
            
        }else{
            setPasswordErrorMessage("");
            setNewPasswordErrorMessage("");
        }
    }

    return ( 
        <React.Fragment>
            <div className="h-screen bg-gray-1 flex justify-center items-start w-full p-[5vh] pr-10 overflow-hidden">
                {/* إدارة الملف الشخصي */}
                <form className="w-[80%]" id="userDataForm">
                    <div className="rounded-t-lg py-3 text-xl text-center bg-blue-1 text-white">إدارة الملف الشخصي</div>
                    <div className="bg-white px-5 py-8 rounded-b-xl shadow-md flex flex-col">
                        <div className="flex flex-col">
                            <div className="hv-bc">
                                <input
                                    type="text"
                                    id="username"
                                    className="userDataInput"
                                    defaultValue={props.userData.userData.username}
                                    onChange={(e)=>{
                                        setUsername(e.target.value);
                                        {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                    }}
                                />
                                <label htmlFor="username" className="userDataHeader">
                                    الاسم
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{usernameErrorMessage}</div>

                            <div className="hv-bc mt-14">
                                <input
                                    type="email"
                                    id="email"
                                    className="userDataInput"
                                    defaultValue={props.userData.userData.email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                        {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                    }}
                                />
                                <label htmlFor="email" className="userDataHeader">
                                    البريد الإلكتروني
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{emailErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <input
                                    type="number"
                                    id="userAge"
                                    className="userDataInput"
                                    defaultValue={props.userData.userData.age}
                                    onChange={(e)=>{
                                        setAge(e.target.value);
                                        {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                    }}
                                />
                                <label htmlFor="userAge" className="userDataHeader">
                                    العمر
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{ageErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <input
                                    type="number"
                                    id="phonenumber"
                                    className="userDataInput"
                                    defaultValue={props.userData.userData.phonenumber}
                                    onChange={(e)=>{
                                        setPhoneNumber(e.target.value);
                                        {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                    }}
                                />
                                <label htmlFor="phonenumber" className="userDataHeader">
                                    رقم الهاتف
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{phoneNumberErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <input
                                    type="text"
                                    id="userAddress"
                                    className="userDataInput"
                                    defaultValue={props.userData.userData.location}
                                    onChange={(e)=>{
                                        setAddress(e.target.value);
                                        {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                    }}
                                />
                                <label htmlFor="userAddress" className="userDataHeader">
                                    العنوان
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{addressErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <div className="relative userDataInput p-0">
                                    <input
                                        type={passInputType}
                                        id="userPassword"
                                        className="userDataInput"
                                        defaultValue={password}
                                        onChange={(e)=>{
                                            setPassword(e.target.value);
                                            {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                        }}
                                    />
                                    <FontAwesomeIcon onClick={showPassword} icon={passIcon} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                                <label htmlFor="userPassword" className="userDataHeader">
                                    كلمة المرور
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{passwordErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <div className="relative userDataInput p-0">
                                    <input
                                        type={passInputType2}
                                        id="userNewPassword"
                                        className="userDataInput"
                                        defaultValue={newPassword}
                                        onChange={(e)=>{
                                            setNewPassword(e.target.value);
                                            {if(e.target.value != e.target.defaultValue) setIsDataChanged(true) }
                                        }}
                                    />
                                    <FontAwesomeIcon onClick={showPassword2} icon={passIcon2} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                                <label htmlFor="userNewPassword" className="userDataHeader">
                                    كلمة المرور الجديدة
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{newPasswordErrorMessage}</div>
                        </div>
                        <div className="flex justify-end mt-14">
                            <button onClick={()=>{}} className="text-sm font-bold py-2 px-8 mr-5 rounded shadow-md bg-blue-1 text-white">
                                إلغاء
                            </button>
                            {isDataChanged ? (
                                <button onClick={handleUpdatedData} className="text-sm font-bold py-2 px-8 rounded shadow-md bg-blue-1 text-white">
                                    حفظ
                                </button>
                            ):(
                                <button onClick={(e)=>{e.preventDefault()}} className="text-sm font-bold py-2 px-8 rounded cursor-default bg-[#e2e8ea] text-[#7f8488]">
                                    حفظ
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
     );
}
 
export default Profile;