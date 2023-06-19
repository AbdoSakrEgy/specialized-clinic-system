import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = (props) => {
  // ---------- post new user ----------
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userVerficitionCode, setUserVerficitionCode] = useState("");

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [userPhoneErrorMessage, setUserPhoneErrorMessage] = useState("");
  const [userVerficitionCodeErrorMessage, setUserVerficitionCodeErrorMessage] =
    useState("");

  const [isError, setIsError] = useState(false);

  const [isOTPsended, setIsOTPsended] = useState(false);
  const [isOTPtrue, setIsOTPtrue] = useState(false);
  const [isUserPosted, setIsUserPosted] = useState(false);

  // handleSubmit1 ---------------------
  const handleSubmit1 = (e) => {
    e.preventDefault();
    {
      validateUserInputs() && sendOTP();
    }
  };
  // validateUserInputs fn
  function validateUserInputs() {
    if (!userName) {
      setUserNameErrorMessage("!اسم المستخدم مطلوب");
      return false;
    } else if (userName.length > 15) {
      setUserNameErrorMessage("!يجب ألا يزيد اسم المستخدم عن 15 حروف");
      return false;
    } else if (!userPhone) {
      setUserNameErrorMessage("");
      setUserPhoneErrorMessage("!رقم الهاتف مطلوب");
      return false;
    } else if (userPhone.length != 11) {
      setUserNameErrorMessage("");
      setUserPhoneErrorMessage("رقم هاتف غير صحيح");
      return false;
    } else {
      setUserNameErrorMessage("");
      setUserPhoneErrorMessage("");
      return true;
    }
  }
  // sendOTP
  async function sendOTP() {
    await axios
      .post("https://egada.vercel.app/patient/resendOtp", {
        mobile: userPhone,
      })
      .then((res) => {
        setIsOTPsended(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsOTPsended(true); // assume OTP sended =================================
        setIsError(true);
      });
  }

  // handleSubmit2 ---------------------
  const handleSubmit2 = (e) => {
    e.preventDefault();
    verifyOTP();
  };

  // verifyOTP
  async function verifyOTP() {
    await axios
      .post("https://egada.vercel.app/patient/verifyOtp", {
        mobile: userPhone,
        otpCode: userVerficitionCode,
      })
      .then((res) => {
        console.log("verifyOTP fn done^_^", res.data);
        setIsOTPtrue(true);
        setIsError(false);
        setUserVerficitionCodeErrorMessage("");
      })
      .catch((err) => {
        console.log("verifyOTP fn error!", err);
        setIsOTPtrue(true); // assume  OTP true =================================
        setIsError(true);   // assume  OTP true =================================
        setUserVerficitionCodeErrorMessage("!خطأ في رمز التحقق");
      });
  }

  // isUserPosted
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function postUser() {
      await axios
        .post("https://egada.vercel.app/patient", {
          name: userName,
          mobile: userPhone,
          otpCode: "03-21-2002",
        })
        .then((res) => {
          console.log("postUser fn done^_^", res.data.body);
          setIsUserPosted(true);
          setIsError(false);
          // send data to localstorage
          props.setUserData(res.data.body);
          isChecked &&
            localStorage.setItem("userSignUp", JSON.stringify(res.data.body));
        })
        .catch((err) => {
          console.log("postUser fn error!", err);
          setIsUserPosted(true); // assume user posted =================================
          setIsError(true);
        });
    }
    {
      isOTPtrue && postUser();
    }
  }, [isOTPtrue]);

  return (
    <React.Fragment>
      {isUserPosted ? (
        <div className="h-screen flex flex-col justify-center items-center w-full pb-40 bg-gray-1">
          <div className="px-10 py-8 rounded-xl w-screen shadow-md max-w-sm bg-white">
            <div className="space-y-4">
              <h1 className="text-right text-2xl font-semibold text-green-600">
                ! تم إنشاء الحساب
              </h1>
              <h1 className="text-right text-2xl font-semibold text-gray-600">
                <Link to="/">إذهب إلي الصفحة الرئيسية</Link>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-gray-1 flex flex-col justify-center items-center w-full pb-40">
          <form>
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
              <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">
                  إنشاء حساب
                </h1>

                {!isOTPsended && (
                  <div className="space-y-4">
                    <div>
                      <label className="label">اسم المستخدم</label>
                      <input
                        type="text"
                        className="ourInput"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                      <div className="text-right text-red-600">
                        {userNameErrorMessage}
                      </div>
                    </div>
                    <div>
                      <label className="label">رقم الهاتف</label>
                      <input
                        type="number"
                        className="ourInput mb-10"
                        value={userPhone}
                        onChange={(e) => {
                          setUserPhone(e.target.value);
                        }}
                      />
                      <div className="text-right text-red-600">
                        {userPhoneErrorMessage}
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit1}
                      className="w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
                    >
                      إرسال رمز التحقق
                    </button>
                  </div>
                )}

                {isOTPsended && (
                  <div>
                    <label className="label">رمز التحقق</label>
                    <input
                      type="text"
                      className="ourInput"
                      value={userVerficitionCode}
                      onChange={(e) => {
                        setUserVerficitionCode(e.target.value);
                      }}
                    />
                    <div className="text-right text-red-600">
                      {userVerficitionCodeErrorMessage}
                    </div>
                    <div className="text-right">
                      <label
                        className="inline-block pr-2 mt-10 cursor-pointer"
                        htmlFor="RememberMeCheckBoxSingUp"
                      >
                        تذكرني
                      </label>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setIsChecked(e.target.checked);
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                    <button
                      onClick={handleSubmit2}
                      className="mt-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
                    >
                      تأكيد
                    </button>
                  </div>
                )}
              </div>
              {isError && (
                <div className="text-center pt-5 text-red-600">
                  خطأ تقني يرجي المحاولة لاحقا
                </div>
              )}
            </div>
          </form>
          <span className="pt-5">
            <Link
              to="/signin"
              className="text-xs ml-2 text-blue-500 font-semibold"
            >
              تسجيل دخول
            </Link>
            <p className="inline-block pl-2">هل تمتلك حساب بالفعل؟</p>
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignUp;
