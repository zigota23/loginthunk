import { Button, Descriptions, PageHeader } from "antd";
import React from "react";
import s from './style.module.css'
import {HomeOutlined, LoginOutlined, LogoutOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router";


const Header = (props)=>{

  const navigate = useNavigate()
  let token = localStorage.getItem('token')
 

  const tokenFalse = [
    <Button key="1" className={s.buttonLog} onClick={()=>{navigate('/login')}}>
      <LoginOutlined />
    </Button>,
  ]

  const tokenTrue = [
    <Button key="3"  onClick={()=>{navigate('/products')}}>
    Products
  </Button>,
    <Button key="2" onClick={()=>{navigate('/profile')}}>
      Profile
    </Button>,
    <Button key="1" className={s.buttonLog} onClick={()=>{navigate('/login')}}>
      <LogoutOutlined />
    </Button>,
  ]
  
  const onClickHome = ()=>{
    navigate('/')
  }

  return(
    <PageHeader
    className={s.header_ant}
    onBack={() => window.history.back()}
    title={<HomeOutlined onClick={onClickHome}/>}
    subTitle="Thunk-Antd"
    extra={token?tokenTrue:tokenFalse}
    >
    </PageHeader>
  )
}

export default Header