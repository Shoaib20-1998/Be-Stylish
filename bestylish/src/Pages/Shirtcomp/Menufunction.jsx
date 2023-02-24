import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Menufunction({api,handlefilter,heading,data1="",data2="",data3="",data4="",data5=""}) {
    const[low,setlow]=useState(false)
    const[high,sethigh]=useState(false)

    
        if(low==true){         
            api.sort(function(a,b){return a.price-b.price})
            handlefilter(api)
        }else if(high==true){
            api.sort(function(a,b){return b.price-a.price})
            handlefilter(api)
        }
   

    return (

        <Menu>
            <MenuButton w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
               {heading}
            </MenuButton>
            <MenuList p={8}>
                <Checkbox  onChange={(e)=>sethigh(e.target.checked )}>{data1?data1:"N/A"}</Checkbox><br />
                <Checkbox   onChange={(e)=>setlow(e.target.checked)}  >{data2?data2:"N/A"}</Checkbox><br />
                <Checkbox  >{data3?data3:"N/A"}</Checkbox><br />
                <Checkbox  >{data4?data4:"N/A"}</Checkbox><br />
                <Checkbox  >{data5?data5:"N/A"}</Checkbox>
            </MenuList>
        </Menu>

    )
}

export default Menufunction