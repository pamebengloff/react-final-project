import {NavLink, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import {useState } from "react"
import { Navbar } from "../the-app/navbar/Navbar";
import "./login-styles.css"
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { HomeSearch } from "../the-app/pages/HomeSearch";

export function Login({authenticate}) {
   
    //para el AuthContext

    const {inputEmail,setInputEmail, setInputPass, inputPass} = useContext(AuthContext); 

 //  const [inputEmail, setInputEmail] = useState("");
  //  const [inputPass, setInputPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
  
    const onLogin = () =>{
        authenticate();

     navigate("/",
     {replace: true}); //me llevara al home, y no regresara al login si ya lo paso
    }
   
     //to catch the input introduced
     const {register, handleSubmit, formState: {errors}} = useForm();

     const onSubmit = (data) =>{
  
       
        document.getElementById("inputEmail").value = ""; // setSearchInput("")
        document.getElementById('inputPass').value = "";
   

        if(data.inputPass.trim().length <=0 || data.inputEmail.trim().length <=0)
        {
        setErrorMessage("Please enter your email and password");
        return
        }
        else{
           onLogin();
    
        }       
    }
 //flag comment
 //2 flag comment
 
    return (
    <>

    {/*navbar ish: */}

    <nav className="navbar navbar-expand-md">    
      <div className="container-fluid ">
        {/*icono: */}
    <img src="https://64.media.tumblr.com/5c2892b711b0b1c9bbf0b12509f1e009/691937bb40e9d75b-67/s75x75_c1/9dee6e95bfd9c4c6e7e26252283739f7931aab95.png" alt="logo" />
        <NavLink to="/login" className="navbar-brand me-auto" >Benglofffyy</NavLink>
 </div>
 </nav>

<div className="login-container container-fluid d-flex justify-content-center align-items-center">
     <div className="row login-group-titles text-center d-flex align-items-center" >
       <h2>Welcome to Bengloffyy!</h2>
        <h3>Please login to access and start discovering</h3>
      
        <div className="row login-group-form text-center d-flex align-items-center" >
        <form>
    <div className="form-group ">
            <input 
           className="form-control "
                type="text"
                id="inputEmail"
                placeholder="Enter email"
                aria-invalid={errors.inputEmail ? "true" : "false"}
                {...register("inputEmail", { required: true } )}  
                onChange={(event) => {
                    setInputEmail(event.target.value);
                  }}
            />
            {errors.inputEmail && errors.inputEmail.type === "required" && 
        (<span role="alert" className='text-danger'>An email is required</span>)}
    
    <input 
           className="form-control mt-2"
                type="password"
                id="inputPass"
                placeholder="Enter password"
                aria-invalid={errors.inputPass ? "true" : "false"}
                {...register("inputPass", { required: true } )}  
            />
            {errors.inputPass && errors.inputPass.type === "required" && 
        (<span role="alert" className='text-danger'>A password is required</span>)}
    
    </div>
    <div className="form-group mt-2">
        <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit(onSubmit)}>
            Login
        </button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
    </div>
    </form>
    </div>
    </div>
</div>

        </>
    );
}

