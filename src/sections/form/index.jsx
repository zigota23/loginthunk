import React from 'react'
import { Form, Input, Button } from 'antd';
import s from './style.module.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const validatePassword = (rule,value,callback)=>{
  if(value && value.length<8){
    return callback('Not longer password,Min lenght - 8')
  }else{
   return callback()
  }
}

const getItems = (items)=>{

  const itemType = {
    'Input':()=><Input/>,
    'InputPassword':()=><Input.Password/>,
  }

  return items.map((item)=>{
      return(
      <Form.Item name={item.name} label={item.label} rules={[{ required: true }]} className={s.itemForm}>
        {itemType[item.type]()}
      </Form.Item>
      )
  })
}

const MyForm = (props)=>{

  const [form] = Form.useForm();

  const itemType = {
    'Input':()=><Input/>,
    'InputPassword':()=><Input.Password/>,
  }

  return(
   <>
    <div className={s.formTitle}>Sign In</div>
    <Form {...layout} form={form} name="control-hooks" onFinish={props.onFinish}>
    <Form.Item name='email' label='Email' rules={[{ required: true }]} className={s.itemForm}>
        <Input/>
      </Form.Item>
      { props.items.map((item)=>{
      return(
      <Form.Item name={item.name} label={item.label} rules={[{ required: true }]} className={s.itemForm}>
        {itemType[item.type]()}
      </Form.Item>
      )
  })}
        <Form.Item {...tailLayout} className={s.button_form}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
     </Form>
   </>  
  )
}

export default MyForm