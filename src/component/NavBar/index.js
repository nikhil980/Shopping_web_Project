import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useLogin } from "../../context/login-contex";


const NavBar = () => {

  const navigate=useNavigate();
   const [isAccountDropDownOpen,setAccountDropDownOpen]=useState(false);
   const  {token,loginDispatch}=useLogin();
   
   const   onLoginCLick=()=>{
      if(token?.access_token){
        navigate('/auth/login')
      }
      else{
        loginDispatch({
          type:'LOGOUT',
          
        })
        navigate('/auth/login')
      }
   }
 
   return (
   
        <header className="flex  bg-teal-500 px-8 py-4">
            <div>
                <h1 onClick={()=>navigate('/')} className=" cursor-pointer text-4xl ">ShopIt</h1>
            </div>
            <nav  className="ml-auto flex gap-6">
            <span  onClick={()=>navigate('/')}  className="material-symbols-outlined text-3xl cursor-pointer ">home</span>
            
            <span  onClick={()=>navigate('/wish')}   className=" cursor-pointer  material-symbols-outlined text-3xl hover :coursor-pointer ">
            favorite
            </span>
           
            <span onClick={()=>navigate('/cart')} className=" cursor-pointer material-symbols-outlined text-3xl hover :coursor-pointer ">
           shopping_cart
           </span>
          <div  className="relative">
            <span onClick={()=>setAccountDropDownOpen(!isAccountDropDownOpen)} className=" cursor-pointer material-symbols-outlined text-3xl hover :coursor-pointer ">
                account_circle
            </span>
            {  
            
            isAccountDropDownOpen&&
            <div className="absolute  bg-emerald-400">
          <button onClick={onLoginCLick} >
            {
            token?.access_token?'Logout':'Login'
            }
         </button>
            </div>
              }
          </div>
          
            </nav>
        </header>
    
  )
}

export default NavBar
