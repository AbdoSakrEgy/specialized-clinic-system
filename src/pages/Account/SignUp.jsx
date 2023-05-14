import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SignUp = (props) => {
  // ---------- password field ----------
  const [passInputType, setPassInputType] = useState("password");
  const [passIcon, setPassIcon] = useState(faEyeSlash);
  const [passInputType2, setPassInputType2] = useState("password");
  const [passIcon2, setPassIcon2] = useState(faEyeSlash);

  function showPassword() {
    if (passInputType == "password") {
      setPassInputType("text");
      setPassIcon(faEye);
    } else {
      setPassInputType("password");
      setPassIcon(faEyeSlash);
    }
  }

  function showPassword2() {
    if (passInputType2 == "password") {
      setPassInputType2("text");
      setPassIcon2(faEye);
    } else {
      setPassInputType2("password");
      setPassIcon2(faEyeSlash);
    }
  }

  // ---------- post new user ----------
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [confirmInputPassword, setConfirmInputPassword] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");
  const [isError, setIsError] = useState(false);

  const [isDataValidate, setIsDataValidate] = useState(false);
  const [isDataRecived, setIsDataRecived] = useState(false);

  // handleSubmit fn
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      validateUserInputs() ? setIsDataValidate(true) : setIsDataValidate(false);
    }
  };

  // post user
  useEffect(() => {
    async function postuser() {
      await axios
        .post("https://egada.vercel.app/patient", {
          name: inputUsername,
          mobile: inputEmail,
          dob: inputPassword,
        })
        .then((res) => {
          setIsDataRecived(true);
          setIsError(false);
          props.setUserData(res.data.body);
          {
            document.getElementById("RememberMeCheckBoxSingUp").checked &&
              localStorage.setItem("userSingUp", JSON.stringify(res.data.body));
          }
        })
        .catch((error) => {
          setIsDataRecived(false);
          setIsError(true);
          console.log(error);
        });
    }
    {
      isDataValidate && postuser();
    }
  }, [isDataValidate]);

  // validateUserInputs fn
  const validateUserInputs = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!inputUsername) {
      setUsernameErrorMessage("!اسم المستخدم مطلوب");
      return false;
    } else if (inputUsername.length > 15) {
      setUsernameErrorMessage("!يجب ألا يزيد اسم المستخدم عن 15 حروف");
      return false;
    } else {
      setUsernameErrorMessage("");
      if (!inputEmail) {
        setEmailErrorMessage("!البريد الإلكتروني مطلوب");
        return false;
      } else if (!regex.test(inputEmail)) {
        setEmailErrorMessage("!صيغة الايميل غير صحيحة");
        return false;
      } else {
        setEmailErrorMessage("");
        if (!inputPassword) {
          setPasswordErrorMessage("!كلمة المرور مطلوبة");
          return false;
        } else if (inputPassword.length > 10) {
          setPasswordErrorMessage("!يجب ألا تزيد كلمة المرور عن 10 حروف");
          return false;
        } else if (inputPassword.length < 4) {
          setPasswordErrorMessage("!يجب ألا تقل كلمة المرور عن 4 حروف");
          return false;
        } else {
          setPasswordErrorMessage("");
          if (!confirmInputPassword) {
            setConfirmPasswordErrorMessage("!كلمة المرور مطلوبة");
            return false;
          } else if (confirmInputPassword != inputPassword) {
            setConfirmPasswordErrorMessage("!كلمة المرور غير متطابقة");
            return false;
          } else {
            setConfirmPasswordErrorMessage("");
            return true;
          }
        }
      }
    }
  };

  return (
    <React.Fragment>
      {isDataRecived ? (
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
                <div>
                  <label className="label">اسم المستخدم</label>
                  <input
                    type="text"
                    className="ourInput"
                    value={inputUsername}
                    onChange={(e) => {
                      setInputUsername(e.target.value);
                    }}
                  />
                  <div className="text-right text-red-600">
                    {usernameErrorMessage}
                  </div>
                </div>
                <div>
                  <label className="label">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="ourInput"
                    value={inputEmail}
                    onChange={(e) => {
                      setInputEmail(e.target.value);
                    }}
                  />
                  <div className="text-right text-red-600">
                    {emailErrorMessage}
                  </div>
                </div>
                <div>
                  <label className="label">كلمة المرور</label>
                  <div className="relative">
                    <input
                      type={passInputType}
                      className="ourInput"
                      value={inputPassword}
                      onChange={(e) => {
                        setInputPassword(e.target.value);
                      }}
                    />
                    <div className="text-right text-red-600">
                      {passwordErrorMessage}
                    </div>
                    <FontAwesomeIcon
                      onClick={showPassword}
                      icon={passIcon}
                      className="absolute top-[30%] left-4 cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">تأكيد كلمة المرور</label>
                  <div className="relative">
                    <input
                      type={passInputType2}
                      className="ourInput"
                      value={confirmInputPassword}
                      onChange={(e) => {
                        setConfirmInputPassword(e.target.value);
                      }}
                    />
                    <div className="text-right text-red-600">
                      {confirmPasswordErrorMessage}
                    </div>
                    <FontAwesomeIcon
                      onClick={showPassword2}
                      icon={passIcon2}
                      className="absolute top-[30%] left-4 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <label
                    className="inline-block pr-2 cursor-pointer"
                    htmlFor="RememberMeCheckBoxSingUp"
                  >
                    تذكرني
                  </label>
                  <input
                    type="checkbox"
                    id="RememberMeCheckBoxSingUp"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {/* <Link to="/profile"> */}
              <button
                onClick={handleSubmit}
                className="mt-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
              >
                إنشاء حساب
              </button>
              {/* </Link> */}
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
