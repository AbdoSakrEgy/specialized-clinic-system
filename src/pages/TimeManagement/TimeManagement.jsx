import axios from "axios";
import React, { useState } from "react";
// 1->الإثنين

export default function TimeManagement(props) {
  // post schedules
  async function postSchedule(day, from, to) {
    await axios
      .post(
        "https://egada.vercel.app/doctor/addSchedules/" + props.userData._id,
        {
          fromHr: from,
          fromMin: 0,
          toHr: to,
          toMin: 0,
          day: day,
        }
      )
      .then((res) => {
        console.log(res.data.body);
        console.log("donnnnnnne");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-5xl text-center py-7">
        إدارة <span className="text-blue-1">المواعيد</span>
      </div>
      <div className="text-lg text-gray-2 text-right py-7 pr-5">
        يرجي إدخال المواعيد بنظام ال 24 ساعة
      </div>

      <div className="flex flex-wrap justify-between px-16 py-5 text-right bg-blue-1 text-white">
        {/* ======================================================================= */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              1,
              document.getElementById("fromDay1").value,
              document.getElementById("toDay1").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay1"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
        </form>
        {/* ======================================================================= */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              7,
              document.getElementById("fromDay7").value,
              document.getElementById("toDay7").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay7"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
        </form>
        {/* ======================================================================= */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              6,
              document.getElementById("fromDay6").value,
              document.getElementById("toDay6").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay6"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
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
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              4,
              document.getElementById("fromDay4").value,
              document.getElementById("toDay4").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay4"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
        </form>
        {/* ======================================================================= */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              3,
              document.getElementById("fromDay3").value,
              document.getElementById("toDay3").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay3"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
        </form>

        {/* ======================================================================= */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              2,
              document.getElementById("fromDay2").value,
              document.getElementById("toDay2").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay2"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
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
          onSubmit={(e) => {
            e.preventDefault();
            postSchedule(
              5,
              document.getElementById("fromDay5").value,
              document.getElementById("toDay5").value
            );
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
            max="24"
          />
          <div className="">إلي الساعة</div>
          <input
            required
            id="toDay5"
            type="number"
            className="w-full rounded text-right px-2 mb-2 mt-1 text-black"
            min="1"
            max="24"
          />
          <button
            type="submit"
            className="mt-2 text-xl font-semibold px-3 py-1 rounded bg-green-600 text-white"
          >
            حفظ
          </button>
        </form>
      </div>
    </div>
  );
}
