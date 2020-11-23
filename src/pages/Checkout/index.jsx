import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const Index=props=>{
    const Cart=JSON.parse(localStorage.getItem('myCart'));
    const Address=JSON.parse(localStorage.getItem('address'))
    const userId=props.userId
    const completeOrder=()=>{
        axios({
            method:'POST',
            url:'https://personalecommerce.herokuapp.com'+'/order/createOrder',
            data:{
                cart:Cart,
                address:Address,
                creator:userId
            }
        })
        .then(res=>{
            swal({
                title: "Order created!",
                text: "Your Order is complete",
                icon: "success",
                buttons:{
                  text:'OK'
                }
              })
              console.log(res)
              
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        completeOrder()
    },[completeOrder])
    return <Redirect to="/" />
}
export default Index