import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Stack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,Image
} from '@chakra-ui/react';
import { Link,NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaStar, FaShoppingBag } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ThemeToggle from '../themeToggle';
import logo from "../../Assest/kooves1_clone_Logo.png.png";
const NavBar = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor={bgColor}
      color={textColor}
      boxShadow={'lg'}
      position={'fixed'}
      top={0}
      left={0}
      right={0}
      zIndex={9999}
      
    >
      {/* Left side */}
      <Stack direction="row" spacing={4}>
        
        <Menu>
          <NavLink to={'/product'}>
          <MenuButton as={Box} cursor="pointer" _hover={{ textDecoration: 'none',color:'teal' }}>
            Men <ChevronDownIcon />
          </MenuButton>
          </NavLink>
          
          <MenuList>
            <NavLink><MenuItem textDecorationLine={"none"}>New in</MenuItem></NavLink>
            <MenuItem>View All</MenuItem>
            <MenuItem>T-Shirts</MenuItem>
            <MenuItem>Traditional Wear</MenuItem>
            <MenuItem>Formal Wear</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Footwear</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <NavLink to={'/product'}>
            <MenuButton as={Box} cursor="pointer" _hover={{ textDecoration: 'none',color:'teal' }}>
              Women <ChevronDownIcon />
            </MenuButton>
          </NavLink>
          
          <MenuList>
            <MenuItem>New In</MenuItem>
            <MenuItem>View All</MenuItem>
            <MenuItem>T-Shirts</MenuItem>
            <MenuItem>Jackets &amp; Coats</MenuItem>
            <MenuItem>Hoodies and Sweatshirts</MenuItem>
            <MenuItem>Sweatpants</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Co-ord Sets</MenuItem>
            <MenuItem>Gift Card</MenuItem>
            <MenuItem>Create List</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Box} cursor="pointer" _hover={{ textDecoration: 'none',color:'teal' }}>
            Kids <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>New In</MenuItem>
            <MenuItem>View All</MenuItem>
            <MenuItem>T-Shirts</MenuItem>
            <MenuItem>Jackets &amp; Coats</MenuItem>
            <MenuItem>Hoodies and Sweatshirts</MenuItem>
            <MenuItem>Sweatpants</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Co-ord Sets</MenuItem>
            <MenuItem>Gift Card</MenuItem>
            <MenuItem>Create List</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Box} cursor="pointer" _hover={{ textDecoration: 'none',color:'teal' }}>
            Collection <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>New In</MenuItem>
            <MenuItem>View All</MenuItem>
            <MenuItem>T-Shirts</MenuItem>
            <MenuItem>Jackets &amp; Coats</MenuItem>
            <MenuItem>Hoodies and Sweatshirts</MenuItem>
            <MenuItem>Sweatpants</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Co-ord Sets</MenuItem>
            <MenuItem>Gift Card</MenuItem>
            <MenuItem>Create List</MenuItem>
          </MenuList>
        </Menu>
      </Stack>

      {/* Middle */}
      <NavLink to={'/'}>
        <Box>
          <Image src={logo} maxH="40px" h="full"/>
        </Box>
      </NavLink>
      

      {/* Right side */}
      <Stack direction="row" spacing={4} align="center">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <IconButton
          aria-label="Login"
          icon={<FaUser />}
          variant="ghost"
          colorScheme="gray"
        />
        <IconButton
          aria-label="Wishlist"
          icon={<FaStar />}
          variant="ghost"
          colorScheme="gray"
        />
        <IconButton
          aria-label="Cart"
          icon={<FaShoppingBag />}
          variant="ghost"
          colorScheme="gray"
        />
        <ThemeToggle/>
      </Stack>
    </Flex>
  );
};

export default NavBar;