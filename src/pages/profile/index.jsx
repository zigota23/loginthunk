import React, { useEffect } from 'react'
import s from './style.module.css'
import img from '../../assets/img/profile.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/actions/user'

const Profile = (props)=>{

  const {first_name,last_name} = useSelector(state=>state.userReducer.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!first_name && !last_name)dispatch(getUser())
  },[])

  return(
    <div  className={s.profile}>
      <div className={s.profile_img}><img src={img}/></div>
      <div className={s.profile_info}>
        <div className={s.first_name}>{first_name}</div>
        <div className={s.last_name}>{last_name}</div>
      </div>
    </div>
  )
}

export default Profile