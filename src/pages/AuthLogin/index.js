import NavBar from "../../component/NavBar"
import { Login } from "../../component/Login"
export const AuthLogin=()=>
{
    return (
        <>
           <NavBar/>
           <main className="flex justify-center  items-center mt-22">
           <Login/>
           </main>
        
        </>
      
    )
}