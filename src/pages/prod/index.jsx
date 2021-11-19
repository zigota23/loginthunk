import { EditFilled } from "@ant-design/icons";
import { Button, Rate } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getProd } from "../../store/actions/product";
import img from './../../assets/img/product.png'
import s from './style.module.css'


const Prod = (props)=>{

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const prod = location.state
  useEffect(()=>{
    //dispatch(getProd(location.state))
  },[])

  const onClickChange = ()=>{
    navigate('/product/change',{state:prod})
  }

  return(
    <div className={s.product}>
      <div className={s.imgProd}><img src={img}/></div>
      <div className={s.infoProd}>
        <div className={s.prodName}>{prod.name}</div>
        <div className={s.prodCategory}>Category:{prod.category}</div>
        <div className={s.prodManufacturer}>Manufacturer:{prod.manufacturer}</div>
        <div className={s.prodDescription}><div>Description:</div><div>{prod.description}</div></div>
        <div className={s.caloriesAmount}>
          <div className={s.prodCalories}>Calories:{prod.calories}</div>
        <div className={s.prodAmount}>Amount:{prod.amount}</div>
        </div>
        <div className={s.prodRating}><div>Rating:</div><Rate disabled defaultValue={prod.rating}/></div>
        <div className={s.changeProd}><div>Change product:</div><Button onClick={onClickChange}><EditFilled /></Button></div>
      </div>
    </div>
  )
}

export default Prod