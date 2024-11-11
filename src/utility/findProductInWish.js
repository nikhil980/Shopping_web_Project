
export const findProductInWish =(wishlist,id)=> wishlist?.length>0&&wishlist.some(product=>product.id===id)