import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Checkbox, Menu, MenuButton, MenuItem, MenuList, OrderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Menufunction({handlechange,heading,data1,data2,changeorder}) {
   
    

    return (
        <Menu >
            <MenuButton m={5} w={"150px"} hover={"white"} fontWeight='medium' bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
               {heading}
            </MenuButton>
            <MenuList p={8}>
                <Button onClick={()=>changeorder("asc") } mb={5}>{data1}</Button> <br />
                <Button onClick={()=>changeorder("desc")} >{data2}</Button>
            </MenuList>
        </Menu>

    )
}

export default Menufunction