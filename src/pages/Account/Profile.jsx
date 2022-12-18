import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import '../../css files/App.css'

const Profile = () => {
    const [userName,setUserName]=useState("عبدالرحيم")
    const [email,setEmail]=useState("abdo@gmail.com")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [address,setAddress] = useState("")
    const [birthday,setBirthday] = useState("")

    const [password,setPassword]=useState("")
    const [newPassword,setNewPassword]=useState("")

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
            <div className="h-screen bg-gray-1 flex justify-center items-start w-full p-[5vh] pr-10 overflow-hidden">
                {/* إدارة الملف الشخصي */}
                <form className="w-[80%]">
                    <div className="rounded-t-lg py-3 text-xl text-center bg-blue-1 text-white">إدارة الملف الشخصي</div>
                    <div className="bg-white px-5 py-8 rounded-b-xl shadow-md flex flex-col">
                        <div className="flex flex-col">
                            <div className="hv-bc">
                                <input value={userName} type="text" id="username" className="userDataInput" />
                                <label htmlFor="username" className="userDataHeader">
                                    الاسم
                                </label>
                            </div>
                            <div className="hv-bc">
                                <input value={email} type="email" id="email" className="userDataInput" />
                                <label htmlFor="email" className="userDataHeader">
                                    البريد الإلكتروني
                                </label>
                            </div>
                            <div className="hv-bc">
                                <input value={birthday} type="date" id="userBirthday" className="userDataInput" />
                                <label htmlFor="userBirthday" className="userDataHeader">
                                    تاريخ الميلاد
                                </label>
                            </div>
                            <div className="hv-bc">
                                <input value={phoneNumber} type="number" id="phonenumber" className="userDataInput" />
                                <label htmlFor="phonenumber" className="userDataHeader">
                                    رقم الهاتف
                                </label>
                            </div>
                            <div className="hv-bc">
                                <input value={address} type="text" id="userAddress" className="userDataInput" />
                                <label htmlFor="userAddress" className="userDataHeader">
                                    العنوان
                                </label>
                            </div>
                            <div className="hv-bc">
                                <div className="relative userDataInput p-0">
                                    <input type={passInputType} id="userPassword" className="userDataInput"/>
                                    <FontAwesomeIcon onClick={showPassword} icon={passIcon} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                                <label htmlFor="userPassword" className="userDataHeader">
                                    كلمة المرور
                                </label>
                            </div>
                            <div className="hv-bc">
                                {/*  */}
                                <div className="relative userDataInput p-0">
                                    <input type={passInputType2} id="userNewPassword" className="userDataInput"/>
                                    <FontAwesomeIcon onClick={showPassword2} icon={passIcon2} className="absolute top-[30%] left-4 cursor-pointer"/>
                                </div>
                                {/*  */}
                                <label htmlFor="userNewPassword" className="userDataHeader">
                                    كلمة المرور الجديدة
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-sm py-2 px-8 rounded bg-gray-1 text-black mr-5">
                                إلغاء
                            </button>
                            <button className="text-sm font-bold py-2 px-8 rounded shadow-md bg-blue-1 text-white">
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