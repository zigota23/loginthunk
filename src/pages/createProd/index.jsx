import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import s from './style.module.css'
import { Form, Input, Button, Rate, InputNumber } from 'antd';
import { createProd, updateProd } from "../../store/actions/product";



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



const CreateProd = (props)=>{

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const locatione = useLocation()
  const [form] = Form.useForm()

  const {state} =  locatione


  const onFinish = (values) => {
    if(state)dispatch(updateProd(navigate,values,state._id))
    else dispatch(createProd(navigate,values))
   };
 

  return(
    <div  className={s.form_antd}>
      <div className={s.formTitle}>Create new product</div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} initialValues={state}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]} className={s.itemForm}>
          <Input/>
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]} className={s.itemForm}>
          <Input/>
        </Form.Item>
        <Form.Item name="manufacturer" label="Manufacturer" rules={[{ required: true }]} className={s.itemForm}>
          <Input/>
        </Form.Item>
        <Form.Item name="calories" label="Calories" rules={[{ required: true },{ type: 'number' }]} className={s.itemForm}>
        <InputNumber min={1} max={999} defaultValue={state && state.calories}/>
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]} className={s.itemForm}>
          <Input/>
        </Form.Item>
        <Form.Item name="amount" label="Amount" rules={[{ required: true },{ type: 'number' }]} className={s.itemForm}>
          <InputNumber min={1} max={999} defaultValue={state && state.amount}/>
        </Form.Item>
        <Form.Item name="rating" label="Rating" rules={[{ required: true }]} className={s.itemForm}>
          <Rate />
        </Form.Item>
        <Form.Item {...tailLayout} className={s.button_form}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
     </Form>
    </div>
  )
}

export default CreateProd