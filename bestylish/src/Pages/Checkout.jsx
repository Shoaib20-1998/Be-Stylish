import React, { useEffect, useState } from 'react'
import { Button, Text } from '@chakra-ui/react'
import styles from './checkoutCss/checkout.module.css'
import axios from 'axios'
import Bread from './Shirtcomp/Breadcrumb'
function Checkout() {
    const [data, setdata] = useState([])
    const fetchdataa = () => {
        axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`)
            .then((res) => setdata(res.data))
    }



    useEffect(() => {
        fetchdataa()
    }, [])

    console.log(data)

    return (
        <div className={styles.Checkout}>

           <div className={styles.Bread}>
             <Bread />
           </div>
            <div className={styles.Checkoutheading}>
            
                <Text as='mark'>Your Shopping Cart</Text>
                <hr style={{
                    margin: "15px", border: "3px solid black",
                    borderRadius: "5px"
                }} />
            </div>

            <div className={styles.Checkoutmain}>
                <div className={styles.data}>

                    {data?.map((item) =>
                        <>
                        <div className={styles.map}>
                            <div className={styles.image}>
                                <img width="100%" height="100%"  src={item.image} alt="shirt" />
                            </div>
                            <div className={styles.singledata} >
                                <b> <h2>₹ {item.price}/- <span>{"      "}</span> {item.discount}%OFF✔ </h2></b>
                                <p>{item.title}</p>
                                <p>Size - {item.size}</p>
                                <p>Brand - {item.brand}</p>
                                <div>
                                    <Button colorScheme='red'>Remove</Button>
                                    <Button colorScheme='red'>+</Button>
                                    <Button  colorScheme='red'>1</Button>
                                    <Button colorScheme='red'>-</Button>
                                </div>
                            </div>
                        </div>
                        </>
                    )}

                </div>
                <div className={styles.checkoutcart}></div>
            </div>
        </div>
    )
}

export default Checkout