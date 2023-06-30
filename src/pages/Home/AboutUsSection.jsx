import React, { useState, useEffect } from "react";
import "tw-elements";

export default function AboutUsSection() {
  return (
    <React.Fragment>
      <div className="mx-10 mb-40 flex flex-col items-center" id="AboutUs">
        <div className="text-5xl font-semibold">
          من <span className="text-blue-1">نحن</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[60%]">
            <img src={require("../../Images/test.png")} alt="..." />
          </div>
          <div className="w-[40%] text-right pr-20">
            <div className="text-5xl font-semibold mb-5">ما هو هدفنا</div>
            <div className="text-3xl font-medium mb-10 text-blue-1">
              وكيف وصلنا إلي هذه النقطة
            </div>
            <div className="text-gray-main">
              منصتنا هي المنصة الرائدة للرعاية الصحية الإلكترونية لحجز الأطباء و
              برنامج تنظيم إدارة العيادات في منطقة الشرق الأوسط و شمال إفريقيا
              <br />
              نحن نقود تحويل حجز الأطباء و العيادات و المستشفيات إلكترونيتا
              وأوتوماتيكيا لتصبح الرعاية الصحية عالية الجودة سهلة المنال في
              المنطقة العربية. بمساعدة أكثر من200,000 تقييم مُثبت و مُراجَع،
              يمكن للمريض أن يبحث، يقارن، و يحجز مع أفضل الأطباء في الحال
              <br /> و يمكن أيضاً للأطباء أن يوفروا تجربة رعاية صحية سهلة و بدون
              عقبات بفضل برنامج تنظيم إدارة العيادات من فيزيتا
              <br /> تعمل منصتنا حالياً بمصر، و السعودية، و الشام، و الإمارات، و
              كينيا و نيجيريا. نطمح لإجادة كل الجوانب في صناعة الرعاية الصحية و
              الإستمرار في إطلاق منتجات تصنع فرقاً إيجابيا في حياة الناس
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
