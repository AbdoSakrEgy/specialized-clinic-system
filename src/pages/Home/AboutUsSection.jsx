import React,{useState,useEffect} from "react";
import 'tw-elements';

export default function AboutUsSection () {
    return(
        <React.Fragment>
            <div className="mx-10 mb-40 flex flex-col items-center" id="AboutUs">
                <div className="text-5xl font-semibold">من <span className="text-blue-1">نحن</span></div>
                <div className="flex justify-between items-center">
                    <div className="w-[60%]">
                        <img src={require('../../Images/test.png')} alt="..." />
                    </div>
                    <div className="w-[40%] text-right pr-20">
                        <div className="text-5xl font-semibold mb-5">قصة عن المستشفي</div>
                        <div className="text-3xl font-medium mb-10 text-blue-1">وكيف وصلنا إلي هذه النقطة</div>
                        <div className="text-gray-main">
                        فتحت أبواب المستشفى في 7 يوليو 2007 لاستقبال الأطفال المرضى بالمجان تماما بطاقة 30 سريرًا في المرحلة الأولى، تمهيدا لتشغيله فيما بعد بكامل طاقته البالغة 185 سريرا والمتوقّع ازديادها إلى 365 سريرا.
                        <br />
                        تقع المستشفى على مساحة 69 ألف متر مربع وبلغت تكلفة إنشاء المبنى والأماكن المحيطة به 300 مليون جنيه، وصمم المستشفى جوناثان بيلي المهندس الشهير في إنشاء التصميمات المستقبلية بالتعاون مع الخبرة الهندسية المصرية المجانية التي مزجت دون بهرجة بين المبنى الزجاجي الكروي الحداثي والأحجار الصلدة
                        <br />
                        وصممت النوافذ الزجاجية التي تحتوي على غاز خامل بغرض توفير الكهرباء والضوء ولتمكين الأطفال المصابين من التواصل مع العالم الخارجي لبث الطمأنينة نفسيًّا في قلوبهم. ويضم المستشفى مركزًا للعلاج النوويّ والإشعاعي والكيميائي وبنك الدم ومختبر الفيروسات ومعامل الجينات وتخزين الخلايا الجذعية والعيادات الخارجية وحجرات العمليات وأقسام الأشعة والمعامل والصيدلية.
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}