import axios from "axios";
import React, { useState, useEffect } from "react";
import "tw-elements";

export default function AppointmentSection(props) {
  // Appointment data
  const [theDoctorID, setTheDoctorID] = useState("");
  const [theDate, setTheDate] = useState(null);
  // handleSubmit fn
  const handleSubmit = async () => {
    async function postAppointment() {
      await axios
        .post("https://egada.vercel.app/reservation", {
          patientId: props.userData._id,
          doctorId: theDoctorID,
          scheduleId: "6459177b1b24462990a67ce0",
          dateTime: theDate,
        })
        .then((res) => {
          console.log(res.data);
          document.getElementById("appointmentform").reset();
          setTheDate(null);
          alert("تم الحجز بنجاح");
        })
        .catch((err) => console.log(err));
    }
    if (Object.keys(props.userData).length) {
      postAppointment();
    } else {
      alert("يرجي تسجيل الدخول أولا!");
    }
  };

  // get all doctors
  const [allDoctorsArray, setAllDoctorsArray] = useState([]);
  useEffect(() => {
    async function getAllDoctors() {
      await axios
        .get("https://egada.vercel.app/doctor/all")
        .then((res) => {
          setAllDoctorsArray(res.data.body);
        })
        .catch((err) => console.log(err));
    }
    getAllDoctors();
  }, []);

  // get all schedules of selected doctor
  const [allSchedulesArr, setAllSchedulesArr] = useState([]);
  useEffect(() => {
    async function selectedDoctorTimes() {
      await axios
        .get("https://egada.vercel.app/doctor/schedules/" + theDoctorID)
        .then((res) => {
          setAllSchedulesArr(res.data.body);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (theDoctorID.length != 0) {
      selectedDoctorTimes();
    }
  }, [theDoctorID]);

  const [selectedDayData, setSelectedDayData] = useState({});
  const [dayNumber, setDayNumber] = useState(null);
  useEffect(() => {
    if (theDoctorID.length != 0 && theDate != null) {
      for (let i = 0; i < allSchedulesArr.length; i++) {
        if (allSchedulesArr[i].day === dayNumber) {
          setSelectedDayData(allSchedulesArr[i]);
          break;
        } else {
          setSelectedDayData({});
        }
      }
    }
  }, [theDate, allSchedulesArr, dayNumber]);

  //disable past dates in datepicker
  var date = new Date();
  var tday = date.getDate();
  var tmonth = date.getMonth() + 1;
  var tyear = date.getUTCFullYear();
  if (tday < 10) {
    tday = "0" + tday;
  }
  if (tmonth < 10) {
    tmonth = "0" + tmonth;
  }
  var minDate = tyear + "-" + tmonth + "-" + tday;

  return (
    <React.Fragment>
      <div className="h-fit mx-10 pb-40" id="AppointmentSection">
        <div className="text-center">
          <div className="text-5xl font-semibold mb-16">
            احجز <span className="text-blue-1">موعدك</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <img src={require("../../Images/Appointment.png")} alt="..." />
          </div>
          <div className="h-fit w-1/2">
            <form
              id="appointmentform"
              onSubmit={(e) => {
                e.preventDefault();
                if (Object.keys(selectedDayData).length) {
                  handleSubmit();
                } else {
                  alert("لا يمكن حجز موعد في هذا اليوم");
                }
              }}
              className="AppiontmentForm"
            >
              <div className="w-full">
                <div className="mb-1 font-semibold">اسم المريض</div>
                <input
                  value={props.userData.name}
                  type="text"
                  className="AppiontmentInput text-right"
                />
              </div>

              <div className="w-full">
                <div className="mb-1 font-semibold">رقم الهاتف</div>
                <input
                  value={props.userData.mobile}
                  type="number"
                  className="AppiontmentInput text-right"
                />
              </div>
              <div className="w-full">
                <div className="mb-1 font-semibold">إختر الطبيب</div>
                <select
                  required
                  defaultValue={" "}
                  name=""
                  className="AppiontmentInput"
                  onChange={(e) => {
                    setTheDoctorID(e.target.value);
                  }}
                >
                  <option value="" hidden></option>
                  {allDoctorsArray.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-full mr-7 flex flex-col">
                  <div className="mb-1 font-semibold">الأوقات المتاحة</div>
                  <div className="AppiontmentInput flex justify-end items-center text-base hover:cursor-default h-full">
                    {theDoctorID.length != 0 ? (
                      theDate != null ? (
                        Object.keys(selectedDayData).length === 0 ? (
                          "لاتوجد أوقات متاحة لهذا اليوم"
                        ) : (
                          <span>
                            <span> من </span>
                            <span>{selectedDayData.fromHr}</span>
                            <span> إلي </span>
                            <span>{selectedDayData.toHr}</span>
                          </span>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* 
                    {theDoctorID.length != 0 && theDate != null
                      ? (Object.keys(selectedDayData).length = 0 ? (
                          "لاتوجد أوقات متاحة لهذا اليوم"
                        ) : (
                          <span>
                            <span> من </span>
                            <span>{selectedDayData.fromHr}</span>
                            <span> إلي </span>
                            <span>{selectedDayData.toHr}</span>
                          </span>
                        ))
                      : ""} */}
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-1 font-semibold">تاريخ الموعد</div>
                  <input
                    required
                    type="date"
                    min={minDate}
                    className="AppiontmentInput"
                    onChange={(e) => {
                      setTheDate(e.target.value);
                      const d = new Date(e.target.value);
                      const dayNum = d.getDay();
                      if (dayNum === 0) {
                        setDayNumber(7);
                      } else {
                        setDayNumber(dayNum);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="mb-1 font-semibold">طريقة الدفع</div>
                <select
                  required
                  defaultValue={" "}
                  name=" "
                  className="AppiontmentInput"
                >
                  <option value="" hidden></option>
                  <option value="عند الطبيب">عند الطبيب</option>
                </select>
              </div>
              {Object.keys(props.userData).length &&
              !props.userData.hasOwnProperty("desc") ? (
                <div className="flex justify-end items-center  mt-10">
                  <input
                    type="reset"
                    value="إلغاء"
                    className="cursor-pointer mr-5 text-xl"
                    onClick={() => {
                      setTheDate(null);
                    }}
                  />
                  <input
                    type="submit"
                    value="إحجز الآن"
                    className="text-2xl min-w-[10vw] py-2 px-4 rounded shadow-md cursor-pointer bg-blue-1 text-white"
                  />
                </div>
              ) : (
                <span>
                  <div className="flex justify-end items-center  mt-10">
                    <input
                      disabled
                      type="reset"
                      value="إلغاء"
                      className="cursor-pointer mr-5 text-xl"
                    />
                    <input
                      disabled
                      type="submit"
                      value="إحجز الآن"
                      className="text-2xl min-w-[10vw] py-2 px-4 rounded shadow-md cursor-pointer bg-gray-400 text-white"
                    />
                  </div>
                  <div className="w-full rounded-lg p-2 mt-2 text-xl  bg-green-600 text-white">
                    ! قم بتسجيل الدخول كمستخدم للتمكن من حجز موعدك
                  </div>
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
