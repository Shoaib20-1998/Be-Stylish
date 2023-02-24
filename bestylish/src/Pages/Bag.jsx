import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Cart from "./bagcomp/Cart"

function Bag() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [data, setdata] = useState([])
  const fetchdata = () => {
    axios.get(`https://63f4cf5555677ef68bc45931.mockapi.io/style/cart`)
      .then((res) => setdata(res.data))
  }

  console.log(data)
  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
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
            {data?.map((item) =>
            
            <Cart key={item.id} 
            title={item?.data?.title}
            image={item?.data?.image}
            size={item?.data?.Size}
            price={item?.data?.price}
            id={item.id} />
             
            )}

          </div>


          <DrawerBody>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Bag;