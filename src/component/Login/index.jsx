import { useLogin } from "../../context/login-contex";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
export const Login=()=>
{
    const  {loginDispatch,email,password}=useLogin();
    const navigate=useNavigate();
    const onFormSubmit=async(e)=>
    {
     e.preventDefault();
      const data= await  userLogin(email,password)
    
      loginDispatch({
          type:'TOKEN',
          payload:{
            token:data
          }
      })
      if(data.access_token){
     navigate('/');
      }

    }
    const onEmailChange=(e)=>{
       loginDispatch({
         type:'Email',
         payload:{
            value:e.target.value

         }
       })
    }
       const onPasswordChange=(e)=>{
        loginDispatch({
          type:'Password',
          payload:{
             value:e.target.value
          }
        })
    }
      return (
         <form  onSubmit={onFormSubmit}  className="bg-white mt-[100px] p-10 w-[600px] shadow-md">
            
               <h2 className="flex justify-center text-4xl mb-[25px]">Login</h2>
            <div className="flex flex-col   gap-3">
                <span>Email :</span>
            <input className=" border-b-2" onChange={onEmailChange} type='email' placeholder="        xyz123@gmail.com" />
            </div>
            <div className="flex flex-col   gap-3">
            <span>Password :</span>
            <input  onChange={onPasswordChange}  className=" border-b-2" type='password' placeholder="         ********* " />

            </div>
            <div className="mx-4" >
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">Login</button>
            </div>
           
         </form>
      )
}