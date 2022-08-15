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

    {/*navbar ish: */}
 
    <nav className="navbar navbar-expand-lg">    
      <div className="container-fluid ">
        {/*icono: */}
    <img src="https://64.media.tumblr.com/5c2892b711b0b1c9bbf0b12509f1e009/691937bb40e9d75b-67/s75x75_c1/9dee6e95bfd9c4c6e7e26252283739f7931aab95.png" alt="logo" />
        <NavLink to="/login" className="navbar-brand me-auto" >Benglofffyy</NavLink>
 </div>
 </nav>
 
   
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

