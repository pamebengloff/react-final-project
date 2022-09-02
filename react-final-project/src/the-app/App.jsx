
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom"
import {useState} from "react"
import {Login} from "../auth/Login"
import { AppRoutes } from "./routes/AppRoutes"
import { Navbar } from "./navbar/Navbar";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export function App(){

    const [logged, setLogged] = useLocalStorage("logged", false);
    const [user, setUser] = useState(null);

    function changeToLoggedUser(status){
        setUser(status)
        setLogged(true)
    }

    function changeToLoggedOutUser(status){
        setUser(status)
        setLogged(false)
    }

    useEffect( () =>{

        !logged ? setUser(true) : setUser(false);

    }, [logged])

    
    return(

        <Router>
           
        <Routes>
            {!user && (    //si el user no esta loggeado mandalo a login
          
            <Route path="/login" element={<Login authenticate={ (status) => changeToLoggedUser(status) } />} >Login</Route>
            )}

            {user  && (  //si el user si esta loggeado mandalo al home

                <>
          
           {/* <Route path="/navbar" element={<Navbar logout={ ()=> setUser(false) } />} ></Route>*/}
            <Route path="/navbar" element={<Navbar logout={ (status) => changeToLoggedOutUser(status) } />} >Navbar</Route>
            
            <Route path="/*" element={<AppRoutes/>} ></Route>
            
            </>
             )}

            <Route path="*" element={<Navigate  to={user ? "/" : "/login"} />} ></Route>
        </Routes>
    </Router>
    
    )
}