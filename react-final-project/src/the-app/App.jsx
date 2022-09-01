
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import {useState} from "react"
import {Login} from "../auth/Login"
import { AppRoutes } from "./routes/AppRoutes"

export function App(){ //ESTAMOS EN DEV


    const [user, setUser] = useState(null);

    return(
        <Router>
           
        <Routes>
            <Route path="/login" element={<Login/>} >Login</Route>
          
            <Route path="/*" element={<AppRoutes/>} ></Route>
             {/*cualquier direccion te llevara al home */}
        </Routes>
    </Router>
    )
}