import React,{useState,useEffect} from "react";
import 'tw-elements';
import AppointmentSection from "./AppointmentSection";
import DoctorsInfoSection from "./DoctorsInfoSection";
import DepartmentsInfoSection from "./DepartmentsInfoSection";
import AboutUsSection from "./AboutUsSection";
import FooterSection from "./FooterSection";
import Header from "./Header";
import BandAid from "../BandAid/BandAid";
import axios from "axios";

export default function Home () {
    const [data,setData]=useState(null);
    // useEffect(()=>{
    //     axios({
    //         method:'post',
    //         baseURL:'http://localhost:4000',
    //         url:'/departments',
    //         data:{
    //             name:"abdo"
    //         }
    //     })
    //     .then((response)=>{
    //         console.log(response.data);
    //     })
    //     .catch((error)=>{
    //         //handle error
    //         console.log(error)
    //         console.log("errrrrrrrrrrrorrrrrrrrrrrrrrrrrrrrrrrr")
    //     })
    //     .finally(()=>{
    //         // always executed
    //     })
    // },[])

    return ( 
        <React.Fragment>
{/* Home sections */}
            <div className="h-full">
{/* Home section 1.1 test api */}
                <div className="mx-10 mb-40 p-10 flex flex-col items-center bg-black text-red-500 text-6xl">
                    <div id="test">{data}</div>
                    <div>
                        <button
                            className="text-sm bg-transparentn text-white font-semibold m-4 py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent"
                        >
                            Create
                        </button>
                        <button
                            className="text-sm bg-transparentn text-white font-semibold m-4 py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent"
                        >
                            Read
                        </button>
                        <button
                            className="text-sm bg-transparentn text-white font-semibold m-4 py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent"
                        >
                            Update
                        </button>
                        <button
                            className="text-sm bg-transparentn text-white font-semibold m-4 py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent"
                        >
                            Delete
                        </button>
                    </div>
                </div>
{/* Home section 1*/}
                <Header/>
{/* Home section 2 */}
                <div className="mx-10 mb-40 grid grid-cols-2">
                    
                    <div className="flex flex-col text-right pt-5 pl-16 text-gray-main">
                        <span className="leading-[2rem] mb-5">احصل على أحدث المعلومات حول المرض الفيروسي الجديد في الوقت الحاضر ، وتعلم كيفية حماية نفسك والاستفادة من خدماتنا المريحة</span>
                        <span className="leading-[2rem]">نحن نعمل بجد لتقليل المهل الزمنية وسنخبرك إذا تأخر طلبك. يرجى الانتظار حتى يتم التحديث عبر البريد الإلكتروني بدلاً من الاتصال بفريق خدمة العملاء لدينا لأننا نعطي الأولوية لمرضانا الأكثر ضعفًا في هذا الوقت</span>
                    </div>

                    <div className="flex flex-col pl-10">
                        <div className="flex justify-end items-center mb-5 text-[#ff8367]">
                            <span style={{fontSize:"25px"}}>الخطر يهدد الجميع</span>
                            <img className="w-[3vw] ml-5" src={require('../../Images/covid-19.png')} alt="..." />
                        </div>
                        <div className="items-end text-4xl text-right leading-[4rem]">
                            <span>إلتزم بالتعليمات الوقائية</span><br/>
                            <span>وإعتني بنفسك وأسرتك أثناء الجائحة</span>
                        </div>
                    </div>

                </div>
{/* Home section 3 */}
                <DepartmentsInfoSection/>
{/* Home section 4 */}
                <DoctorsInfoSection/>
{/* Home section 5 */}
                <AppointmentSection/>
{/* Home section 6 */}
                <BandAid/>
{/* Home section 7 */}
                <AboutUsSection/>
{/* Home section 8 */}
                <FooterSection/>
            </div>
        </React.Fragment>
     );
}
