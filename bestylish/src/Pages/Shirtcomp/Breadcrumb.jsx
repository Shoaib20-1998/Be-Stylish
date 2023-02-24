import { ChevronRightIcon } from '@chakra-ui/icons'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

function Bread() {
    return (
        <>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem>
          <BreadcrumbLink href='/shirts'>Men</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Top Wear</BreadcrumbLink>
        </BreadcrumbItem>
      
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Formal Shirts</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      </>
    )
}

export default Bread