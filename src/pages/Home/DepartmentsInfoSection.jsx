import React,{useState,useEffect} from "react";
import 'tw-elements';

export default function DepartmentsInfoSection () {
    const [department1,setDepartment1]=useState("الأسنان")
    const [department2,setDepartment2]=useState("الباطنة")
    const [department3,setDepartment3]=useState("الأنف والأذن والحنجرة")
    const [departmentDescription,setDepartmentDescription]=useState("تعامل مع طاقم طبي علي أعلي مستوي من المختصين في جميع المجالات المتاحة، للحصول علي أفضل رعاية طبية كاملة لك ولأسرتك")
    
    return (
        <React.Fragment>
            <div className="mx-10 pb-40" id="MedicalServices">
                <div className="text-center text-5xl font-semibold mb-16">الخدمات<span className="text-blue-1"> الطبية</span></div>
                <div className="flex flex-nowrap justify-center items-center">
                    {/* التخصص الأول */}
                    <div className="MedicalDepartmentCard">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <img className="rounded-t-lg" src={require('../../Images/ENT.jpg')} alt={"not found"}/>
                            <diva className="p-6">
                                <h5 className="text-2xl font-semibold mb-7">{department3}</h5>
                                <p className="text-gray-main leading-8 text-base mb-4">
                                    {departmentDescription}
                                </p>
                                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عرض الأطباء</button> */}
                            </diva>
                        </div>
                        </div>
                    {/* التخصص الثاني */}
                    <div className="MedicalDepartmentCard mx-32">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <img className="rounded-t-lg" src={require('../../Images/Internal Medicine.jpg')} alt={"not found"}/>
                            <div className="p-6">
                                <h5 className="text-2xl font-semibold mb-7">{department2}</h5>
                                <p className="text-gray-main leading-8 text-base mb-4">
                                    {departmentDescription}
                                </p>
                                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عرض الأطباء</button> */}
                            </div>
                        </div>
                        </div>
                    {/* التخصص الثالث */}
                    <div className="MedicalDepartmentCard">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">   
                            <img className="rounded-t-lg" src={require('../../Images/dentist.jpg')} alt={"not found"}/>
                            <div className="p-6">
                                <h5 className="text-2xl font-semibold mb-7">{department1}</h5>
                                <p className="text-gray-main leading-8 text-base mb-4">
                                    {departmentDescription}
                                </p>
                                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">عرض الأطباء</button> */}
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    );
}