import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/actions/product";
import { Table, Rate, Space, Button } from 'antd';
import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import s from './style.module.css'
import { Navigate, useNavigate } from "react-router";


const Products = (props)=>{

  const products = useSelector(state=>state.productReducer.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  const onClickCreate = ()=>{
    navigate('/products/create')
  }

  const onClickName = (name)=>{
    const item = products.filter(item=>item.name===name)
    navigate('/product',{state:item[0]},)
  }
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a onClick={()=>{onClickName(text)}}>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Manufacturer',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Calories',
      key: 'calories',
      dataIndex: 'calories',
    },
    {
      title: 'Amount',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: rate => (
       <Rate disabled defaultValue={rate}/>
      ),
    },
  ];



  return(
    <div>
      <div className={s.add_new_prod} onClick={onClickCreate}><Button><PlusOutlined /></Button></div>
      <Table columns={columns} dataSource={products} />
    </div>
    )
}

export default Products