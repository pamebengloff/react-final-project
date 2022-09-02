import {NavLink, Link, useNavigate} from "react-router-dom"
import {useRef} from "react"
import { HomeSearch } from "../pages/HomeSearch";
import "./navbar.css"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {BiUser} from "react-icons/bi"

export function Navbar({
logout
//,user
} ){
    
  const {inputEmail, user, setUser} = useContext(AuthContext); 
  
  //custom hook de router
  const navigate = useNavigate();
  
  const userImg = "https://64.media.tumblr.com/8bd5c2b2c0a375b5452ab5e797693502/b34844853d0bbbfa-c9/s75x75_c1/8625529a7ae86faaf4ab8fe3a0a4ecf2d6e5883d.png"

  const onLogout = () =>{
    logout();
   
   navigate("/login",
   {replace: true}); //me llevara al login y no dejara regresar al home, el replace evita que el user pueda regresar al historial anterior porque se esta reemplazando
  }
  
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  //flag message
  return(
<>
        
<nav className="navbar sticky-top navbar-expand-sm navbar-expand-xs bg-color">    
<div className="container-fluid">
      <img className="brand-icon" src="https://64.media.tumblr.com/5c2892b711b0b1c9bbf0b12509f1e009/691937bb40e9d75b-67/s75x75_c1/9dee6e95bfd9c4c6e7e26252283739f7931aab95.png" alt="logo" />
      <NavLink to="/" className="navbar-brand" >Benglofffyy</NavLink>

      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
       ref={navButton}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown" aria-labelledby="defaultDropdown"
         ref={linksContainerRef}>
          <ul className="navbar-nav ms-auto">
            
          
            <li className="nav-item" >   
             <NavLink  to="/"  className="nav-link" 
                onClick={collapseNav}
                >
              Home
              </NavLink>
            </li>
            <li className="nav-item ">
             <NavLink  to="/about"  className={({isActive}) => `nav-item nav-link ${isActive ? "active":""}`} 
                onClick={collapseNav}
                >
              About
              </NavLink>
            </li>
           
          <li className="nav-item">   
              <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <BiUser/>   
              </Link>
             <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <p className="m-3"> {inputEmail} </p>
                  <Link className="dropdown-item d-flex  ms-auto" to="/login"
                      onClick={onLogout}>
                    Logout
                  </Link>
                </li>
             </ul>
            </li>
          </ul>
         
        </div>
     </div>
    
     
    </nav>
    
    </>
    )
}