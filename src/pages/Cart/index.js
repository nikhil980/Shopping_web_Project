import NavBar from "../../component/NavBar"
import { useCart } from "../../context/cart-context"
import { HorizontalProductCard } from "../../component/HorizontalProductCard"
import { PriceDetails } from "../../component/PriceDetails"
import {  useNavigate } from "react-router-dom"
export const Cart=()=>{
   const {cart}=useCart();
   const navigate=useNavigate();
    return (
        <>
           <NavBar/>
          
           <main className=" flex flex-col items-center pt-6 ">
           {  
           cart?.length>0?(
             <>
             <h2 className="text-3xl">  Your Cart </h2>
              <div  className="flex  gap-8 " >
              <div className="pt-4 flex flex-col gap-4">
                {
                 cart?.length>0&& cart.map(product=><HorizontalProductCard key={product.id} product={product} />)    
                }
               
               </div>
               <div>
               <PriceDetails/>
               </div>
             
              </div></> 
           ):<div>
            <h2>Cart is Empty</h2>
            <p onClick={()=>navigate('/')} className="cursor-pointer text-red-600" >Click to Add Item</p>
           </div>
              }    
      
            </main>
        </>
    )
}