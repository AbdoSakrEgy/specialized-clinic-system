import React from "react";
import { useState } from "react";
import "../../css files/App.css";
import axios from "axios";

const Profile = (props) => {
  // ---------- user data ----------

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [age, setAge] = useState("");
  // const [password, setPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [truePassword, setTruePassword] = useState("12345");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [addressErrorMessage, setAddressErrorMessage] = useState("");
  // const [ageErrorMessage, setAgeErrorMessage] = useState("");
  // const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  // const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState("");

  // ---------- handleUpdatedData fn ----------
  const [isDataChanged, setIsDataChanged] = useState(false);
  const handleUpdatedData = (e) => {
    e.preventDefault();
    // {
    //   props.userData.hasOwnProperty("des")
    //     ? axios.put(
    //         "https://egada.vercel.app/doctor/update/"+props.userData._id,
    //         {

    //         }
    //       )
    //     : "";
    // }
  };

  return (
    <React.Fragment>
      <div className="h-screen bg-gray-1 flex justify-center items-start w-full p-[5vh] pr-10 overflow-hidden">
        {/* إدارة الملف الشخصي */}
        <form className="w-[80%]" id="userDataForm">
          <div className="rounded-t-lg py-3 text-xl text-center bg-blue-1 text-white">
            إدارة الملف الشخصي
          </div>
          <div className="bg-white px-5 py-8 rounded-b-xl shadow-md flex flex-col">
            <div className="flex flex-col">
              <div className="hv-bc">
                <input
                  type="text"
                  id="username"
                  className="userDataInput"
                  // defaultValue={props.userData.name}
                  value={props.userData.name}
                />
                <label htmlFor="username" className="userDataHeader">
                  الاسم
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {usernameErrorMessage}
              </div>

              <div className="hv-bc mt-14">
                <input
                  type="number"
                  id="phonenumber"
                  className="userDataInput"
                  // defaultValue={props.userData.mobile}
                  value={props.userData.mobile}
                />
                <label htmlFor="phonenumber" className="userDataHeader">
                  رقم الهاتف
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {phoneNumberErrorMessage}
              </div>

              {/* <div className="hv-bc mt-14">
                <input
                  type="email"
                  id="email"
                  className="userDataInput"
                  // defaultValue={props.userData.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    {
                      if (e.target.value != e.target.defaultValue)
                        setIsDataChanged(true);
                    }
                  }}
                />
                <label htmlFor="email" className="userDataHeader">
                  البريد الإلكتروني
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {emailErrorMessage}
              </div> */}

              {/* <div className="hv-bc mt-14">
                <input
                  type="number"
                  id="userAge"
                  className="userDataInput"
                  // defaultValue={props.userData.age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    {
                      if (e.target.value != e.target.defaultValue)
                        setIsDataChanged(true);
                    }
                  }}
                />
                <label htmlFor="userAge" className="userDataHeader">
                  العمر
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {ageErrorMessage}
              </div> */}

              {/* <div className="hv-bc mt-14">
                <input
                  type="text"
                  id="userAddress"
                  className="userDataInput"
                  // defaultValue={props.userData.location}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    {
                      if (e.target.value != e.target.defaultValue)
                        setIsDataChanged(true);
                    }
                  }}
                />
                <label htmlFor="userAddress" className="userDataHeader">
                  العنوان
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {addressErrorMessage}
              </div> */}

              {/* <div className="hv-bc mt-14">
                <div className="relative userDataInput p-0">
                  <input
                    type={passInputType}
                    id="userPassword"
                    className="userDataInput"
                    defaultValue={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      {
                        if (e.target.value != e.target.defaultValue)
                          setIsDataChanged(true);
                      }
                    }}
                  />
                  <FontAwesomeIcon
                    onClick={showPassword}
                    icon={passIcon}
                    className="absolute top-[30%] left-4 cursor-pointer"
                  />
                </div>
                <label htmlFor="userPassword" className="userDataHeader">
                  كلمة المرور
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {passwordErrorMessage}
              </div> */}

              {/* <div className="hv-bc mt-14">
                <div className="relative userDataInput p-0">
                  <input
                    type={passInputType2}
                    id="userNewPassword"
                    className="userDataInput"
                    defaultValue={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      {
                        if (e.target.value != e.target.defaultValue)
                          setIsDataChanged(true);
                      }
                    }}
                  />
                  <FontAwesomeIcon
                    onClick={showPassword2}
                    icon={passIcon2}
                    className="absolute top-[30%] left-4 cursor-pointer"
                  />
                </div>
                <label htmlFor="userNewPassword" className="userDataHeader">
                  كلمة المرور الجديدة
                </label>
              </div>
              <div className="text-end pr-48 text-red-600">
                {newPasswordErrorMessage}
              </div> */}
            </div>
            <div className="flex justify-end mt-14">
              <button
                onClick={handleUpdatedData}
                className="text-sm font-bold py-2 px-8 mr-5 rounded shadow-md cursor-default hover:cursor-pointer bg-blue-1 text-white"
              >
                تحديث البيانات
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
