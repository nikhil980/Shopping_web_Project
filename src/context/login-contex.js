import { createContext,useContext,useReducer} from "react";
import { loginReducer } from "../reducer/loginReducer";
const LoginContext=createContext();

const LoginProvider=({children})=>{
    
        const  initialstate={
            email:'',
            password:'',
             token:""
        }

    const [{email,token,password},loginDispatch]=useReducer(loginReducer,initialstate);
    return (
      <>
      <LoginContext.Provider value={{token,email,password,loginDispatch}}>
        {children}
      </LoginContext.Provider>
      </>
    )
}
const useLogin=()=>useContext(LoginContext);
export {LoginProvider,useLogin}