import axios from "axios";
import React, { useState, useEffect } from "react";
import "tw-elements";

export default function AppointmentSection(props) {
  // Appointment data
  const [patientName, setPatientName] = useState(null);
  const [patientPhone, setPatientPhone] = useState(null);
  const [theDepartment, setTheDepartment] = useState(null);
  const [theDoctorID, setTheDoctorID] = useState(null);
  const [theDetectionType, setTheDetectionType] = useState(null);
  const [theDate, setTheDate] = useState(null);
  const [theAvailableTime, setTheAvailableTime] = useState(null);
  const [thePaymentWay, setPaymentWay] = useState(null);
  // handleSubmit fn
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          alert("تم الحجز بنجاح");
        });
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
  // get avilable times
  const [avilableTimes, setAbilableTimes] = useState(null);
  useEffect(() => {
    async function getAvilableTimes() {
      await axios
        .get("https://egada.vercel.app/doctor/schedules/" + theDoctorID)
        .then((res) => {
          console.log(res.data.body);
          console.log(avilableTimes);
          setAbilableTimes(res.data.body);
        })
        .catch((err) => console.log(err));
    }
    if (theDate != null) getAvilableTimes();
  }, [theDate]);

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
              onSubmit={handleSubmit}
              className="AppiontmentForm"
            >
              <div className="w-full">
                <div className="mb-1 font-semibold">اسم المريض</div>
                <input
                  value={props.userData.name}
                  type="text"
                  className="AppiontmentInput text-right"
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>

              <div className="w-full">
                <div className="mb-1 font-semibold">رقم الهاتف</div>
                <input
                  value={props.userData.mobile}
                  type="number"
                  className="AppiontmentInput text-right"
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
              </div>

              {/* <div className="w-full">
                <div className="mb-1 font-semibold">إختر التخصص</div>
                <select
                  required
                  defaultValue={" "}
                  name=""
                  className="AppiontmentInput"
                  onChange={(e) => {
                    setTheDepartment(e.target.value);
                  }}
                >
                  <option value="" hidden></option>
                  <option value="dentist">أسنان</option>
                  <option value="internist">باطنة</option>
                  <option value="ENT">أنف وأذن وحنجرة</option>
                </select>
              </div> */}
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

              <div className="w-full">
                <div className="mb-1 font-semibold">نوع الكشف</div>
                <select
                  required
                  defaultValue={" "}
                  name="available time"
                  className="AppiontmentInput"
                  onChange={(e) => {
                    setTheDetectionType(e.target.value);
                  }}
                >
                  <option value="" hidden></option>
                  <option value="كشف جديد">كشف جديد</option>
                  <option value="إعادة كشف">إعادة كشف</option>
                </select>
              </div>

              <div className="w-full flex justify-between">
                <div className="w-full mr-7 flex flex-col">
                  <div className="mb-1 font-semibold">الأوقات المتاحة</div>
                  <div className="AppiontmentInput hover:cursor-default h-full">
                    {avilableTimes
                      ? ` من ${avilableTimes[0].fromHr} إلي ${avilableTimes[0].toHr}`
                      : ""}
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-1 font-semibold">تاريخ الموعد</div>
                  <input
                    required
                    type="date"
                    className="AppiontmentInput"
                    onChange={(e) => {
                      setTheDate(e.target.value);
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
                  onChange={(e) => {
                    setPaymentWay(e.target.value);
                  }}
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
                    // onClick={() => console.log(props.userData.desc)}
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
                      // onClick={() => console.log(props.userData)}
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
