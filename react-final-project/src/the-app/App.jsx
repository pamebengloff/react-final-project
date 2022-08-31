
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"

import {Login} from "../auth/Login"
import { AppRoutes } from "./pages/routes/AppRoutes"

export default function App(){ //ESTAMOS EN DEV
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