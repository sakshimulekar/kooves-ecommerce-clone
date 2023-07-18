import React from 'react'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';

const HomePage = () => {
  return (
    <>
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='/login'>login</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
      
    </>
  )
}

export default HomePage;
