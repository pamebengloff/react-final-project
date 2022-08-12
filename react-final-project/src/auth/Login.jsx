import {useNavigate} from "react-router-dom"

export function Login(props) {
   
    const navigate = useNavigate();
  
    const onLogin = () =>{
     navigate("/",
     {replace: true}); //me llevara al home, y no regresara al login si ya lo paso
    }
   
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={onLogin}> 
                Login
            </button>
        </div>
    );
}

