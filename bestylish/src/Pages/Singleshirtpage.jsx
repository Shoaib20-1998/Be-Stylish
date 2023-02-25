
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bread from './Shirtcomp/Breadcrumb'
import Simple from './singleproductcomp/Productdetails'

function Singleshirtpage() {
const[data,setdata]=useState({})
  const userid=useParams()
  const id=userid.id

  const getdata=()=>{
    axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/shirts/${id}`)
    .then((res)=>setdata(res.data))
  }
  
useEffect(()=>{
  getdata()
},[])
  return (
    <div style={{marginTop:"50px"}}>
      <div style={{margin:"130px 0 0 50px"}}>
      <Bread />
      </div>
      <Simple {...data}/>
      
       
    </div>
  )
}

// 
// color={data?.Color}
// size={data?.Size}
// brand={data?.brand}
// discount={data?.discount}
// discription={data?.discription}
// 
// price={data?.price}


export default Singleshirtpage