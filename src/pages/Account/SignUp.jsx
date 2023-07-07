import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = (props) => {
  // ---------- post new doctor ----------
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [doctorGovern, setDoctorGovern] = useState("");
  const [doctorDataMessage, setDoctorDataMessage] = useState("");
  // ---------- post new user ----------
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userDate, setUserDate] = useState("");
  const [userVerficitionCode, setUserVerficitionCode] = useState("");

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [userPhoneErrorMessage, setUserPhoneErrorMessage] = useState("");
  const [userDateErrorMessage, setUserDateErrorMessage] = useState("");
  const [userVerficitionCodeErrorMessage, setUserVerficitionCodeErrorMessage] =
    useState("");

  const [isError, setIsError] = useState(false);

  const [isOTPsended, setIsOTPsended] = useState(false);
  const [isOTPtrue, setIsOTPtrue] = useState(false);
  const [isUserPosted, setIsUserPosted] = useState(false);

  const [iamdoctor, setIamdoctor] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // handleSubmit1 ---------------------
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (iamdoctor) {
      if (validateUserInputs() && validateDoctorInputs()) {
        sendOTP();
      }
    } else if (validateUserInputs()) {
      sendOTP();
    }
  };
  // validateDoctorInputs fn
  function validateDoctorInputs() {
    if (!department || !description || !doctorGovern) {
      setDoctorDataMessage("من فضل أدخل البيانات");
      return false;
    } else {
      setDoctorDataMessage("");
      return true;
    }
  }
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
    if (iamdoctor) {
      await axios
        .post("https://egada.vercel.app/doctor/resendOtp", {
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
    } else {
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
  }

  // ==================================================================
  // ==================================================================
  // ==================================================================
  // ==================================================================
  // ==================================================================
  // ==================================================================
  // ==================================================================

  // verifyOTP then post user or doctor
  function verifyOTP(e) {
    e.preventDefault();
    setIsOTPtrue(true);
    if (isOTPtrue == true && iamdoctor == true) {
      postDoctor();
    } else if (isOTPtrue == true && iamdoctor == false) {
      postUser();
    }
  }

  // verfyOTP for Patient
  async function verfyOTPforPatient() {
    await axios
      .post("https://egada.vercel.app/patient/verifyOtp", {
        mobile: userPhone,
        otpCode: userVerficitionCode,
      })
      .then((res) => {
        setIsOTPtrue(true);
        setIsError(false);
        setUserVerficitionCodeErrorMessage("");
      })
      .catch((err) => {
        setIsOTPtrue(true); // assume  OTP true =================================
        setIsError(true); // assume  OTP true =================================
        setUserVerficitionCodeErrorMessage(""); // assume  OTP true =================================
      });
  }
  // verfyOTP for Doctor
  async function verfyOTPforDoctor() {
    await axios
      .post("https://egada.vercel.app/doctor/verifyOtp", {
        mobile: userPhone,
        otpCode: userVerficitionCode,
      })
      .then((res) => {
        setIsOTPtrue(true);
        setIsError(false);
        setUserVerficitionCodeErrorMessage("");
      })
      .catch((err) => {
        setIsOTPtrue(true); // assume  OTP true =================================
        setIsError(true); // assume  OTP true =================================
        setUserVerficitionCodeErrorMessage(""); // assume  OTP true =================================
      });
  }
  // post user
  async function postUser() {
    await axios
      .post("https://egada.vercel.app/patient", {
        name: userName,
        mobile: userPhone,
        dob: "03-21-2002",
      })
      .then((res) => {
        setIsUserPosted(true);
        setIsError(false);
        console.log("res.data.body");
        console.log(res.data.body);
        // send data to localstorage
        props.setUserData(res.data.body);
        if (isChecked) {
          localStorage.setItem("userSignIn", JSON.stringify(res.data.body));
        }
      })
      .catch((err) => {
        setIsUserPosted(false);
        setIsError(true);
      });
  }
  // post doctor
  async function postDoctor() {
    await axios
      .post("https://egada.vercel.app/doctor/", {
        name: userName,
        mobile: userPhone,
        dept: department,
        address: "طنطا-الغربية",
        fee: 160,
        desc: description,
        govern: doctorGovern,
      })
      .then((res) => {
        setIsUserPosted(true);
        setIsError(false);
        props.setUserData(res.data.body);
        // send data to localstorage
        if (isChecked) {
          localStorage.setItem("userSignIn", JSON.stringify(res.data.body));
        }
      })
      .catch((err) => {
        setIsUserPosted(false);
        setIsError(true);
      });
  }
  // get all departments
  const [depArr, setDepArr] = useState([]);
  useEffect(() => {
    axios.get("https://egada.vercel.app/lookup/depts").then((res) => {
      setDepArr(res.data.body);
    });
  });
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
                        className="ourInput"
                        value={userPhone}
                        onChange={(e) => {
                          setUserPhone(e.target.value);
                        }}
                      />
                      <div className="text-right text-red-600">
                        {userPhoneErrorMessage}
                      </div>
                    </div>
                    {iamdoctor && (
                      <div>
                        <div>
                          <label className="label">نبذة عن الطبيب</label>
                          <input
                            required
                            type="text"
                            className="ourInput mb-5"
                            value={description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label className="label">التخصص</label>
                          <select
                            required
                            defaultValue={" "}
                            name=" "
                            className="AppiontmentInput"
                            onChange={(e) => {
                              setDepartment(e.target.value);
                            }}
                          >
                            <option value="" hidden></option>
                            {depArr.map((item) => (
                              <option key={item._id} value={item._id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="label">المحافظة</label>
                          <select
                            required
                            className="AppiontmentInput"
                            onChange={(e) => {
                              setDoctorGovern(e.target.value);
                            }}
                          >
                            <option value="" hidden></option>
                            <option value="القاهرة">القاهرة</option>
                            <option value="الإسكندرية">الأسكندرية</option>
                            <option value="الجيزة">الجيزة</option>
                            <option value="الدقهلية">الدقهلية</option>
                            <option value="الدقهلية">الدقهلية</option>
                            <option value="المنوفية">المنوفية</option>
                            <option value="القليوبية">القليوبية</option>
                            <option value="البحيرة">البحيرة</option>
                            <option value="الغربية">الغربية</option>
                            <option value="بور سعيد">بور سعيد</option>
                            <option value="دمياط">دمياط</option>
                            <option value="الإسماعيلية">الإسماعيلية</option>
                            <option value="السويس">السويس</option>
                            <option value="كفر الشيخ">كفر الشيخ</option>
                            <option value="الفيوم">الفيوم</option>
                            <option value="بني سويف">بني سويف</option>
                            <option value="مطروح">مطروح</option>
                            <option value="شمال سيناء">شمال سيناء</option>
                            <option value="جنوب سيناء">جنوب سيناء</option>
                            <option value="المنيا">المنيا</option>
                            <option value="أسيوط">أسيوط</option>
                            <option value="سوهاج">سوهاج</option>
                            <option value="قنا">قنا</option>
                            <option value="البحر الأحمر">البحر الأحمر</option>
                            <option value="الأقصر">الأقصر</option>
                            <option value="أسوان">أسوان</option>
                            <option value="الواحات">الواحات</option>
                            <option value="الوادي الجديد">الوادي الجديد</option>
                          </select>
                        </div>
                      </div>
                    )}
                    <div className="text-right text-red-600">
                      {doctorDataMessage}
                    </div>
                    <div className="text-right">
                      <label
                        className="inline-block pr-2 cursor-pointer"
                        htmlFor="RememberMeCheckBoxSingUp"
                      >
                        تذكرني
                      </label>
                      <input
                        id="RememberMeCheckBoxSingUp"
                        type="checkbox"
                        onChange={(e) => {
                          setIsChecked(e.target.checked);
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="text-right">
                      <label
                        className="inline-block pr-2 pt-2 cursor-pointer"
                        htmlFor="checkBoxIamDoctor"
                      >
                        طبيب
                      </label>
                      <input
                        id="checkBoxIamDoctor"
                        type="checkbox"
                        onChange={(e) => {
                          setIamdoctor(e.target.checked);
                        }}
                        className="cursor-pointer"
                      />
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

                    <button
                      onClick={verifyOTP}
                      className="mt-4 w-full bg-blue-1 text-white py-2 rounded-md text-lg tracking-wide"
                    >
                      تأكيد
                    </button>
                  </div>
                )}
              </div>
              {/* {isError && (
                <div className="text-center pt-5 text-red-600">
                  خطأ تقني يرجي المحاولة لاحقا
                </div>
              )} */}
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
