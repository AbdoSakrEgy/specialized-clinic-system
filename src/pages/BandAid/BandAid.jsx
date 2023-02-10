import React from "react";
import { Link } from "react-router-dom";
import '../../css files/App.css'

const BandAid = () => {
    return ( 
        <React.Fragment>
            <div className="text-5xl text-center pt-7 pb-3" id="BandAidSection">الإسعافات <span className="text-blue-1">الأولية</span></div>
            <div className="flex flex-wrap p-5 mb-40 justify-between">
                {/* ---------card breaking--------- */}
                <div className="p-5 m-10">
                    <Link to="/bandAid/breaking">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[15vw]" src={require('../../Images/bone.png')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">الكسور</p>
                        </div>
                    </Link>
                </div>
                {/* ---------card drowing--------- */}
                <div className="p-5 m-10">
                    <Link to="/bandAid/drowing">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[15vw]" src={require('../../Images/drowing.jpg')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">الغرق</p>
                        </div>
                    </Link>
                </div>
                {/* ---------card burn--------- */}
                <div className="p-5 m-10">
                    <Link to="/bandAid/burn">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[15vw]" src={require('../../Images/burn.jpg')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">الحروق</p>
                        </div>
                    </Link>
                </div>
                {/* ---------card headaches--------- */}
                <div className="p-5 m-10">
                    <Link to="/bandAid/headaches">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[15vw]" src={require('../../Images/headaches2.jpg')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">إصابات الرأس</p>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default BandAid;