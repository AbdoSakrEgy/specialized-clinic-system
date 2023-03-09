import React,{useState,useEffect,useContext,createContext} from "react";
export const AuthContext=createContext({});

function AuthProvider({children}) {
    const [auth,setAuth]=useState({});

    return ( 
        <React.Fragment>
            <AuthProvider.provider value={{auth,setAuth}}>
                {children}
            </AuthProvider.provider>
        </React.Fragment>
     );
}

export default AuthProvider;