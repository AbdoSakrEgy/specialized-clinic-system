import axios from "axios";
import React,{useState,useEffect} from "react";
import 'tw-elements';

export default function DoctorsInfoSection () {
    // get medical stuff info from API
    const [medicalStuff,setMedicalStuff]=useState(null)
    useEffect(()=>{
        async function medical(){
            const response = await axios.get('https://egada.vercel.app/doctor/all');
            setMedicalStuff(response.data.body);
        }
        medical();
    },[])
    
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
                                    <div className="text-black font-bold text-xl mb-8">{medicalStuff ? medicalStuff[0].name : 'loading...'}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{medicalStuff ? medicalStuff[0].dept.name : 'loading...'}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{'2000'}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{'12'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الثاني */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d2.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{medicalStuff ? medicalStuff[0].name : 'loading...'}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{medicalStuff ? medicalStuff[0].dept.name : 'loading...'}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{'2000'}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{'12'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الثالث */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{medicalStuff ? medicalStuff[0].name : 'loading...'}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{medicalStuff ? medicalStuff[0].dept.name : 'loading...'}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{'2000'}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{'12'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الرابع */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d2.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{medicalStuff ? medicalStuff[0].name : 'loading...'}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{medicalStuff ? medicalStuff[0].dept.name : 'loading...'}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{'2000'}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{'12'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب الخامس */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d5.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{medicalStuff ? medicalStuff[0].name : 'loading...'}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{medicalStuff ? medicalStuff[0].dept.name : 'loading...'}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{'2000'}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{'12'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* الطبيب السادس */}
                        <div className="DoctorInfoCard">
                            <div className="DoctorInfoCardDiv">
                                <img className="w-full h-[15rem]" src={require('../../Images/d1.jpg')} alt={"not found"}/>
                                <div className="p-6">
                                    <div className="text-black font-bold text-xl mb-8">{medicalStuff ? medicalStuff[0].name : 'loading...'}</div>
                                    <span className="font-bold text-lg px-3 py-1 rounded-lg bg-[#3b83f638] text-[#3B82F6]">{medicalStuff ? medicalStuff[0].dept.name : 'loading...'}</span><br />
                                    <div className="flex justify-end font-bold text-lg mt-5">
                                        <div>مريض</div>
                                        <div className="ml-2">{'2000'}+</div>
                                    </div>
                                    <div className="flex justify-end font-thin mt-3 text-gray-main">
                                        <div>سنة من الخبرة العملية</div>
                                        <div className="ml-1">{'12'}</div>
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