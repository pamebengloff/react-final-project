import {useNavigate} from "react-router-dom"
import "./songcard-styles.css"

export function SongCard(){

    const navigate = useNavigate();

    return(
    <>
    <div className="">

       <button className="btn search-button mt-1" onClick={()=>{navigate("/")} } >Keep searching</button>
        
       <h1>holaaaaaaaaaaa</h1>
       <h1>mundoooooooooooooooooooooo</h1>
    </>
    )
}