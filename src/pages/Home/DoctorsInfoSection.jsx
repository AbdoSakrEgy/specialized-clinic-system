import axios from "axios";
import React, { useState, useEffect } from "react";
import "tw-elements";
import { Icon } from "@iconify/react";
import RatingDoctors from "./RatingDoctors";

export default function DoctorsInfoSection(props) {
  // get medical stuff info from API
  const [medicalStuff, setMedicalStuff] = useState([]);
  useEffect(() => {
    async function medical() {
      await axios
        .get("https://egada.vercel.app/doctor/all")
        .then((res) => {
          setMedicalStuff(res.data.body);
        })
        .catch((err) => console.log(err));
      // const response = await axios.get('https://egada.vercel.app/doctor/all');
      // setMedicalStuff(response.data.body);
    }
    medical();
    // console.log(URL.createObjectURL(`data:image/jpeg;base64,${}`));
  }, []);

  // convert buffer to base64
  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  // convert base64 to BLOB
  function base64toBlob(base64Data, contentType) {
    contentType = contentType || "";
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);

      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }
  // convert BLOB to src

  return (
    <React.Fragment>
      <div className="h-fit mx-10 pb-40" id="MedicalStaff">
        <div className="text-center">
          <div
            className="text-5xl font-semibold mb-16"
            onClick={() => {
              console.log(
                URL.createObjectURL(
                  base64toBlob(
                    _arrayBufferToBase64(
                      medicalStuff[0].profileImg.image.data.data
                    ),
                    "jpeg"
                  )
                )
              );
            }}
          >
            الطاقم <span className="text-blue-1">الطبي</span>
          </div>
        </div>
        <div className="h-fit flex overflow-x-scroll scrollDoctorsDiv">
          <div className="h-fit flex flex-nowrap justify-center py-5">
            {medicalStuff.map((item) => (
              <div className="DoctorInfoCard">
                <div className="DoctorInfoCardDiv">
                  <img
                    className="w-full h-[15rem] brightness-50"
                    src={require("../../Images/d1.jpg")}
                    alt={"not found"}
                  />

                  <div className="p-6">
                    <div className="text-black font-bold text-xl mb-8">
                      {medicalStuff ? item.name : "loading..."}
                    </div>
                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">
                      {medicalStuff ? item.dept.name : "loading..."}
                    </span>
                    <br />
                    <div className="font-bold text-lg mt-5">
                      {item.governorate}
                    </div>
                    <div className="flex justify-end items-center font-thin mt-3 text-gray-main">
                      {item.generalRate}
                      <Icon
                        icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars"
                        className="ml-2"
                      />
                    </div>
                    {/* rate code ============ */}
                    {!props.userData.hasOwnProperty("desc") ? (
                      <RatingDoctors
                        doctorID={item._id}
                        patientID={props.userData._id}
                        patientName={props.userData.name}
                        userData={props.userData}
                      />
                    ) : (
                      ""
                    )}
                    {/* rate code ============ */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
