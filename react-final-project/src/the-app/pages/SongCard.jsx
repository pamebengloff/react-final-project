import {useNavigate} from "react-router-dom"
import "./songcard-styles.css"

export function SongCard(){

    const navigate = useNavigate();

    const songImageUrl = "https://64.media.tumblr.com/270099db904a757d322dec9c8fbb5661/tumblr_onmbmgvZfJ1w437o4o3_500.jpg"
   // const songImageUrl ="https://www.pngitem.com/pimgs/m/111-1115149_northern-giraffe-deer-drawing-cartoon-giraf-drawing-transparent.png"
    return(
    <>
<div className="container">
  
<div className="songcard-container container-fluid col-sm ">
    <div className="songimg-container">
        <button className="btn keepsearch-button " onClick={()=>{navigate("/")} } >Keep searching</button>     
      
        <img className="song-result-img img-fluid " src={songImageUrl} alt="searched song" />
       
    </div>
  
    <div className="songtext-container">
        <p >title</p>
        <p >title</p>
    </div>
 </div>
 </div>
    </>
    )
>>>>>>> featureSongCard
}