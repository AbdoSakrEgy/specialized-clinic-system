import React,{useState,useEffect} from "react";
import { FaFacebookF,FaLinkedin,FaInstagram,FaClock,FaPhone,FaEnvelope } from "react-icons/fa";
import 'tw-elements';

export default function Media () {
    // media data
    const [timesOfWork,setTimesOfWork]=useState('السبت-الخميس 9-5');
    const [hospitalNumber,setHospitalNumber]=useState('01007137667');
    const [hospitalEmail,setHospitalEmail]=useState('email@gmail.com');
    const [facebookLink,setFacebookLink]=useState('https://www.facebook.com');
    const [linkedinLink,setLinkedinLink]=useState('https://www.linkedin.com');
    const [instagramLink,setInstagramLink]=useState('https://www.instagram.com');
    
    return(
        <React.Fragment>
            <div className="hv-bc bg-blue-1 text-white py-4 px-10">
                <div className="flex justify-start">
                    <div className="time hv-bc">
                        <FaClock style={{fontSize: '15px'}}/><p style={{fontSize: '14px'}} className="pl-2 pr-5">{timesOfWork}</p>
                    </div>
                    <div className="phone hv-bc">
                        <FaPhone style={{fontSize: '15px'}}/><p style={{fontSize: '14px'}} className="pl-2 pr-5">{hospitalNumber}</p>
                    </div>
                    <div className="email hv-bc">
                        <FaEnvelope style={{fontSize: '15px'}}/><p style={{fontSize: '14px'}} className="pl-2 pr-5">{hospitalEmail}</p>
                    </div>
                </div>
                <div className="hv-bc">
                    <a href={facebookLink} target="_blank">
                        <FaFacebookF style={{fontSize: '15px'}} className="ml-5 cursor-pointer"/>
                    </a>
                    <a href={linkedinLink} target="_blank">
                        <FaLinkedin style={{fontSize: '15px'}} className="ml-5 cursor-pointer"/>
                    </a>
                    <a href={instagramLink} target="_blank">
                        <FaInstagram style={{fontSize: '15px'}} className="ml-5 cursor-pointer"/>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}