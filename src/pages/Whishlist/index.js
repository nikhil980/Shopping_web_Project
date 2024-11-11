import NavBar from "../../component/NavBar"
import { useCart } from "../../context/cart-context"
import { HorizontalProductCard } from "../../component/HorizontalProductCard"

export const Whishlist=()=>{
   const {wishlist}=useCart();
    return (
        <>
           <NavBar/>
          
           <main className=" flex flex-col items-center pt-6 ">
              <h2 className="text-3xl">  Your wishlist </h2>
              <div  className="flex  gap-8 " >
              <div className="pt-4 flex flex-col gap-4">
                {
                 wishlist?.length>0&& wishlist.map(product=><HorizontalProductCard key={product.id} product={product} />)    
                }
               
               </div>
              </div>
           
         
            </main>
        </>
    )
}