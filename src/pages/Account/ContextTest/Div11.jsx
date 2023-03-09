import React, { useRef,useState,useEffect,useContext } from "react";
import { UserContext } from "./MainDiv";

function Div11() {
    const data=useContext(UserContext);

    return ( 
        <React.Fragment>
            <p>div11 {data}</p>
        </React.Fragment>
     );
}

export default Div11;