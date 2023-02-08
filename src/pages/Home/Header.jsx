import React,{useState,useEffect} from "react";
import 'tw-elements';
import { Link } from "react-scroll";

export default function Header () {
    return(
        <React.Fragment>
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
                        <Link activeClass="active" to="scrollflag" spy={true} smooth={true} offset={50} duration={500}>احجز الآن</Link>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}