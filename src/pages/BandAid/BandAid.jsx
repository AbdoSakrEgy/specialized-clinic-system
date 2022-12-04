import React from "react";
import { Link } from "react-router-dom";
import '../../css files/App.css'

const BandAid = () => {
    return ( 
        <React.Fragment>
            <div className="flex flex-wrap p-5 justify-between bg-gray-1">
                {/* ---------card breaking--------- */}
                <Link to="/bandAid/breaking">
                    <div className="p-5 ml-20">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[20vw]" src={require('../../Images/bone.png')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">الكسور</p>
                        </div>
                    </div>
                </Link>
                {/* ---------card drowing--------- */}
                <Link to="/bandAid/drowing">
                    <div className="p-5 ml-20">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[20vw]" src={require('../../Images/drowing.jpg')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">الغرق</p>
                        </div>
                    </div>
                </Link>
                {/* ---------card burn--------- */}
                <Link to="/bandAid/burn">
                    <div className="p-5 ml-20">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[20vw]" src={require('../../Images/burn.jpg')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">الحروق</p>
                        </div>
                    </div>
                </Link>
                {/* ---------card headaches--------- */}
                <Link to="/bandAid/headaches">
                    <div className="p-5 ml-20">
                        <div className="BandAidCard w-full h-full">
                            <img className="w-[20vw]" src={require('../../Images/headaches2.jpg')} alt={"not found"} />
                            <p className="text-center font-bold text-2xl py-[3vh]">إصابات الرأس</p>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
     );
}
 
export default BandAid;