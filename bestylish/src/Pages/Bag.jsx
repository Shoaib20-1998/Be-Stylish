import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cart from "./bagcomp/Cart"



function Bag() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [data, setdata] = useState([])
  const fetchdataa = () => {
     axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`)
    .then((res) => setdata(res.data))
  }

  

  const handleclick=()=>{
    fetchdataa()
    onOpen()
  }
  

  return (
    <>
      <Button ref={btnRef} onClick={handleclick}>
        <ShoppingCartOutlined style={{ fontSize: '40px' }} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Checkout Your items </DrawerHeader>
          <div>
            {data&&data.map((item) =>
            
            <Cart key={item.id} 
            title={item?.title}
            image={item?.image}
            size={item?.size}
            price={item?.price}
            id={item.id}
            fetchdataa={fetchdataa} />
            
             
            )}

          </div>


          <DrawerBody>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          <Link to="/checkout"><Button colorScheme='red'>Checkout</Button></Link>  
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Bag;