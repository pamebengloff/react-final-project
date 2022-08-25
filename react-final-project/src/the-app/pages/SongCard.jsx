import {useNavigate} from "react-router-dom"

export function SongCard(){

    const navigate = useNavigate();

    return(
    <>
       <button className="btn search-button mt-1" onClick={()=>{navigate("/")} } >Keep searching</button>
 <h1>holaaaaaaaaaaa</h1>
    </>
    )
}