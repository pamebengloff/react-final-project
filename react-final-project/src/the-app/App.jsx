
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"

import {Login} from "../auth/Login"
import { AppRoutes } from "./routes/AppRoutes"

export function App(){ //ESTAMOS EN DEV
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