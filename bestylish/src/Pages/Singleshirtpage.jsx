
import { Skeleton, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Bread from './Shirtcomp/Breadcrumb'
import YouTube from './Shirtcomp/Skeleton'
import Simple from './singleproductcomp/Productdetails'

function Singleshirtpage() {
  const [data, setdata] = useState({})
  const [loading, setloading] = useState(false)
  const userid = useParams()
  const id = userid.id

  const getdata = () => {
    setloading(true)
    axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/shirts/${id}`)
      .then((res) => {
        setdata(res.data)
        setloading(false)
      }).catch((error) => {
        setloading(true)
        swal("Something went wrong")

      })
  }


  useEffect(() => {
    getdata()
  }, [])


  return (
    <div style={{ marginTop: "50px" }}>
      <div style={{ margin: "130px 0 0 50px" }}>

        <Bread />
      </div>
      {loading ? <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack> : <Simple {...data} />}



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