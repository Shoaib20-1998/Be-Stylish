import React, { useEffect } from 'react'
import styles from './Shirtcss/shirt.module.css'
import { Heading, Input, Skeleton, Stack, Text } from '@chakra-ui/react'
import Bread from './Shirtcomp/Breadcrumb'
import Menufunction from './Shirtcomp/Menufunction'
import axios from 'axios'
import { useState } from 'react'
import Data from './Shirtcomp/Data'
function Shirts() {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const[search,setsearch]=useState('')
  const fetchdata = async (search) => {
    try {
      let newsearch=search?search:{}
      setloading(true)
      await axios(`https://63f4cf5555677ef68bc45931.mockapi.io/style/shirts`,{
        params:{
          search:newsearch
        }
      })
        .then((res) => setdata(res.data))
      setloading(false)

    } catch (error) {
      setloading(false)
    }

  }

 
  useEffect(() => {
    fetchdata(search)
  },[search])
 
  const handlefilter =(data)=>{
    setdata(data)
    
  }

  console.log()

  return (
    <div className={styles.maindiv}>
      <div className={styles.titlemain}>
        <div className={styles.title}>
          <Bread />
          <Heading mt={5}>Formal Shirts</Heading>
        </div>
      </div>
      <div className={styles.functionmain}>
        <div className={styles.function} >
          <Menufunction api={data} handlefilter={(data)=>handlefilter(data)} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          {/* <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} />
          <Menufunction value={} heading={"Price"} data1={"High to Low"} data2={"Low to high"} data3={"50-50"} /> */}
        </div>
      </div>

      <div className={styles.data}>

        <div style={{ width: "80%", margin: "auto" }}>
          <div className={styles.detail}>
            <div>
              <Text>729 Products</Text>
            </div>
            <div>
              <Input
                width={300}
                mb={2}
                isInvalid
                errorBorderColor='crimson'
                placeholder='Search any product from here'
                onChange={(e)=>setsearch(e.target.value)}
              />
            </div>

          </div>
        </div>

        {loading ? <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack> :
          <div className={styles.datamap}>
            {data?.map((item) =>
                <Data key={item.id}
                  title={item.title}
                  image={item.image[0]}
                  price={item.price}
                  discount={item.discount}
                />

              )
            }


          </div>

        }

      </div>

    </div>
  )
}

export default Shirts;