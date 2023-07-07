import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function RatingDoctors(props) {
  // isPatientRateThisDoctor
  const [israte, setisrate] = useState(false);
  const [starsNum, setStarsNum] = useState(null);

  async function isPatientRateThisDoctor(doctorID, patientName) {
    await axios
      .get("https://egada.vercel.app/doctor/" + doctorID)
      .then((res) => {
        for (let i = 0; i < res.data.body.rating.length; i++) {
          if (res.data.body.rating[i].patient.name === patientName) {
            setisrate(true);
            setStarsNum(res.data.body.rating[i].rate);
            return true;
          }
        }
        setisrate(false);
        return false;
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    isPatientRateThisDoctor(props.doctorID, props.patientName);
  }, [israte]);

  //   post rate
  const [rateCounter, setRateCounter] = useState(0);
  async function postRate() {
    await axios
      .post("https://egada.vercel.app/patient/rating", {
        patient: props.patientID,
        doctor: props.doctorID,
        rate: rateCounter,
        comment: "",
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {Object.keys(props.userData).length ? (
        israte ? (
          <div className="flex justify-start mt-16">
            {starsNum != null
              ? [...Array(starsNum)].map((e, i) => (
                  <Icon
                    className="text-yellow-500"
                    icon="ic:round-star-rate"
                    width="50"
                  />
                ))
              : ""}
          </div>
        ) : (
          <div className="flex flex-col pt-5">
            <div className="flex justify-around">
              <div
                onClick={() => {
                  if (rateCounter > 0) {
                    setRateCounter(rateCounter - 1);
                  }
                }}
                className="mt-2 py-2 px-4 rounded shadow-md cursor-pointer bg-red-700 text-white"
              >
                -
              </div>
              <div className="flex items-center">{rateCounter}</div>
              <div
                onClick={() => {
                  if (rateCounter < 5) {
                    setRateCounter(rateCounter + 1);
                  }
                }}
                className="mt-2 py-2 px-4 rounded shadow-md cursor-pointer bg-green-700 text-white"
              >
                +
              </div>
            </div>
            <button
              onClick={async () => {
                await postRate();
                await isPatientRateThisDoctor(props.doctorID, props.patientName);
              }}
              className="mt-2 py-2 px-4 rounded shadow-md cursor-pointer bg-blue-1 text-white"
            >
              حفظ
            </button>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
}
