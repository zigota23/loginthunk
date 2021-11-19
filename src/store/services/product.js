import instance from ".";

export const productApi = {
  createProd:(payload)=> instance.post('/product-create',payload),

  getProducts:()=> instance.get('/products'),

  getProd:(payload)=> instance.get(`/products?id=${payload}`),

  updateProd:(payload,id)=> instance.patch('/product-update?id='+id,payload),

  deleteProd:(payload)=> instance.delete('/products-delete',payload),

}