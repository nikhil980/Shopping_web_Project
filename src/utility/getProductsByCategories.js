
export const getProductByCategories=(products,category)=>
{
   return category.toLowerCase()==='all'?products:products?.length>0&& products.filter(product=>product.category.name.toLowerCase()===category.toLowerCase());
}