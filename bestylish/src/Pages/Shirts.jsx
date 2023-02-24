import React, { useEffect } from 'react'
import styles from './Shirtcss/shirt.module.css'
import { Button, Checkbox, Heading, Input, Menu, MenuButton, MenuList, Select, Skeleton, Stack, Text } from '@chakra-ui/react'
import Bread from './Shirtcomp/Breadcrumb'
import Menufunction from './Shirtcomp/Menufunction'
import axios from 'axios'
import { useState } from 'react'
import Data from './Shirtcomp/Data'
import { ChevronDownIcon } from '@chakra-ui/icons'
function Shirts() {
  const [data, setdata] = useState([])
  const [order, setorder] = useState("")
  const [order1, setorder1] = useState("")

  const [loading, setloading] = useState(false)
  const [search, setsearch] = useState('')
  const fetchdata = async (search) => {
    try {
      let newsearch = search ? search : {}
      setloading(true)
      await axios(`https://63f4cf5555677ef68bc45931.mockapi.io/style/shirts`, {
        params: {
          search: newsearch

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

  }, [search])



  useEffect(() => {
    if (order == "asc") {
      let newdata = data.sort(function (a, b) { return a.price - b.price })
      setdata([...newdata])
    } else if (order == "desc") {
      let newdata1 = data.sort(function (a, b) { return b.price - a.price })
      setdata([...newdata1])
    }
    else if (order == "ascc") {
      let newdata = data.sort(function (a, b) { return a.discount - b.discount })
      setdata([...newdata])
    } else if (order == "descc") {
      let newdata1 = data.sort(function (a, b) { return b.discount - a.discount })
      setdata([...newdata1])
    }
  }, [order])





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
          <Menufunction heading={"Price"} data1="Price Low To High" data2="Price High To low" changeorder={(a) => setorder(a)} />
          {/* <Menufunction  heading={"Discount"} data1="Discount % Low To High" data2="Discount % High To low" changeorder={(a)=>setorder(a)} />        */}
          <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
              Discount
            </MenuButton>
            <MenuList p={8}>
              <Button onClick={() => setorder("ascc")} mb={5}>Discount % Low To High</Button> <br />
              <Button onClick={() => setorder("descc")} >Discount % High To low</Button>
            </MenuList>
          </Menu>


          <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
              Color
            </MenuButton>
            <MenuList p={8}>
              <Button m={2} onClick={() => setsearch("")}>All</Button>
              <Button m={2} onClick={() => setsearch("black")}>Black</Button>
              <Button m={2} onClick={() => setsearch("Mahroon")}>Mahroon</Button>
              <Button m={2} onClick={() => setsearch("yellow")}>Yellow</Button><br />
              <Button m={2} onClick={() => setsearch("White")}>White</Button>
              <Button m={2} onClick={() => setsearch("Green")}>Green</Button>
              <Button m={2} onClick={() => setsearch("Pink")}>Pink</Button>
              <Button m={2} onClick={() => setsearch("purple")}>Purple</Button> <br />
              <Button m={2} onClick={() => setsearch("Burgandy")}>Burgandy</Button>
              <Button m={2} onClick={() => setsearch("Peach")}>Peach</Button>
            </MenuList>
          </Menu>

          <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
              Size
            </MenuButton>
            <MenuList p={8}>
             <Button m={2} onClick={() => setsearch("")}>All</Button>
              <Button m={2} onClick={() => setsearch("M")}>M</Button>
              <Button m={2} onClick={() => setsearch("L")}>L</Button><br />
              <Button m={2} onClick={() => setsearch("XL")}>XL</Button>
              <Button m={2} onClick={() => setsearch("XXL")}>XXL</Button>
            </MenuList>
          </Menu>

          <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
              Brand
            </MenuButton>
            <MenuList p={8}>
              <Button m={2} onClick={() => setsearch("")}>All</Button>
              <Button m={2} onClick={() => setsearch("code")}>CODE</Button>
              <Button m={2} onClick={() => setsearch("LOUIS PHILIPPE")}>LOUIS PHILIPPE</Button>
              <Button m={2} onClick={() => setsearch("PARK AVENUE")}>PARK AVENUE</Button><br />
              <Button m={2} onClick={() => setsearch("VAN HEUSEN")}>VAN HEUSEN</Button>
              <Button m={2} onClick={() => setsearch("ode men")}>ODE MEN</Button>


            </MenuList>
          </Menu>

          <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
              Designs
            </MenuButton>
            <MenuList p={8}>
              <Button m={2} onClick={() => setsearch("")}>All</Button>
              <Button m={2} onClick={() => setsearch("code")}>CODE</Button>
              <Button m={2} onClick={() => setsearch("LOUIS PHILIPPE")}>LOUIS PHILIPPE</Button>
              <Button m={2} onClick={() => setsearch("PARK AVENUE")}>PARK AVENUE</Button><br />
              <Button m={2} onClick={() => setsearch("VAN HEUSEN")}>VAN HEUSEN</Button>
              <Button m={2} onClick={() => setsearch("ode men")}>ODE MEN</Button>


            </MenuList>
          </Menu>

          <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
              Sleeve Length
            </MenuButton>
            <MenuList p={8}>
              <Button m={2} onClick={() => setsearch("")}>All</Button>
              <Button m={2} onClick={() => setsearch("code")}>CODE</Button>
              <Button m={2} onClick={() => setsearch("LOUIS PHILIPPE")}>LOUIS PHILIPPE</Button>
              <Button m={2} onClick={() => setsearch("PARK AVENUE")}>PARK AVENUE</Button><br />
              <Button m={2} onClick={() => setsearch("VAN HEUSEN")}>VAN HEUSEN</Button>
              <Button m={2} onClick={() => setsearch("ode men")}>ODE MEN</Button>


            </MenuList>
          </Menu>




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
                onChange={(e) => setsearch(e.target.value)}
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
                size={item.Size}
                brand={item.brand}
                id={item.id}
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