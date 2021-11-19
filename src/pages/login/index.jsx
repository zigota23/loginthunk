import React from "react";
import s from './style.module.css'
import img from '../../assets/img/loginBackground.jpg'

import { Form, Input, Button } from 'antd';
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/user";
import { useNavigate } from "react-router";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props)=>{

  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = (values) => {
   dispatch(loginUser(navigate,values))
  };

  const onClickCreate = ()=>{
    navigate('/signup')
  }

  return(
    <>
    <div className={s.background_login}><img src={img}/></div>
    <div  className={s.form_antd}>
      <div className={s.formTitle}>Sign In</div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true }]} className={s.itemForm}>
          <Input/>
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true },{min:8}]} className={s.itemForm}>
          <Input.Password/>
        </Form.Item>
        <Form.Item {...tailLayout} className={s.button_form}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
     </Form>
     <div className={s.button_create}><Button type="primary" onClick={onClickCreate} block>Create an account</Button></div>
    </div>
      
    </>
  )
}

export default Login