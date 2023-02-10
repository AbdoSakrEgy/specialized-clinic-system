import React,{useState,useEffect} from "react";
import 'tw-elements';

export default function AppointmentSection () {
    // Appointment data
    const [patientName,setPatientName]=useState(null)
    const [patientPhone,setPatientPhone]=useState(null)
    const [theDepartment,setTheDepartment]=useState(null)
    const [theDoctor,setTheDoctor]=useState(null)
    const [theDetectionType,setTheDetectionType]=useState(null)
    const [theDate,setTheDate]=useState(null)
    const [theAvailableTime,setTheAvailableTime]=useState(null)
    const [thePaymentWay,setPaymentWay]=useState(null)
    // 
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(patientName);
        alert(patientPhone);
        alert(theDepartment);
        alert(theDoctor);
        alert(theDetectionType);
        alert(theDate);
        alert(theAvailableTime);
        alert(thePaymentWay);
    }
    return(
        <React.Fragment>
            <div className="h-fit mx-10 mb-40" id="AppointmentSection">
                <div className="text-center">
                    <div className="text-5xl font-semibold mb-16">احجز <span className="text-blue-1">موعدك</span></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-1/2">
                        <img src={require("../../Images/Appointment.png")} alt="..." />
                    </div>
                    <div className="h-fit w-1/2">
                        <form onSubmit={handleSubmit} className="AppiontmentForm">

                            <div className="w-full">
                                <div className="mb-1 font-semibold">اسم المريض</div>
                                <input type="text" className="AppiontmentInput text-right" onChange={(e)=>setPatientName(e.target.value)}/>
                            </div>

                            <div className="w-full">
                                <div className="mb-1 font-semibold">رقم الهاتف</div>
                                <input type="number" className="AppiontmentInput text-right" onChange={(e)=>setPatientPhone(e.target.value)}/>
                            </div>

                            <div className="w-full">
                                <div className="mb-1 font-semibold">إختر التخصص</div>
                                <select name="available time" className="AppiontmentInput" onChange={(e)=>{setTheDepartment(e.target.value)}}>
                                    <option value="" selected hidden></option>
                                    <option value="أسنان">أسنان</option>
                                    <option value="باطنة">باطنة</option>
                                    <option value="أنف وأذن وحنجرة">أنف وأذن وحنجرة</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <div className="mb-1 font-semibold">إختر الطبيب</div>
                                <select name="available time" className="AppiontmentInput" onChange={(e)=>{setTheDoctor(e.target.value)}}>
                                    <option value="" selected hidden></option>
                                    <option value="عبدالرحيم صقر">عبدالرحيم صقر</option>
                                    <option value="عبدالرحيم صقر">عبدالرحيم صقر</option>
                                    <option value="عبدالرحيم صقر">عبدالرحيم صقر</option>
                                </select>
                            </div>
                            
                            <div className="w-full">
                                <div className="mb-1 font-semibold">نوع الكشف</div>
                                <select name="available time" className="AppiontmentInput" onChange={(e)=>{setTheDetectionType(e.target.value)}}>
                                    <option value="" selected hidden></option>
                                    <option value="كشف جديد">كشف جديد</option>
                                    <option value="إعادة كشف">إعادة كشف</option>
                                </select>
                            </div>
                            
                            <div className="w-full flex justify-between items-start">
                                <div className="w-full mr-7">
                                    <div className="mb-1 font-semibold">الأوقات المتاحة</div>
                                    <select name="available time" className="AppiontmentInput" onChange={(e)=>{setTheAvailableTime(e.target.value)}}>
                                        <option value="" selected hidden></option>
                                        <option value="09:00 AM">09:00 AM</option>
                                        <option value="09:30 AM">09:30 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="10:30 AM">10:30 AM</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <div className="mb-1 font-semibold">تاريخ الموعد</div>
                                    <input type="date" className="AppiontmentInput" onChange={(e)=>{setTheDate(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="mb-1 font-semibold">طريقة الدفع</div>
                                <select name="available time" className="AppiontmentInput" onChange={(e)=>{setPaymentWay(e.target.value)}}>
                                    <option value="" selected hidden></option>
                                    <option value="عند الطبيب">عند الطبيب</option>
                                </select>
                            </div>

                            <div className="flex justify-end items-center  mt-10">
                                <input type="reset" value="إلغاء" className="cursor-pointer mr-5 text-xl"/>
                                <input type="submit" value="إحجز الآن" className="text-2xl min-w-[10vw] py-2 px-4 rounded shadow-md cursor-pointer bg-blue-1 text-white"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

