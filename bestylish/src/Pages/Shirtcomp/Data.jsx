import { Button } from '@chakra-ui/react'
import React, { useEffect,useState } from 'react'
import Bag from '../Bag'
import styles from '../Shirtcss/shirt.module.css'
import axios from 'axios'
import CompExample from '../bagcomp/Alert.jsx'
function Data({ brand, image, price, title, discount, size,id }) {
const[data,setdata]=useState({})

const getdata=()=>{
 axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`)
 .then((res)=>{console.log(res.data)})
}

  const fetchdata=()=>{
    console.log(id)
    axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/shirts/${id}`)
    .then((res)=>{

      axios.post(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`,{
         data:res.data
      }).then(()=>{
        getdata()     
      })
      
  }).then(()=>{})
    
  }

  // useEffect(()=>{
  //   getdata()
  // },[])



  
  
  
  return (
    <div className={styles.singledata}>
      <img src={image} alt="shirt" />
      <b> <h2>₹ {price}/- <span>{"      "}</span> {discount}%OFF✔ </h2></b>
      <p>{title}</p>
      <p>Size - {size}</p>
      <p>Brand - {brand}</p>


      <div className={styles.buttons}>
        <Button onClick={fetchdata} colorScheme='red'>Add To Cart</Button>
        <Button colorScheme='red'>Buy Now</Button>
        
      </div>
      
      

    </div>
  )
}


export default Data