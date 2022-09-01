import {NavLink, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import {useState } from "react"
import "./login-styles.css"
import { Navbar } from "../the-app/navbar/Navbar";

export function Login(props) {
   
    const [inputEmail, setInputEmail] = useState("");
    const [inputPass, setInputPass] = useState("");

    const navigate = useNavigate();
  
    const onLogin = () =>{
     navigate("/",
     {replace: true}); //me llevara al home, y no regresara al login si ya lo paso
    }
   

     //to catch the input introduced
     const {register, handleSubmit, formState: {errors}} = useForm();

     const onSubmit = (data) =>{
 
        
        document.getElementById("inputEmail").value = ""; // setSearchInput("")
        document.getElementById('inputPass').value = "";
       
       
        onLogin();
    //    if(data.inputPass.trim().length <=0) return; 
     //   if(data.inputEmail.trim().length <=0) return; 

     }
 
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
     <div className="row login-group text-center d-flex align-items-center" >
        <form>
    <div className="form-group ">
            <input 
           className="form-control "
                type="text"
                id="inputEmail"
                placeholder="Enter email"
                aria-invalid={errors.inputEmail ? "true" : "false"}
                {...register("inputEmail", { required: true } )}  
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
            className="btn login-button"
            type="submit"
            onClick={handleSubmit(onSubmit)}>
            Login
        </button>
    </div>
    </form>

    </div>
</div>

{  inputEmail && <Navbar  inputEmail={inputEmail} /> }
        </>
    );
}

