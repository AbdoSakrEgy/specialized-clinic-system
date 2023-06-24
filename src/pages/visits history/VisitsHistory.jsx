import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VisitsHistory(props) {
  const [reservationArray, setReservationArray] = useState([]);
  useEffect(() => {
  async function patientReservation() {
    await axios
      .get(
        "https://egada.vercel.app/patient/reservations/" + props.userData._id
      )
      .then((res) => {
        setReservationArray(res.data.body);
      })
      .catch((err) => console.log(err));
  }
    patientReservation();
  }, []);

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        {/* section 1 */}
        <div className="text-5xl text-center py-7">
          سجل <span className="text-blue-1">الكشوفات</span>
        </div>
        {/* section 2 */}
        <div className="flex justify-end items-center mx-10 mt-20">
          <div className="relative inline-flex ml-10">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>حالة الكشف</option>
              <option>في الإنتظار</option>
              <option>إنتهي</option>
              <option>تم إلغائه</option>
            </select>
          </div>

          <div className="relative inline-flex ml-10">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>نوع الكشف</option>
              <option>كشف جديد</option>
              <option>إعادة</option>
            </select>
          </div>

          <div className="relative inline-flex ml-10">
            <input
              type="date"
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            />
          </div>
        </div>
        {/* section 3 */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-5 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-blue-2 text-white border-b text-lg font-extrabold">
                    <tr>
                      <th scope="col" className="thStyle">
                        حالة الكشف
                      </th>
                      <th scope="col" className="thStyle">
                        نوع الكشف
                      </th>
                      <th scope="col" className="thStyle">
                        رقم الهاتف
                      </th>
                      <th scope="col" className="thStyle">
                        التاريخ
                      </th>
                      <th scope="col" className="thStyle">
                        الطبيب
                      </th>
                      <th scope="col" className="thStyle">
                        المريض
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base font-medium text-black">
                    {reservationArray.map((item) => (
                      <tr className="bg-white border-b">
                        <td className="tdStyle text-[#8a2be2]">
                          {item.done ? "في الإنتظار" : "إنتهي"}
                        </td>
                        <td className="tdStyle">كشف جديد</td>
                        <td className="tdStyle">{props.userData.mobile}</td>
                        <td className="tdStyle">{item.date}</td>
                        <td className="tdStyle">
                          {props.userData.name}
                          <br />
                          {item.doctor.dept.name}
                        </td>
                        <td className="tdStyle">{item.doctor.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
