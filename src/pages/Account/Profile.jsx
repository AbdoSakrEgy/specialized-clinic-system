import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../../css files/App.css'

const Profile = () => {
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
    const [username,setUsername]=useState(null);
    const [email,setEmail]=useState(null);
    const [phoneNumber,setPhoneNumber]=useState(null);
    const [address,setAddress] = useState(null);
    const [birthday,setBirthday] = useState(null);
    const [password,setPassword]=useState(null);
    const [newPassword,setNewPassword]=useState(null);
    const [truePassword,setTruePassword]=useState("12345");
    
    const [usernameErrorMessage,setUsernameErrorMessage]=useState(null);
    const [emailErrorMessage,setEmailErrorMessage]=useState(null);
    const [phoneNumberErrorMessage,setPhoneNumberErrorMessage]=useState(null);
    const [addressErrorMessage,setAddressErrorMessage] = useState(null);
    const [birthdayErrorMessage,setBirthdayErrorMessage] = useState(null);
    const [passwordErrorMessage,setPasswordErrorMessage]=useState(null);
    const [newPasswordErrorMessage,setNewPasswordErrorMessage]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        validate1();
        validate2();
    }
    const validate2=()=>{
        if(phoneNumber.length>11){
            setPhoneNumberErrorMessage("!رقم هاتف غير صحيح");
        }else{
            setPhoneNumberErrorMessage(null);
        }

        if(address.length>50){
            setAddressErrorMessage("!لا يجب أن يزيد العنوان عن 50 حرف");
        }else{
            setAddressErrorMessage(null);
        }
        // setPasswordErrorMessage("hello");
    }
    const validate1=()=>{
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
            setEmailErrorMessage("!صيغة البريد الإلكتروني غير صحيحة");
        }else{
            setEmailErrorMessage(null);
        }


        if(password.length!=0){
            if(password!=truePassword){
                setPasswordErrorMessage("!كلمة المرور غير صحيحة")
            }else{
                setPasswordErrorMessage(null);
                if(!newPassword){
                    setNewPasswordErrorMessage("!كلمة المرور مطلوبة");
                }else if(newPassword.length<4){
                    setNewPasswordErrorMessage("!كلمة المرور يجب أن تزيد عن 4 حروف");
                }else if(newPassword.length>10){
                    setNewPasswordErrorMessage("!كلمة المرور يجب أن تقل عن 10 حروف");
                }else{
                    setTruePassword(newPassword);
                    setNewPasswordErrorMessage(null);
                }
            }
            
        }else{
            setPasswordErrorMessage(null);
            setNewPasswordErrorMessage(null);
        }
    }
    
    return ( 
        <React.Fragment>
            <div className="h-screen bg-gray-1 flex justify-center items-start w-full p-[5vh] pr-10 overflow-hidden">
                {/* إدارة الملف الشخصي */}
                <form className="w-[80%]">
                    <div className="rounded-t-lg py-3 text-xl text-center bg-blue-1 text-white">إدارة الملف الشخصي</div>
                    <div className="bg-white px-5 py-8 rounded-b-xl shadow-md flex flex-col">
                        <div className="flex flex-col">
                            <div className="hv-bc">
                                <input
                                    type="text"
                                    id="username"
                                    className="userDataInput"
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}
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
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                <label htmlFor="email" className="userDataHeader">
                                    البريد الإلكتروني
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{emailErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <input
                                    type="date"
                                    id="userBirthday"
                                    className="userDataInput"
                                    value={birthday}
                                    onChange={(e)=>{setBirthday(e.target.value)}}
                                />
                                <label htmlFor="userBirthday" className="userDataHeader">
                                    تاريخ الميلاد
                                </label>
                            </div>
                            <div className="text-end pr-48 text-red-600">{birthdayErrorMessage}</div>
                            <div className="hv-bc mt-14">
                                <input
                                    type="number"
                                    id="phonenumber"
                                    className="userDataInput"
                                    value={phoneNumber}
                                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
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
                                    value={address}
                                    onChange={(e)=>{setAddress(e.target.value)}}
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
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
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
                                        value={newPassword}
                                        onChange={(e=>{setNewPassword(e.target.value)})}
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
                            <button className="text-sm py-2 px-8 rounded bg-gray-1 text-black mr-5">
                                إلغاء
                            </button>
                            <button onClick={handleSubmit} className="text-sm font-bold py-2 px-8 rounded shadow-md bg-blue-1 text-white">
                                حفظ
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
     );
}
 
export default Profile;