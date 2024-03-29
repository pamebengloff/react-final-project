import "./about-styles.css"

export function About(){
    return(
        <>
{/* flag */}
<div className="container">
  <div className="row about-row">
    <div className="col-sm">
    <h1 className="about-greet">
            About
        </h1>
        <p className="about-description">
        This is a project made with React, Bootstrap and the Spotify API. <br />                
    </p>
    </div>
  
  </div>

  <div className="row about-row">
    <div className="col-sm">
  
    <h3>What does it do?</h3>
<br />
    <p>
       It gives you 10 song recommendations based on a song or artist you search, <br />
       and you can listen to a 30 seconds preview of them.        

    </p>
    </div>
   
  </div>
</div>


       
    </>
    )
}