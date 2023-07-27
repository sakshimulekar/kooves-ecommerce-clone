import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerCloseButton, Tooltip,RadioGroup,Divider,
    IconButton,FormLabel,Stack,Checkbox,DrawerOverlay, Flex, useDisclosure,DrawerContent,DrawerHeader,DrawerBody, Box, Input, Radio } from '@chakra-ui/react'
const SortSelect = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonStyle = {
        border: 'none',
        background: 'none',
        boxShadow: 'none',
        cursor: 'pointer', // Optionally set cursor to pointer to indicate it's clickable
    };
  return (
    <div>
      <Button style={buttonStyle} onClick={onOpen} >Feature {<ChevronDownIcon/>}</Button>
        <Drawer
           
            isOpen={isOpen}
            onClose={onClose}
            placement='left'
        >
            <DrawerOverlay/>
            <DrawerContent >
                <DrawerCloseButton mt={20}/>
                <DrawerHeader   mt={20}>
                    Feature
                </DrawerHeader>
                <DrawerBody>
                <RadioGroup defaultValue='' pb={5}>
                    <FormLabel>Price</FormLabel>
                    <Stack spacing={3} >
                        <Radio value='1'>
                            High to Low 
                        </Radio>
                        <Radio value='2'>
                            Low to High
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Divider/>
                <RadioGroup defaultValue='' pb={5} pt={5}>
                    <FormLabel>Rating</FormLabel>
                    <Stack spacing={3} >
                        <Radio value='1'>
                            High to Low 
                        </Radio>
                        <Radio value='2'>
                            Low to High
                        </Radio>
                    </Stack>
                </RadioGroup>
                    <Divider/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default SortSelect
