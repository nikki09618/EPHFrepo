import { useNavigate } from "react-router-dom"

function Login() {

    const Navigate=useNavigate();
    const loginUser=()=>{
        localStorage.setItem("login","true")
        Navigate ("/dashbord");
    }

   return(
    <>
      
      <h2>Login Page</h2>
      <button onClick={loginUser}>Login</button>
    </>

   )
    
}

export default Login