import { Button } from '@chakra-ui/react'
import React from 'react'
import styles from '../Shirtcss/shirt.module.css'
function Data({image,price,title,discount}) {
  return (
    <div className={styles.singledata}>
        <img src={image} alt="shirt" />
        <h3>₹ {price} - {discount}% </h3>
        <p>{title}</p>
        
        <Button colorScheme='red'>Add To Cart</Button>
        <Button colorScheme='red'>Buy Now</Button>

    </div>
  )
}

export default Data