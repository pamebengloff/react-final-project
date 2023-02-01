
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom"
import {useState} from "react"
import {Login} from "../auth/Login"
import { AppRoutes } from "./routes/AppRoutes"
import { Navbar } from "./navbar/Navbar";
import Footer from "./pages/components/Footer.jsx"
import AuthContext, { AuthProvider } from '../context/AuthContext';
import { useContext } from "react";
import { useEffect } from "react";

export function App(){

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const u = localStorage.getItem("user");
        u && JSON.parse(u) ? setUser(true) : setUser(false);
    }, [])

    useEffect( () => {
        localStorage.setItem("user", user)
    }, [user] );

   
    return(
        <AuthProvider >
         
        <Router>
           
        <Routes>
            {!user && (    //if user is NOT logged, send to login 
            <>       
            <Route path="/login" element={<Login authenticate={ ()=> setUser(true) } />} >Login</Route>


            <Route path="*" element={<Navigate  to={"/login"} />} ></Route>
            </> 
            )}

            {user  && (  //if user IS logged, send to home

                <>
          
          <Route path="/navbar" element={<Navbar logout={ ()=> setUser(false) } />} ></Route>
            <Route path="/*" element={<AppRoutes/>} ></Route>
            
            <Route path="*" element={<Navigate   to={user ? "/" : "/login"}  />} ></Route> 
            </>
             )}

           {/* <Route path="*" element={<Navigate  to={user ? "/" : "/login"} />} ></Route>   */}
        </Routes>

        {/* <Footer/> */}
    </Router>
    </AuthProvider>
    )
}