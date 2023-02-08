import React,{useState,useEffect} from "react";
import 'tw-elements';

export default function FooterSection () {
    return(
        <React.Fragment>
            <footer className="text-center bg-[#f1f8f6]">
                <div className="text-xl p-7">
                    <span className="">© 2022 Copyright: </span>
                    <a href="#" className="font-bold text-blue-1">عبدالرحيم السيد صقر</a>
                </div>
            </footer>
        </React.Fragment>
    );
}