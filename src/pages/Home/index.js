
import { useEffect,useState } from "react"
import { getAllProducts } from "../../api/getAllProduct"
import { ProductCard } from "../../component/ProductCard";
import NavBar from "../../component/NavBar";
// import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductByCategories } from "../../utility/getProductsByCategories";
export const Home=()=>{

    const [products,setProduct]=useState([]);
    const [categories,setCategories]=useState([]);
    const [selectedCategory,setselectedCategory]=useState("All");
    useEffect(()=>{
        (async()=>{
            const products=await  getAllProducts();
            const categories=await  getAllCategories();
            const updatedCategories=[...categories,{id:'1a',name:'All',image:'https://i.imgur.com/ZANVnHE.jpeg'}]
            setProduct(products);
            setCategories(updatedCategories);
        })()
       
    },[])
   const onCategoryClick=(category)=>
   {
      setselectedCategory(category);
   }

   const filterByCategories=getProductByCategories(products,selectedCategory);
    return (
          <>
          <NavBar/>
          <main className="pt-8">
           
           <div className="flex gap-8 justify-center mb-4">
              {
                 
               categories?.length >0&&categories.map(category=>
                  
               (category.name!=='Nueva categoria'&&category.name!=='New Category'&& category.name!=='Testing Category')&&<div className=" bg-transparent
                front-semiBold rounded-full  p-1 cursor-pointer"  onClick={()=>onCategoryClick(category.name)}>
                    
                    <img className=" rounded-full hover:p-1 h-20 w-21" src={category.image}/>
                    {category.name}
                    
                    </div>)
               
            }
           </div>
           
           <div className="flex flex-wrap gap-8 justify-center ">
             {
              filterByCategories?.length>0?filterByCategories.map(product=><ProductCard key={product.id} product={product}/>):<h2>No Products Found.Please try another category</h2>
            }</div> 
            </main>
          </>
    )
}