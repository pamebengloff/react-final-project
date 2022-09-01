import { Routes, Route, Navigate  } from "react-router-dom"
/*fijo */
import { Navbar } from "../navbar/Navbar.jsx"
/*paginas */
//import {Home} from "../Home"
import {About} from "../pages/About"
import { SearchBar } from "../pages/HomeSearch.jsx"
/*con params?*/
//import { SongCard } from "../pages/components/SongCard.jsx"
/*login*/ 
//import { Login } from "../auth/pages/Login.jsx"

//encargado de dar las direcciones para App
export function AppRoutes() {
   
    return (
       <> 
       <Navbar />
   
    <div className="container">
       <Routes>
            <Route path="/" element={<SearchBar/>} >Home</Route>
         
            <Route path="about" element={<About/>} >About</Route>

             <Route path="/*" element={<Navigate to="/" />} />
            {  /*404 page to Home cualquier direccion te llevara al home */}
        </Routes>
      </div>
   
       </>
    )
}

