import { Routes, Route, Navigate  } from "react-router-dom"
/*fijo */
import { Navbar } from "../navbar/Navbar.jsx"
/*paginas */
import {About} from "../pages/About"
import { HomeSearch } from "../pages/HomeSearch.jsx"
/*login*/ 
//import { Login } from "../auth/pages/Login.jsx"

//encargado de dar las direcciones para App
export function AppRoutes(setUser) {
   
    return (
       <> 
       <Navbar logout={ ()=> setUser(false) }/>
   
    <div className="container">
       <Routes>
            <Route path="/" element={<HomeSearch/>} >Home</Route>
         
            <Route path="about" element={<About/>} >About</Route>

             <Route path="/*" element={<Navigate to="/" />} />
            {  /*404 page to Home cualquier direccion te llevara al home */}
        </Routes>
      </div>
   
       </>
    )
}

