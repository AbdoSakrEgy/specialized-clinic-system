import React, { useEffect, useState } from "react";
import AddNewPatient from "./AddNewPatient";
import axios from "axios";

export default function VisitsHistoryDoctorView(props) {
  const [selectedButton, setSelectedButton] = useState(false);

  const [reservationsArr, setReservationArr] = useState([]);
  const [todayReservationsArr, setTodayReservationArr] = useState([]);
  useEffect(() => {
    getReservationsArr();
    getTodayReservationsArr();
  }, [selectedButton]);
  // get todayReservations array
  async function getTodayReservationsArr() {
    await axios
      .get(
        "https://egada.vercel.app/doctor/TodayReservations/" +
          props.userData._id
      )
      .then((res) => {
        setTodayReservationArr(res.data.body);
        console.log("getToday");
        console.log(res.data.body);
      })
      .catch((err) => console.log(err));
  }
  // get reservations array
  async function getReservationsArr() {
    await axios
      .get("https://egada.vercel.app/doctor/reservations/" + props.userData._id)
      .then((res) => {
        setReservationArr(res.data.body);
        console.log("getReserv");
        console.log(document.getElementById("slectedbtn").checked);
        console.log(Array.isArray(reservationsArr));
        console.log(Array.isArray(todayReservationsArr));
        console.log(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // handleDone
  const handleDone = (id) => {
    axios
      .put("https://egada.vercel.app/reservation/doneReservation/" + id)
      .then((res) => {
        getReservationsArr();
      })
      .catch((err) => console.log(err));
  };
  // handleCancle
  const handleCancle = (id) => {
    axios
      .put("https://egada.vercel.app/reservation/cancelledReservation/" + id)
      .then((res) => {
        getReservationsArr();
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        {/* section 1 */}
        <div className="text-5xl text-center py-7">
          سجل <span className="text-blue-1">الحجوزات</span>
        </div>
        {/* section 2 */}
        <div className="flex justify-between items-end mx-10 mt-20">
          <div className="flex justify-between items-center">
            <label className="switch">
              <input
                type="checkbox"
                id="slectedbtn"
                onClick={(e) => {
                  setSelectedButton(e.target.checked);
                  console.log(selectedButton);
                }}
              />
              <span className="slider round"></span>
            </label>
            <span className="pl-3 text-lg font-bold text-center">
              عرض كل الحجوزات
            </span>
          </div>
          <div className="text-3xl font-bold text-center">
            {selectedButton ? "كل الحجوزات" : "حجوزات اليوم"}
          </div>

          {/* <div className="relative inline-flex mr-10">
            <input
              onChange={(e) => setSelectedDate(e.target.value)}
              type="date"
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            />
          </div> */}
          {/* <AddNewPatient /> */}
        </div>
        {/* section 3 */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-5 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-blue-2 text-white border-b text-lg font-extrabold">
                    <tr>
                      <th scope="col" className="thStyle"></th>
                      <th scope="col" className="thStyle">
                        حالة الكشف
                      </th>
                      <th scope="col" className="thStyle">
                        رقم الهاتف
                      </th>
                      <th scope="col" className="thStyle">
                        التاريخ
                      </th>
                      <th scope="col" className="thStyle">
                        المريض
                      </th>
                    </tr>
                  </thead>
                  {selectedButton ? (
                    <tbody className="text-base font-medium text-black">
                      {Array.isArray(reservationsArr)
                        ? reservationsArr.map((item) => (
                            <tr key={item._id} className="bg-white border-b">
                              <td className="tdStyle flex justify-between">
                                <button
                                  onClick={() => handleCancle(item._id)}
                                  type="button"
                                  className="rounded-lg p-3 bg-red-600 text-white"
                                >
                                  إلغاء
                                </button>
                                <button
                                  onClick={() => handleDone(item._id)}
                                  type="button"
                                  className="rounded-lg p-3 w-[60%] bg-green-600 text-white"
                                >
                                  إنهاء
                                </button>
                              </td>
                              <td className="tdStyle text-[#8a2be2]">
                                في الإنتظار
                              </td>
                              <td className="tdStyle">
                                {props.userData.mobile}
                              </td>
                              <td className="tdStyle">
                                {(item.date + "").slice(0, 10)}
                              </td>
                              <td className="tdStyle">{item.patient.name}</td>
                            </tr>
                          ))
                        : ""}
                    </tbody>
                  ) : (
                    <tbody className="text-base font-medium text-black">
                      {Array.isArray(todayReservationsArr)
                        ? todayReservationsArr.map((item) => (
                            <tr key={item._id} className="bg-white border-b">
                              <td className="tdStyle flex justify-between">
                                <button
                                  onClick={() => handleCancle(item._id)}
                                  type="button"
                                  className="rounded-lg p-3 bg-red-600 text-white"
                                >
                                  إلغاء
                                </button>
                                <button
                                  onClick={() => handleDone(item._id)}
                                  type="button"
                                  className="rounded-lg p-3 w-[60%] bg-green-600 text-white"
                                >
                                  إنهاء
                                </button>
                              </td>
                              <td className="tdStyle text-[#8a2be2]">
                                في الإنتظار
                              </td>
                              <td className="tdStyle">
                                {props.userData.mobile}
                              </td>
                              <td className="tdStyle">
                                {(item.date + "").slice(0, 10)}
                              </td>
                              <td className="tdStyle">{item.patient.name}</td>
                            </tr>
                          ))
                        : ""}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
