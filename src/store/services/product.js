import inctance from ".";

export const productApi = {
  createProd:async(payload)=>await inctance.post('/products/create',payload),

  getProducts:async()=>await inctance.get('/products'),

  getProd:async(payload)=>await inctance.get('/product',payload),

  updateProd:async(payload)=>await inctance.patch('/product-update',payload),

  deleteProd:async(payload)=>await inctance.delete('/products-delete',payload),

}