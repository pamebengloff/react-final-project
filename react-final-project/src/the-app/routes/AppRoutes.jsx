import { Routes, Route, Navigate  } from "react-router-dom"
import { Navbar } from "../navbar/Navbar.jsx"
import {Home} from "../pages/Home"
import {About} from "../pages/About"
import { SearchBar } from "../pages/SearchBar.jsx"
import { Song } from "../pages/Song.jsx"
import { Album } from "../pages/Album.jsx"
import { Artist } from "../pages/Artist.jsx"
import { FooterPlayer } from "../pages/FooterPlayer.jsx"


export function AppRoutes() {
    return (
       <> 
       <Navbar />
    <div className="container">
       <Routes>
            <Route path="/" element={<Home/>} >Home</Route>
            <Route path="about" element={<About/>} >About</Route>
        
            <Route path="/searchbar" element={<SearchBar/>}> Search</Route>
            <Route path="/songs" element={<Song/>}>Song</Route>
            <Route path="/album" element={<Album/>}>Album</Route>
            <Route path="/artist/:artistname" element={<Artist/>}>Artist</Route>

             <Route path="/*" element={<Navigate to="/" />} />
            {  /*404 page to Home cualquier direccion te llevara al home */}
        </Routes>
        <FooterPlayer/>
    </div>
       </>
    )
}

