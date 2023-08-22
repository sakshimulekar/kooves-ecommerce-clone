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
  useColorModeValue,Image, Heading
} from '@chakra-ui/react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaStar, FaShoppingBag } from 'react-icons/fa';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ThemeToggle from '../themeToggle';
import logoName from "../../Assest/StyleHub2.png"
import logo from "../../Assest/StyleHub1.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer/action';
import Cookies from 'js-cookie'


const NavBar = () => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');
  const dispatch=useDispatch()

  const handleLogout = () => {
    dispatch(logout)
    localStorage.clear();
    Cookies.remove('token');
    Cookies.remove('user')
    window.location.href = '/login';
  };
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
      zIndex={1}
      
    >
      {/* Left side */}
      <Stack direction="row" spacing={4}>
        
        <Menu>
          <NavLink to={'/product'}>
          <MenuButton as={Box} 
            cursor="pointer"
            px={2}
            
    //py={1}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    fontWeight={'bold'}
    _hover={{ borderBottomColor: 'gray.400',color:'#FF0080' }}
    _expanded={{ color:'#ff0080ea' }}
    _focus={{ boxShadow: 'outline' }} >
            Men <ChevronDownIcon />
          </MenuButton>
          </NavLink>
          
          <MenuList borderTopColor={'#FF0080'} borderTopWidth={'thick'} my={4}>
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
            <MenuButton 
            as={Box} 
            cursor="pointer"
            px={2}
            
    //py={1}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    fontWeight={'bold'}
    _hover={{ borderBottomColor: '#FF0080' }}
    _expanded={{ color:'#FF0080' }}
    _focus={{ boxShadow: 'outline' }} 
            >
              Women <ChevronDownIcon />
            </MenuButton>
          </NavLink>
          
          <MenuList borderTopColor={'#FF0080'} borderTopWidth={'thick'} my={4}>
            <MenuItem>New In</MenuItem>
            <MenuItem>View All</MenuItem>
            <MenuItem>T-Shirts</MenuItem>#FF0080
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
          <MenuButton as={Box} 
            cursor="pointer"
            px={2}
            
    //py={1}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    fontWeight={'bold'}
    _hover={{ borderBottomColor: '#FF0080' }}
    _expanded={{ color:'#FF0080' }}
    _focus={{ boxShadow: 'outline' }} >
            Kids <ChevronDownIcon />
          </MenuButton>
          <MenuList borderTopColor={'#FF0080'} borderTopWidth={'thick'} my={4}>
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
          <MenuButton as={Box} 
            cursor="pointer"
            px={2}
            
    //py={1}
    transition='all 0.2s'
    // borderRadius='md'
    // borderWidth='1px'
    
    _hover={{ borderBottomColor: '#f51e89' }}
    _expanded={{ color:'rgb(255, 0, 128)' }}
    _focus={{ boxShadow: 'outline' }} fontWeight={'bold'}>
            Collection <ChevronDownIcon />
          </MenuButton>
          <MenuList borderTopColor={'#FF0080'} my={4} borderTopWidth={'thick'}>
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
        <Box  h={'full'}  padding={'0px,10px'}>
          <Image src={logoName} w={79}/>
          <Image src={logo} w={79} />
        </Box>
      </NavLink>
      

      {/* Right side */}
      <Stack direction="row" spacing={4} align="center">
        <InputGroup >
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Box>
        <IconButton
          aria-label="Login"
          icon={<FaUser />}
          variant="ghost"
          colorScheme="gray"
          placeholder='profile'
          onClick={()=>navigate('/login')}
        />
        <Heading fontSize={10} pl={1}>Profile</Heading>
        </Box>

        <Box>
        <IconButton
          aria-label="Wishlist"
          icon={<FaStar />}
          variant="ghost"
          colorScheme="gray"
          onClick={()=>navigate('/wishlist')}
        />
        <Heading fontSize={10} ml={1}>Wishlist</Heading>
        </Box>

        <Box>
        <Link to={'/cart'}>
        <IconButton
          aria-label="Cart"
          icon={<FaShoppingBag />}
          variant="ghost"
          colorScheme="gray"
        />
        <Heading fontSize={10} ml={3}>Bag</Heading>
        </Link>
        </Box>
        <ThemeToggle/>
        <button onClick={handleLogout}>Logout</button>
      </Stack>
    </Flex>
  );
};

export default NavBar;
