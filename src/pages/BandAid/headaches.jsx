import React from "react";

const Headaches = () => {
    return ( 
        <React.Fragment>
            <div className="text-right p-10">
                <div className="BandAid1Header">إصابات الرأس</div>

                <div className="mt-10">
                    <div className="BandAid2Header">:أنواع الإصابات</div>
                    <div className="BandAidText">
                        الارتجاج: قد يصاب بفقدان أو تشويش في الرؤية والتوازن لفترة قصيرة
                        <br /><br />
                        كسر الجمجمة: ظهور جروح في الرأس قد تكون علامة على ضرر أعمق داخل الرأس
                        <br /><br />
                        كدمة الدماغ: نزيف طفيف في الدماغ وقد يسبب تورم
                    </div>
                </div>
                <div className="mt-10">
                    <div className="BandAid2Header">:إجراءات إسعافية</div>
                    <div className="BandAid2Header">:إفعل</div>
                    <div className="BandAidText">
                        حافظ على هدوء المصاب وطمأنته وساعده على الجلوس
                        <br /><br />
                        استعمال كيس مجمد على منطقة الإصابة على سبيل المثال: كيس خضار مجمدة
                        <br /><br />
                        تحقق من مستوى الوعي مثل: استجابة المصاب للصوت وذلك بطرح أسئلة بسيطة أو إعطائه​ إرشادات وغيرها
                        <br /><br />
                        ملازمة المصاب للتأكد من عدم ظهور علامات مثل النزيف
                    </div>
                    <div className="BandAid2Header">:لا تفعل</div>
                    <div className="BandAidText">
                        ضغط أي نزيف ناتج من الجروح في فروة الرأس
                        <br /><br />
                        لمس أي جرح موجود في رأس المصاب لمنع انتقال العدوى
                        <br /><br />
                        تحريك عنق المصاب وانتظار المساعدة الطبية
                    </div>
                </div>

                <div className="mt-10">
                    <div className="BandAid2Header">:العودة إلى قسم الطوارئ عند</div>
                    <div className="BandAidText">
                        استمرار القيء
                        <br /><br />
                        زيادة الصداع
                        <br /><br />
                        صعوبة في الاستيقاظ من النوم 
                    </div>
                    
                </div>

            </div>
        </React.Fragment>
     );
}
 
export default Headaches;