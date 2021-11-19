import instance from ".";


export const userApi = {
  signUp:(payload)=>instance.post('/registration',payload),
  
  refreshToken:()=>instance.get('/refresh'),

  logout:()=>instance.get('/logout'),

  getMe:()=>instance.get('/profile'),

  updateUser:(payload)=>instance.patch('/profile-update',payload),

  deleteUser:()=>instance.delete('/profile-delete'),

  login:(payload)=>instance.post('/login',payload),

}