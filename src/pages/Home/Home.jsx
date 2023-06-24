import React,{useState,useEffect} from "react";
import 'tw-elements';
import AppointmentSection from "./AppointmentSection";
import DoctorsInfoSection from "./DoctorsInfoSection";
import DepartmentsInfoSection from "./DepartmentsInfoSection";
import AboutUsSection from "./AboutUsSection";
import FooterSection from "./FooterSection";
import Header from "./Header";
import BandAid from "../BandAid/BandAid";

export default function Home (props) {

    return ( 
        <React.Fragment>
{/* Home sections */}
            <div className="h-full">
{/* Home section 1*/}
                <Header/>
{/* Home section 2 */}
                <DepartmentsInfoSection/>
{/* Home section 3 */}
                <DoctorsInfoSection />
{/* Home section 4 */}
                <AppointmentSection userData={props.userData} setUserData={props.setUserData}/>
{/* Home section 5 */}
                <BandAid/>
{/* Home section 6 */}
                <AboutUsSection/>
{/* Home section 7 */}
                <FooterSection/>
            </div>
        </React.Fragment>
     );
}
