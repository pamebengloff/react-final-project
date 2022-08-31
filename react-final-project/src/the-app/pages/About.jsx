import "./home-styles.css"


export function About(){
    return(
        <>

<div class="container">
  <div class="row">
    <div class="col-sm">
    <h1 className="home-greet">
            About
        </h1>
    </div>
  
  </div>

  <div class="row">
    <div class="col-sm">
    <p className="home-description">
        This is a project made with React, Bootstrap and the Spotify API <br />                
    </p>

    <h3>What does it do?</h3>

    <p>
       It gives you 10 song recommendations based on a song you search. <br />
       And you can listen to a 30 seconds preview of them.        

    </p>
    </div>
   
  </div>
</div>


       
    </>
    )
}