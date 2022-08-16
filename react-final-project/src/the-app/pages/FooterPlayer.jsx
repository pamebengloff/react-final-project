import "./footerplayer-styles.css"

export function FooterPlayer( //recibimos los props de Song.jsx
    {id,
        artistid,
        songtitle,
        albumtitle,
        artistname
    }
){

    const albumImageUrl = "https://64.media.tumblr.com/4374a87e6c07c94da7f89b3c6d4ecb00/fdf5cb6f879e878c-1d/s400x600/4e1632ab70fb0e425f9360724f9643bb15c9c3eb.jpg"
    return(
        
        <div className="footer-container " >
          <div className="player-container container-fluid">  
            <button className="btn-play">
                   <img className="img-play"src="https://64.media.tumblr.com/6d6a1fc357844bb59323253841de68a6/ee6d1c32f6a1245d-d0/s75x75_c1/9b496871ef6889d497c5abc3fad5d529fd83526f.png" alt="Play" />
            </button>
           
            <div className="info-container container-fluid">
            
            <img  className="img-album" src={albumImageUrl} alt="album" />  
            
            <div className="titles-container">
            <span className="song-title">Somewhere Only We Know</span>
                <p>Hopes And Fears</p>
                <p>Keane</p>
            </div>
    

            </div> 
            </div>
          
        </div>
    )
}