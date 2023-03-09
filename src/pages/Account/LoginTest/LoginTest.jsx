import React, { useRef,useState,useEffect,useContext } from "react";
import { AuthContext } from "../contextTutorialTest/AuthProvider";
const LOGIN_URL='/auth';

const LoginTest = () => {
    const {setAuth}=useContext(AuthContext)
    const userRef=useRef();
    const errRef=useRef();

    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // try {
        //     const response=await axios.post(LOGIN_URL,
        //         JSON.stringify({user,pwd}),
        //         {
        //             headers:{'Content-Type':'application/json'},
        //             withCredentials:true
        //         }
        //     );
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch(err) {

        // }
    }
    
    return ( 
        <React.Fragment>
            {success ? (
                <section>
                    <h1>You are loged in!</h1>
                    <p>
                        <a href="#">Go to home</a>
                    </p>
                </section>
            ):(
                <div>
                    <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=>{setUser(e.target.value)}}
                            value={user}
                            required
                            className="border-2 border-black"
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e)=>{setPwd(e.target.value)}}
                            value={pwd}
                            required
                            className="border-2 border-black"
                        />

                        <button className="bg-green-500">Login</button>

                        <p>
                            Need an account?<br/>
                            <span>
                                {/* Put router link here */}
                                <a href="#">Signup</a>
                            </span>
                        </p>
                    </form>
                </div>
            )}
            
        </React.Fragment>
     );
}
 
export default LoginTest;