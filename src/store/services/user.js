import inctance from ".";


export const userApi = {
  signUp:async (payload)=> await inctance.post('/registration',payload),
  
  refreshToken:async ()=> await inctance.get('/refresh'),

  logout:async ()=> await inctance.get('/logout'),

  getMe:async ()=> await inctance.get('/profile'),

  updateUser:async (payload)=> await inctance.patch('/profile-update',payload),

  deleteUser:async ()=> await inctance.delete('/profile-delete'),

}