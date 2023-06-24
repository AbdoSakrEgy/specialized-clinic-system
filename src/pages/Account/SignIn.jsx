import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = (props) => {
  const [iamDoctor, setIamDoctor] = useState(false);
  // ---------- post old user ----------
  const [userPhone, setUserphone] = useState("");

  const [userPhoneErrorMessage, setUserPhoneErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [isDataRecived, setIsDataRecived] = useState(false);

  // handleSignIn fn
  const handleSignIn = (e) => {
    e.preventDefault();
    {
      validateUserInputs() && loginUser();
    }
  };
  // validateUserInputs fn
  const validateUserInputs = () => {
    if (userPhone.length != 11) {
      setUserPhoneErrorMessage("!رقم غير صحيح");
      return false;
    } else {
      setUserPhoneErrorMessage("");
      return true;
    }
  };
  // login user
  async function loginUser() {
    await axios
      .post("https://egada.vercel.app/patient/logIn", {
        mobile: userPhone,
      })
      .then((res) => {
        setIsDataRecived(true);
        setIsError(false);
        setID(res.data.body);
        // setID("6490bbb384adde82a88852fd"); //assume id has been returned =================================
      })
      .catch((error) => {
        setIsDataRecived(false);
        setIsError(true);
      });
  }
  // sendDataToLocalStorage
  const [isChecked, setIsChecked] = useState(false);
  const [ID, setID] = useState(null);
  useEffect(() => {
    async function sendDataToLocalStorage(ID) {
      {
        iamDoctor
          ? await axios
              .get("https://egada.vercel.app/doctor/" + ID)
              .then((res) => {
                props.setUserData(res.data.body);
                if (isChecked) {
                  localStorage.setItem(
                    "userSignIn",
                    JSON.stringify(res.data.body)
                  );
                }
              })
              .catch((err) => {
                console.log("err 0_0 ");
                // props.setUserData({
                //   name: "7amood",
                //   mobile: "774147610928",
                //   isVerified: false,
                //   dob: "2002-03-21T00:00:00.000Z",
                //   status: true,
                //   _id: "6490bbb384adde82a88852fd",
                //   entryDate: "2023-06-19T20:33:55.023Z",
                //   __v: 0,
                //   otpId: "1d8d0c66-c484-484c-b5ce-6d5f59723e27",
                // }); //assume id has been returned =================================
              })
          : await axios
              .get("https://egada.vercel.app/patient/" + ID)
              .then((res) => {
                props.setUserData(res.data.body);
                if (isChecked) {
                  localStorage.setItem(
                    "userSignIn",
                    JSON.stringify(res.data.body)
                  );
                }
              })
              .catch((err) => {
                console.log("err 0_0 ");
                // props.setUserData({
                //   name: "7amood",
                //   mobile: "774147610928",
                //   isVerified: false,
                //   dob: "2002-03-21T00:00:00.000Z",
                //   status: true,
                //   _id: "6490bbb384adde82a88852fd",
                //   entryDate: "2023-06-19T20:33:55.023Z",
                //   __v: 0,
                //   otpId: "1d8d0c66-c484-484c-b5ce-6d5f59723e27",
                // }); //assume id has been returned =================================
              });
      }
    }
    {
      isDataRecived && sendDataToLocalStorage(ID);
    }
  }, [isDataRecived]);
  // ======================================================================
  // ======================================================================
  // ======================================================================
  // ======================================================================
  // ======================================================================
  // ======================================================================

  // handleSignInDoctor fn
  const handleSignInDoctor = (e) => {
    e.preventDefault();
    loginDoctor();
  };
  // validateDocotorInputs fn
  // login doctor
  async function loginDoctor() {
    await axios
      .post("https://egada.vercel.app/doctor/logIn", {
        mobile: userPhone,
      })
      .then((res) => {
        setIsDataRecived(true);
        setIsError(false);
        setID(res.data.body);
        // setID("6490bbb384adde82a88852fd"); //assume id has been returned =================================
      })
      .catch((error) => {
        setIsDataRecived(false);
        setIsError(true);
      });
  }
  // sendDataToLocalStorageAsDoctor

  return (
    <React.Fragment>
      {isDataRecived ? (
        <div className="h-screen flex flex-col justify-center items-center w-full pb-40 bg-gray-1">
          <div className="px-10 py-8 rounded-xl w-screen shadow-md max-w-sm bg-white">
            <div className="space-y-4">
              <h1 className="text-right text-2xl font-semibold text-green-600">
                ! تم تسجيل الدخول
              </h1>
              <h1 className="text-right text-2xl font-semibold text-gray-600">
                <Link to="/">إذهب إلي الصفحة الرئيسية</Link>
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
                  <h1 className="text-center text-2xl font-semibold text-gray-600">
                    تسجيل الدخول
                  </h1>
                  <div>
                    <label className="label">رقم الهاتف</label>
                    <input
                      value={userPhone}
                      type="number"
                      className="ourInput"
                      onChange={(e) => {
                        setUserphone(e.target.value);
                      }}
                    />
                    <div className="text-right text-red-600">
                      {userPhoneErrorMessage}
                    </div>
                  </div>
                  <div className="text-right">
                    <label
                      className="inline-block pr-2 cursor-pointer"
                      htmlFor="RememberMeCheckBoxSignIn"
                    >
                      تذكرني
                    </label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setIsChecked(e.target.checked);
                      }}
                      id="RememberMeCheckBoxSignIn"
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="text-right">
                    <label
                      className="inline-block pr-2 cursor-pointer"
                      htmlFor="ٌRememberIamDoctor"
                    >
                      أنا طبيب
                    </label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setIamDoctor(e.target.checked);
                      }}
                      id="ٌRememberIamDoctor"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                {iamDoctor ? (
                  <button
                    className="my-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
                    onClick={handleSignInDoctor}
                  >
                    تسجيل دخول طبيب
                  </button>
                ) : (
                  <button
                    className="my-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
                    onClick={handleSignIn}
                  >
                    تسجيل دخول مستخدم
                  </button>
                )}

                {isError && (
                  <div className="text-center text-red-600">
                    بيانات غير صحيحة
                  </div>
                )}
              </div>
            </form>
            <span className="pt-5">
              <Link
                to="/signup"
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                إنشاء حساب
              </Link>
              <p className="inline-block pl-2">!إنشاء حساب جديد</p>
            </span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignIn;
