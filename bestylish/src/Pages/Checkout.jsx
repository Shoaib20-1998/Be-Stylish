import React, { useEffect, useState } from 'react'
import { Button, Heading, Input, Skeleton, Stack, Text } from '@chakra-ui/react'
import styles from './checkoutCss/checkout.module.css'
import axios from 'axios'
import Bread from './Shirtcomp/Breadcrumb'
import Payment from './Checkoutcomp/Payment'
function Checkout() {
    const [data, setdata] = useState([])
    const [count, setcount] = useState(1)
    const [total, settotal] = useState(0)
    const [totaldis, settotaldis] = useState(0)
    const [loading, setloading] = useState(false)
    const fetchdataa = () => {
        setloading(true)
        axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`)
            .then((res) => {
                setdata(res.data)
                setloading(false)
            }).catch((error)=>{
                setloading(true)
            })
    }

    const handledelete = (id) => {
        axios.delete(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart/${id}`)
            .then(() => fetchdataa())
    }


    const handleclick = (val, id) => {

        let newdata = data.map((item) => {
            if (item.id == id) {

            }
        })

    }

    useEffect(() => {
        const totalprice = data.reduce((acc, item) => {
            return acc += item.price
        }, 0)
        const discount = data.reduce((acc, item) => {
            return acc += item.discount * item.price / 100
        }, 0)

        settotal(totalprice)
        settotaldis(discount)
    },)

    console.log(totaldis)

    useEffect(() => {
        fetchdataa()

    }, [])

    if (loading) {
        return <>

            <Stack mt={200}>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>


        </>
    }

    return (
        <div className={styles.Checkout}>

            <div className={styles.Bread}>
                <Bread />
            </div>
            <div className={styles.Checkoutheading}>


                <hr style={{
                    margin: "15px", border: "3px solid black",
                    borderRadius: "5px"
                }} />
            </div>

            <div className={styles.Checkoutmain}>
                <div className={styles.data}>
                    {data.length == false ?
                        <>
                        <div className={styles.empty}>
                            <img width="90%"  src="https://media3.giphy.com/media/8cdbH0l0s4gShDhLzl/giphy.gif?cid=ecf05e47v9gjjznd3k0lik0rv7abu5x0hnayfr69gz816sr4&rid=giphy.gif&ct=s" alt="" />
                            <img width="90%"  src="https://media3.giphy.com/media/8cdbH0l0s4gShDhLzl/giphy.gif?cid=ecf05e47v9gjjznd3k0lik0rv7abu5x0hnayfr69gz816sr4&rid=giphy.gif&ct=s" alt="" />
                            <img width="90%"  src="https://media3.giphy.com/media/8cdbH0l0s4gShDhLzl/giphy.gif?cid=ecf05e47v9gjjznd3k0lik0rv7abu5x0hnayfr69gz816sr4&rid=giphy.gif&ct=s" alt="" />
                            <img width="90%"  src="https://media3.giphy.com/media/8cdbH0l0s4gShDhLzl/giphy.gif?cid=ecf05e47v9gjjznd3k0lik0rv7abu5x0hnayfr69gz816sr4&rid=giphy.gif&ct=s" alt="" />
                          

                        </div>
                        </> :
                        <>
                            {data?.map((item) =>

                                <div key={item.id} className={styles.map}>
                                    <div className={styles.image}>
                                        <img width="100%" height="100%" src={item.image} alt="shirt" />
                                    </div>
                                    <div className={styles.singledata} >
                                        <b> <h2>₹ {item.price * count}/- <span>{"      "}</span> {item.discount}%OFF✔ </h2></b>
                                        <p>{item.title}</p>
                                        <p>Size - {item.size}</p>
                                        <p>Brand - {item.brand}</p>
                                        <div>
                                            <Button onClick={() => handledelete(item.id)} colorScheme='red'>Remove</Button>
                                            <Button onClick={() => handleclick(1, item.id)} colorScheme='red'>Add To wishlist</Button>
                                        </div>
                                    </div>
                                </div>

                            )}
                        </>

                    }


                </div>

                <div className={styles.checkoutcart}>
                    <div className={styles.div1}>
                        <div><img src="https://www.lifestylestores.com/static/icons/gift-box.png" alt="" /></div>
                        <div>
                            <Heading>Offers For You !</Heading>
                            <Text>Choose and apply voucher in 2 simple steps</Text>
                        </div>

                    </div>
                    <div className={styles.Allprices}>
                        <div className={styles.total}>
                            <div> <Text fontSize="xl">Offer Discount -</Text></div>
                            <div> <Text textDecoration="line-through" fontSize="xl">{Math.floor(totaldis)}</Text></div>
                        </div>
                        <div className={styles.total}>
                            <div> <Text fontSize="xl" >Shipping Charges -</Text></div>
                            <div> <Text fontSize="xl" >Free</Text></div>
                        </div>



                        <div className={styles.total}>
                            <div> <Heading  >Total -</Heading></div>
                            <div> <Heading  >₹ {total - Math.floor(totaldis)}/- Only</Heading></div>
                        </div>
                        <Payment />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Checkout