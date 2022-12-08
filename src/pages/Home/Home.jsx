import React from "react";
import { FaFacebookF,FaLinkedin,FaInstagram} from "react-icons/fa";
import 'tw-elements';

const Home = () => {
    return ( 
        <React.Fragment>
            {/* ----------doctor info---------- */}
            {/* <div className="flex justify-end items-start bg-[#f8f8f8] py-[10vh]" style={{boxShadow:"inset 0 3px 10px rgba(0, 0, 0, 0.2)"}}>
                <div className="w-[70%] px-[8vw] py-2 text-right">
                    <div className="text-xl font-semibold text-gray-2 mb-1">طبيب عظام</div>
                    <div className="text-4xl font-bold mb-10">عبدالرحيم السيد صقر</div>
                    <div className="flex justify-end items-center text-[#424243] mb-10">
                        <FaFacebookF style={{fontSize: '20px'}} className="ml-5"/>
                        <FaLinkedin style={{fontSize: '20px'}} className="ml-5"/>
                        <FaInstagram style={{fontSize: '20px'}} className="ml-5"/>
                    </div>
                    <div className="font-semibold text-gray-2 mb-1">
                        يتم إجراء جراحة الجهاز التنفسي بشكل عام من قبل متخصصين في جراحة القلب والصدر (أو جراحة الصدر) على الرغم من إمكانية إجراء عمليات جراحية بسيطة من قبل أخصائي أمراض الرئة. طب الرئة وثيق.
                        <br/>يتم إجراء جراحة الجهاز التنفسي بشكل عام من قبل متخصصين في جراحة القلب والصدر (أو جراحة الصدر) على الرغم من إمكانية إجراء عمليات جراحية بسيطة من قبل أخصائي أمراض الرئة. طب الرئة وثيق.
                    </div>
                </div>
                <div className="flex justify-end items-center pr-10">
                    <img className="w-[300px] h-[300px] rounded-full" src={require('../../Images/doctor1.jpg')} alt={"not found"} />
                </div>
            </div> */}
            {/* ----------Sign---------- */}
            {/* Home sections */}
            <div className="h-full">
                {/* Home section 1 */}
                <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-fade relative w-full"
                    data-bs-ride="carousel"
                    >
                    {/*  Indicators */}
                    {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                        ></button>
                    </div> */}

                    {/*  Inner */}
                    <div className="overflow-hidden carousel-inner relative w-full">
                        {/*  Single */}
                        <div className="carousel-item active relative float-left w-full h-[70vh]">
                        <img
                            src={require('../../Images/doctor1.jpg')}
                            className="overflow-hidden block w-full h-full"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption top-[40%] hidden md:block absolute text-left">
                            <h5 className="text-4xl text-white">مقولة طبية</h5>
                            <p className="text-white text-xl">بعض التفاصيل او الوصف</p>
                        </div>
                        </div>

                        {/*  Single */}
                        <div className="carousel-item relative float-left w-full h-[70vh]">
                        <img
                            src={require('../../Images/doctor2.jpg')}
                            className="overflow-hidden block w-full h-full"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption top-[40%] hidden md:block absolute text-right">
                            <h5 className="text-4xl text-white">مقولة طبية</h5>
                            <p className="text-white text-xl">بعض التفاصيل او الوصف</p>
                        </div>
                        </div>

                        {/*  Single */}
                        <div className="carousel-item relative float-left w-full h-[70vh]">
                        <img
                            src={require('../../Images/doctor3.jpg')}
                            className="overflow-hidden block w-full h-full"
                            alt="Woman Reading a Book"
                        />
                        <div className="carousel-caption hidden top-[25%] md:block absolute text-center">
                            <h5 className="text-4xl text-white">مقولة طبية</h5>
                            <p className="text-white text-xl">بعض التفاصيل او الوصف</p>
                        </div>
                        </div>
                    </div>
                    {/*  Inner */}

                    {/*  Controls */}
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Home section 2 */}
                <div className="h-96">

                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Home;