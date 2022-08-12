import {NavLink, Link, useNavigate} from "react-router-dom"
import { Home } from "../pages/Home";
import "./navbar.css"


export function Navbar(){
    
  //custom hook de router
  const navigate = useNavigate();
  
  const onLogout = () =>{
   navigate("/login",
   {replace: true}); //me llevara al login, y el replace evita que el user pueda regresar al historial anterior porque se esta reemplazando
  }
  
  return(
<>
<nav className="navbar navbar-expand-lg bg-color ">
    
      <div className="container-fluid ">
    
        <Link to="/" className="navbar-brand ">Benglofffyy</Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
       
          <ul className="navbar-nav ">
            <li className="nav-item  ">   
             <NavLink to="/" className="nav-link" >
              Home
              </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/about"  className={({isActive}) => `nav-item nav-link ${isActive ? "active":""}`}>
              About
              </NavLink>
            </li>
         
            <li className="nav-item">
              <Link className="nav-link dropdown-toggle" to="/" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </Link>
              <ul className="dropdown-menu ">
                <li>
                  <Link className="dropdown-item d-flex justify-content-center" to="/login"
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