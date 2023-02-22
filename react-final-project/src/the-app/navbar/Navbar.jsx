import {NavLink, Link, useNavigate} from "react-router-dom"
import {useRef, useContext } from "react";
import { HomeSearch } from "../pages/HomeSearch";
import "./navbar.css"
import AuthContext from "../../context/AuthContext";
import {BiUser} from "react-icons/bi"
import logo from "../images/favicon.png"

export function Navbar({logout}){
    
  const {inputEmail, user, setUser} = useContext(AuthContext); 
  
  //custom hook de router
  const navigate = useNavigate();

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
      <img className="brand-icon" src={logo} alt="logo" /> 
      <NavLink to="/" className="navbar-brand" >LoveSong</NavLink>


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