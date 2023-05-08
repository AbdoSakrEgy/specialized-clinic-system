import React from "react";
import 'tw-elements';
import { Link as Link2 } from "react-scroll";

export default function Header () {
    return(
        <React.Fragment>
            <div  id="HeaderSection">
                <div className="mx-10 mb-32 flex justify-between items-center">
                    <div className="w-[50%]">
                        <img src={require('../../Images/landing page image.png')} alt="..." />
                    </div>
                    <div className="flex flex-col items-end text-gray-main">
                        <div className="text-5xl font-semibold mb-14 leading-[4rem] text-right text-black">حافظ علي صحتك الجسدية والنفسية</div>
                        <div className="">"الوهم نصف الداء، والاطمئنان نصف الدواء، والصبر أول خطوات الشفاء"</div>
                        <div className="">فالإلتزام بالتعليمات الوقائية هي خير وسيلة لحماية نفسك</div>
                        <div className="mb-14">وأسرتك والمجتمع من خطر الأمراض اللتي تهدد حياتنا</div>
                        <button className="w-fit text-xl bg-transparentn text-blue-1 font-semibold  py-2 px-4 border border-blue-1  rounded hover:bg-blue-1 hover:text-white hover:border-transparent">
                            <Link2 to="AppointmentSection" smooth={true} duration={100} spy={true} spyThrottle={0} offset={-135}>احجز الآن</Link2>
                        </button>
                    </div>
                </div>

                <div className="mx-10 pb-40 grid grid-cols-2">
                        
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
            </div>
        </React.Fragment>
    );
}