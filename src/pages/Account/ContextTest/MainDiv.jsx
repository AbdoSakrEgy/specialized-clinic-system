import React, { useRef,useState,useEffect,useContext,createContext } from "react";
import Div1 from "./Div1";
import Div2 from "./Div2";
export const UserContext = createContext();

function MainDiv() {
    const [userName,setUserName]=useState("abdo sakr");
    const [userAge,setUserAge]=useState(22);

    return ( 
        <React.Fragment>
            <UserContext.Provider value={userName}>
                <Div1 />
                <Div2 />
            </UserContext.Provider>
        </React.Fragment>
     );
}

export default MainDiv;