import { useCart } from "../context/cart-context"
import { findProductInCart } from "../utility/findProductInCart";
import { useNavigate } from "react-router-dom";
import { findProductInWish } from "../utility/findProductInWish";
export const ProductCard =({product})=>
{
     const {cart,wishlist,cartDispatch}=useCart();

     const navigate=useNavigate();
      const onCartClick=(product)=>
      {       
           !isProductIncart?
             cartDispatch({
               type: "ADD_TO_CART",
               payload:{product}
             }):navigate('/cart')
             
      }   
      const onWishClick=(product)=>
          {!isProductInWish?
             cartDispatch({
               type: "ADD_TO_WISH",
               payload:{product}
             }):navigate('/wish')
          }    

      const isProductIncart=findProductInCart(cart,product.id)
      const isProductInWish=findProductInWish(wishlist,product.id)
   
      return (
        <div className="card card-vertical d-flex direction-column relative shadow">
     <div className="card-image-container">
          <img className="card-image" src={product.images[0]} alt="shoes"/>
     </div>
     <div className="card-details">
          <div className="card-des">{product.title}</div>
          <div className="card-description">
               <p className="card-price">
                  Rs. {product.price}
               </p>
          </div>
          <div className="cta-btn">
              <button onClick={()=>onWishClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
               <span className="material-symbols-outlined">favorite</span>
               {
               isProductInWish? 'Go To Wishlist':'Add To Wishlist'
               }
               </button>

               <button  onClick={()=>onCartClick(product)}  className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
               <span className="material-symbols-outlined">
                  {
                    isProductIncart? 'shopping_cart_checkout':'add_shopping_cart'
                  }  
                   </span>
                   {
                   isProductIncart? 'Go To Cart':' Add To Cart'
                   }
                 
               </button>
              
          </div>
     </div>
</div>
    )
}