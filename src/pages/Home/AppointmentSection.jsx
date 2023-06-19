import axios from "axios";
import React, { useState, useEffect } from "react";
import "tw-elements";

export default function AppointmentSection() {
  // Appointment data
  const [patientName, setPatientName] = useState(null);
  const [patientPhone, setPatientPhone] = useState(null);
  const [theDepartment, setTheDepartment] = useState(null);
  const [theDoctor, setTheDoctor] = useState(null);
  const [theDetectionType, setTheDetectionType] = useState(null);
  const [theDate, setTheDate] = useState(null);
  const [theAvailableTime, setTheAvailableTime] = useState(null);
  const [thePaymentWay, setPaymentWay] = useState(null);
  // handleSubmit fn
  const handleSubmit = async (e) => {
    e.preventDefault();
    async function userdata() {
      await axios
        .post("https://egada.vercel.app/reservation", {})
        .then((res) => {
          console.log(res.data);
          document.getElementById("appointmentform").reset();
        });
    }
    userdata();
  };
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
                  required
                  type="text"
                  className="AppiontmentInput text-right"
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>

              <div className="w-full">
                <div className="mb-1 font-semibold">رقم الهاتف</div>
                <input
                  required
                  type="number"
                  className="AppiontmentInput text-right"
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
              </div>
              <div className="w-full">
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
              </div>
              <div className="w-full">
                <div className="mb-1 font-semibold">إختر الطبيب</div>
                <select
                  required
                  defaultValue={" "}
                  name=""
                  className="AppiontmentInput"
                  onChange={(e) => {
                    setTheDoctor(e.target.value);
                  }}
                >
                  <option value="" hidden></option>
                  <option value="عبدالرحيم صقر">عبدالرحيم صقر</option>
                  <option value="عبدالرحيم صقر">عبدالرحيم صقر</option>
                  <option value="عبدالرحيم صقر">عبدالرحيم صقر</option>
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

              <div className="w-full flex justify-between items-start">
                <div className="w-full mr-7">
                  <div className="mb-1 font-semibold">الأوقات المتاحة</div>
                  <select
                    required
                    defaultValue={" "}
                    name="available time"
                    className="AppiontmentInput"
                    onChange={(e) => {
                      setTheAvailableTime(e.target.value);
                    }}
                  >
                    <option value="" hidden></option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                  </select>
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

              <div className="flex justify-end items-center  mt-10">
                <input
                  type="reset"
                  value="إلغاء"
                  className="cursor-pointer mr-5 text-xl"
                />
                <input
                  type="submit"
                  value="إحجز الآن"
                  className="text-2xl min-w-[10vw] py-2 px-4 rounded shadow-md cursor-pointer bg-blue-1 text-white"
                />
              </div>

              <div className="text-3xl font-extrabold  mt-10 text-green-500">
                تم الحجز بنجاح
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
