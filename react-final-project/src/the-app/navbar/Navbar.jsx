import {NavLink, Link, useNavigate} from "react-router-dom"
import { Home } from "../pages/Home";
import { SearchBar } from "../pages/SearchBar";
import "./navbar.css"


export function Navbar(){
    
  //custom hook de router
  const navigate = useNavigate();
  
  const userImg = "https://64.media.tumblr.com/8bd5c2b2c0a375b5452ab5e797693502/b34844853d0bbbfa-c9/s75x75_c1/8625529a7ae86faaf4ab8fe3a0a4ecf2d6e5883d.png"

  const onLogout = () =>{
   navigate("/login",
   {replace: true}); //me llevara al login, y el replace evita que el user pueda regresar al historial anterior porque se esta reemplazando
  }
  
  return(
<>

<nav className="navbar navbar-expand-lg bg-color">    
      <div className="container-fluid">
    <img src="https://64.media.tumblr.com/5c2892b711b0b1c9bbf0b12509f1e009/691937bb40e9d75b-67/s75x75_c1/9dee6e95bfd9c4c6e7e26252283739f7931aab95.png" alt="logo" />
        <NavLink to="/" className="navbar-brand " >Benglofffyy</NavLink>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
       
          <ul className="navbar-nav  ms-auto ">
            <li className="nav-item   ">   
             <NavLink to="/" className="nav-link" >
              Home
              </NavLink>
            </li>
            <li className="nav-item ">
             <NavLink to="/about"  className={({isActive}) => `nav-item nav-link ${isActive ? "active":""}`}>
              About
              </NavLink>
            </li>
         
           
          <li className="nav-item ">   
              
              <Link className="nav-link dropdown-toggle " to="/" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
              <img className="img-user d-inline-block " src={userImg} alt="user"
              />
                
              </Link>
              <ul className="dropdown-menu dropdown-menu-end ">
                <li>
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