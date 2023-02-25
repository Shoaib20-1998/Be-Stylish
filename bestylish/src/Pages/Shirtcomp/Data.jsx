import { Button } from '@chakra-ui/react'
import React, { useEffect,useState } from 'react'
import styles from '../Shirtcss/shirt.module.css'
import axios from 'axios'
import CompExample from '../bagcomp/Alert.jsx'
import { Link } from 'react-router-dom'
function Data({ brand, image, price, title, discount, size,id }) {
const[data,setdata]=useState({})

// const getdata=()=>{
//  axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`)
//  .then((res)=>{console.log(res.data)})
// }

  const fetchdata=()=>{
   
      axios.post(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`,{ brand, image, price, title, discount, size})
      .then(()=>{
       alert("item addedd successfully")
      })
  }

  // useEffect(()=>{
  //   getdata()
  // },[])


  // <CompExample />
  
  
  
  return (
    <div className={styles.singledata}>
    <Link to={`/shirts/${id}`}> <img className={styles.zoom} src={image} alt="shirt" />
      <b> <h2>₹ {price}/- <span>{"      "}</span> {discount}%OFF✔ </h2></b>
      <p>{title}</p>
      <p>Size - {size}</p>
      <p>Brand - {brand}</p> </Link>


      <div className={styles.buttons}>
        <Button onClick={fetchdata} colorScheme='red'>Add To Cart</Button>
        <Button colorScheme='red'>Buy Now</Button>
        
      </div>
      
      

    </div>
  )
}


export default Data