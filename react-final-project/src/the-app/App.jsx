
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom"
import {useState} from "react"
import {Login} from "../auth/Login"
import { AppRoutes } from "./routes/AppRoutes"
import { Navbar } from "./navbar/Navbar";
import { HomeSearch } from "./pages/HomeSearch";
import { useEffect } from "react";


export function App(){ //ESTAMOS EN DEV

    const [user, setUser] = useState(null);
//flag comment
    
    return(

        <Router>
           
        <Routes>
            {!user && (    //si el user no esta loggeado mandalo a login
          
            <Route path="/login" element={<Login authenticate={ ()=> setUser(true) } />} >Login</Route>
            )}

            {user  && (  //si el user si esta loggeado mandalo al login

                <>
          
          <Route path="/navbar" element={<Navbar logout={ ()=> setUser(false) } />} ></Route>
            <Route path="/*" element={<AppRoutes/>} ></Route>
            
            </>
             )}

            <Route path="*" element={<Navigate  to={user ? "/" : "/login"} />} ></Route>
        </Routes>
    </Router>
    
    )
}