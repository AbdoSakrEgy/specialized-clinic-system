import axios from "axios";
import React, { useEffect, useState } from "react";
// 1->الإثنين

export default function TimeManagement(props) {
  // get all schedules
  const [daysArr, setDaysArr] = useState([]);
  const [day1Data, setDay1Data] = useState({});
  const [day2Data, setDay2Data] = useState({});
  const [day3Data, setDay3Data] = useState({});
  const [day4Data, setDay4Data] = useState({});
  const [day5Data, setDay5Data] = useState({});
  const [day6Data, setDay6Data] = useState({});
  const [day7Data, setDay7Data] = useState({});

  async function fillDaysArr() {
    // setDaysArr();
    await axios
      .get("https://egada.vercel.app/doctor/schedules/" + props.userData._id)
      .then((res) => {
        setDaysArr(res.data.body);
        fillDays();
        console.log(daysArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fillDays() {
    setDay1Data({});
    setDay2Data({});
    setDay3Data({});
    setDay4Data({});
    setDay5Data({});
    setDay6Data({});
    setDay7Data({});
    if (daysArr.length != 0) {
      for (let i = 0; i < daysArr.length; i++) {
        switch (daysArr[i].day) {
          case 1:
            setDay1Data(daysArr[i]);
            break;
          case 2:
            setDay2Data(daysArr[i]);
            break;
          case 3:
            setDay3Data(daysArr[i]);
            break;
          case 4:
            setDay4Data(daysArr[i]);
            break;
          case 5:
            setDay5Data(daysArr[i]);
            break;
          case 6:
            setDay6Data(daysArr[i]);
            break;
          case 7:
            setDay7Data(daysArr[i]);
            break;
          default:
            console.log("no schedules");
        }
      }
    }
  }

  useEffect(async() => {
    fillDaysArr();
  }, []);

  window.onload = fillDaysArr;

  // postSchedule
  async function postSchedule(dayNum, from, to) {
    await axios
      .post(
        "https://egada.vercel.app/doctor/addSchedules/" + props.userData._id,
        {
          fromHr: from,
          fromMin: 0,
          toHr: to,
          toMin: 0,
          day: dayNum,
        }
      )
      .then((res) => {
        console.log("post done");
      })
      .catch((err) => {
        console.log(err);
        console.log("post not done");
      });
  }

  // put schedule
  async function putSchedule(dayNum, from, to) {
    let scheduleID = "";
    for (let i = 0; i < daysArr.length; i++) {
      if (daysArr[i].day == dayNum) {
        scheduleID = daysArr[i]._id;
        console.log(daysArr[i]._id);
        console.log("loop done");
      }
    }
    await axios
      .put(
        "https://egada.vercel.app/doctor/" +
          props.userData._id +
          "/schedules/" +
          scheduleID,
        {
          fromHr: from,
          fromMin: 0,
          toHr: to,
          toMin: 0,
          day: dayNum,
        }
      )
      .then((res) => {
        console.log("put done");
      })
      .catch((err) => {
        console.log("put not done");
        console.log(err);
      });
  }

  // delete schedules
  async function deleteSchedule(dayNum) {
    let scheduleID = "";
    for (let i = 0; i < daysArr.length; i++) {
      if (daysArr[i].day == dayNum) {
        scheduleID = daysArr[i]._id;
        console.log(daysArr[i]._id);
        console.log("loop done");
      }
    }
    await axios
      .delete("https://egada.vercel.app/doctor/schedule/delete/" + scheduleID)
      .then((res) => {
        console.log("delete done");
      })
      .catch((err) => {
        console.log(err);
        console.log("delete not done");
      });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-5xl text-center py-7">
        إدارة <span className="text-blue-1">المواعيد</span>
      </div>
      <div className="text-lg text-gray-2 text-right py-7 pr-5">
        يرجي إدخال المواعيد بنظام ال 24 ساعة
      </div>
      <div className="text-lg text-right pt-5 pr-20 bg-blue-1 text-white">
        <button
          onClick={fillDaysArr}
          className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
        >
          تحديث البيانات
        </button>
      </div>

      <div className="flex flex-wrap justify-between px-16 py-5 text-right bg-blue-1 text-white">
        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day1Data).length) {
              await putSchedule(
                1,
                document.getElementById("fromDay1").value,
                document.getElementById("toDay1").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                1,
                document.getElementById("fromDay1").value,
                document.getElementById("toDay1").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">الإثنين</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay1"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay1"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(1);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day1Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day1Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day1Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>
        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day7Data).length) {
              await putSchedule(
                7,
                document.getElementById("fromDay7").value,
                document.getElementById("toDay7").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                7,
                document.getElementById("fromDay7").value,
                document.getElementById("toDay7").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">الأحد</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay7"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay7"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(7);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day7Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day7Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day7Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>
        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day6Data).length) {
              await putSchedule(
                6,
                document.getElementById("fromDay6").value,
                document.getElementById("toDay6").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                6,
                document.getElementById("fromDay6").value,
                document.getElementById("toDay6").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">السبت</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay6"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay6"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(6);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day6Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day6Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day6Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>
      </div>
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      <div className="flex flex-wrap justify-between px-16 py-5 text-right bg-blue-1 text-white">
        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day4Data).length) {
              await putSchedule(
                4,
                document.getElementById("fromDay4").value,
                document.getElementById("toDay4").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                4,
                document.getElementById("fromDay4").value,
                document.getElementById("toDay4").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">الخميس</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay4"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay4"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(4);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day4Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day4Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day4Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>
        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day3Data).length) {
              await putSchedule(
                3,
                document.getElementById("fromDay3").value,
                document.getElementById("toDay3").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                3,
                document.getElementById("fromDay3").value,
                document.getElementById("toDay3").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">الأربعاء</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay3"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay3"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(3);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day3Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day3Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day3Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>

        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day2Data).length) {
              await putSchedule(
                2,
                document.getElementById("fromDay2").value,
                document.getElementById("toDay2").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                2,
                document.getElementById("fromDay2").value,
                document.getElementById("toDay2").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">الثلاثاء</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay2"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay2"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(2);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day2Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day2Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day2Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>
      </div>
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      {/* ----------- */}
      <div className="flex flex-wrap justify-end px-16 py-5 text-right bg-blue-1 text-white">
        {/* ======================================================================= */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fillDaysArr();
            if (Object.keys(day5Data).length) {
              await putSchedule(
                5,
                document.getElementById("fromDay5").value,
                document.getElementById("toDay5").value
              );
              await fillDaysArr();
            } else {
              await postSchedule(
                5,
                document.getElementById("fromDay5").value,
                document.getElementById("toDay5").value
              );
              await fillDaysArr();
            }
          }}
          className="flex flex-col w-[25%] rounded-lg m-2 items-end p-2 bg-blue-2"
        >
          <div className="pb-5 text-lg font-semibold">الجمعة</div>
          <div className="">متاح من الساعة</div>
          <input
            required
            id="fromDay5"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay5"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="23"
          />
          <div className="flex justify-between w-full">
            <button
              type="button"
              className="mt-2 text-xl px-3 py-1 rounded bg-red-800 text-white"
              onClick={async () => {
                await deleteSchedule(5);
                await fillDaysArr();
              }}
            >
              غير متاح هذا اليوم
            </button>
            <button
              type="submit"
              className="mt-2 text-xl px-3 py-1 rounded bg-green-600 text-white"
            >
              حفظ
            </button>
          </div>
          <div className="pt-5 text-center w-full">
            {Object.keys(day5Data).length ? (
              <span>
                <span>متاح من الساعة </span>
                <span>{day5Data.fromHr}</span>
                <span> إلي </span>
                <span> الساعة </span>
                <span>{day5Data.toHr}</span>
              </span>
            ) : (
              "غير متاح هذا اليوم"
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
