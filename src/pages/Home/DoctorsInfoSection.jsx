import React,{useState,useEffect} from "react";
import 'tw-elements';

export default function DoctorsInfoSection () {
    // Doctors data
    const [doctorName1,setDoctorName1]=useState("عبدالرحيم السيد صقر")
    const [doctorDepartment1,setDoctorDepartment1]=useState("أسنان")
    const [doctorPatientsNumber1,setDoctorPatientsNumber1]=useState("2000")
    const [doctorExperienceYears1,setDoctorExperienceYears1]=useState("12")
    
    
    const [doctorName2,setDoctorName2]=useState("عبدالرحيم السيد صقر")
    const [doctorDepartment2,setDoctorDepartment2]=useState("باطنة")
    const [doctorPatientsNumber2,setDoctorPatientsNumber2]=useState("2000")
    const [doctorExperienceYears2,setDoctorExperienceYears2]=useState("12")

    const [doctorName3,setDoctorName3]=useState("عبدالرحيم السيد صقر")
    const [doctorDepartment3,setDoctorDepartment3]=useState("أنف وأذن وحنجرة")
    const [doctorPatientsNumber3,setDoctorPatientsNumber3]=useState("2000")
    const [doctorExperienceYears3,setDoctorExperienceYears3]=useState("12")
    
    const [doctorName4,setDoctorName4]=useState("عبدالرحيم السيد صقر")
    const [doctorDepartment4,setDoctorDepartment4]=useState("باطنة")
    const [doctorPatientsNumber4,setDoctorPatientsNumber4]=useState("2000")
    const [doctorExperienceYears4,setDoctorExperienceYears4]=useState("12")

    const [doctorName5,setDoctorName5]=useState("عبدالرحيم السيد صقر")
    const [doctorDepartment5,setDoctorDepartment5]=useState("أسنان")
    const [doctorPatientsNumber5,setDoctorPatientsNumber5]=useState("2000")
    const [doctorExperienceYears5,setDoctorExperienceYears5]=useState("12")

    const [doctorName6,setDoctorName6]=useState("عبدالرحيم السيد صقر")
    const [doctorDepartment6,setDoctorDepartment6]=useState("أنف وأذن وحنجرة")
    const [doctorPatientsNumber6,setDoctorPatientsNumber6]=useState("2000")
    const [doctorExperienceYears6,setDoctorExperienceYears6]=useState("12")
    
    return(
        <React.Fragment>
            <div className="h-fit mx-10 pb-40" id="MedicalStaff">
                <div className="text-center">
                    <div className="text-5xl font-semibold mb-16">الطاقم <span className="text-blue-1">الطبي</span></div>
                </div>
                <div className="h-fit flex overflow-x-scroll scrollDoctorsDiv">
                    <div className="h-fit flex flex-nowrap justify-center py-5">
                        {/* الطبيب الأول */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{doctorName1}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{doctorDepartment1}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{doctorPatientsNumber1}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{doctorExperienceYears1}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الثاني */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d2.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{doctorName2}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{doctorDepartment2}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{doctorPatientsNumber2}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{doctorExperienceYears2}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الثالث */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{doctorName3}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{doctorDepartment3}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{doctorPatientsNumber3}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{doctorExperienceYears3}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الرابع */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d2.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{doctorName4}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{doctorDepartment4}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{doctorPatientsNumber4}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{doctorExperienceYears4}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الخامس */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d5.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{doctorName5}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{doctorDepartment5}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{doctorPatientsNumber5}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{doctorExperienceYears5}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب السادس */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{doctorName6}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{doctorDepartment6}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{doctorPatientsNumber6}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{doctorExperienceYears6}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}