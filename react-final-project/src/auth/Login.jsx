import {NavLink, useNavigate} from "react-router-dom"
import "./login-styles.css"

export function Login(props) {
   
    const navigate = useNavigate();
  
    const onLogin = () =>{
     navigate("/",
     {replace: true}); //me llevara al home, y no regresara al login si ya lo paso
    }
   
    return (
    <>
<div id="login-nav">
<nav class="navbar bg-color navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="">Tindog</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Pricing</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Download</a>
        </li>
    </ul>
 </div>
</nav>
</div>
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button 
                className="btn login-button"
                onClick={onLogin}> 
                Login
            </button>
        </div>
        
        </>
    );
}

