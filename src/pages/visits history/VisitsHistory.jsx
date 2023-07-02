import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VisitsHistory(props) {
  // reservations
  const [doneReservationsArr, setDoneReservationsArr] = useState([]);
  const [cancledReservationsArr, setCancledReservationsArr] = useState([]);
  const [pendingReservationsArr, setPendingReservationsArr] = useState([]);
  useEffect(() => {
    DoneReservation();
    cancledReservation();
    pendingReservation();
  }, []);
  // done reservations
  async function DoneReservation() {
    await axios
      .get(
        "https://egada.vercel.app/patient/doneReservations/" +
          props.userData._id
      )
      .then((res) => {
        setDoneReservationsArr(res.data.body);
      })
      .catch((err) => console.log(err));
  }
  // calcled reservations
  async function cancledReservation() {
    await axios
      .get(
        "https://egada.vercel.app/patient/doneReservations/" +
          props.userData._id
      )
      .then((res) => {
        setCancledReservationsArr(res.data.body);
      })
      .catch((err) => console.log(err));
  }
  // pending reservations
  async function pendingReservation() {
    await axios
      .get(
        "https://egada.vercel.app/patient/reservations/" + props.userData._id
      )
      .then((res) => {
        setPendingReservationsArr(res.data.body);
      })
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        {/* section 1 */}
        <div className="text-5xl text-center py-7">
          سجل <span className="text-blue-1">الكشوفات</span>
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
                    {pendingReservationsArr.map((item) => (
                      <tr className="bg-white border-b">
                        <td className="tdStyle text-[#8a2be2]">
                          في الإنتظار
                        </td>
                        <td className="tdStyle">{props.userData.mobile}</td>
                        <td className="tdStyle">{(item.date + "").slice(0, 10)}</td>
                        <td className="tdStyle">
                          {item.doctor.name}
                          <br />
                          {item.doctor.dept.name}
                        </td>
                        <td className="tdStyle">{props.userData.name}</td>
                      </tr>
                    ))}

                    {doneReservationsArr.map((item) => (
                      <tr className="bg-white border-b">
                        <td className="tdStyle text-green-600">
                          إنتهي
                        </td>
                        <td className="tdStyle">{props.userData.mobile}</td>
                        <td className="tdStyle">{(item.date + "").slice(0, 10)}</td>
                        <td className="tdStyle">
                          {item.doctor.name}
                          <br />
                          {item.doctor.dept.name}
                        </td>
                        <td className="tdStyle">{props.userData.name}</td>
                      </tr>
                    ))}

                    {cancledReservationsArr.map((item) => (
                      <tr className="bg-white border-b">
                        <td className="tdStyle text-red-600">
                          تم إلغائه
                        </td>
                        <td className="tdStyle">{props.userData.mobile}</td>
                        <td className="tdStyle">{(item.date + "").slice(0, 10)}</td>
                        <td className="tdStyle">
                          {item.doctor.name}
                          <br />
                          {item.doctor.dept.name}
                        </td>
                        <td className="tdStyle">{props.userData.name}</td>
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
