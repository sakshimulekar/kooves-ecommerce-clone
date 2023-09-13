import React, { useEffect, useState } from 'react';
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
  Text,
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
import { handleSearch } from '../../redux/productReducer/action';
//import ProductContainer from '../product/ProductContainer';


const NavBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {products} = useSelector(store=>store.productReducer)
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleLogout = () => {
    dispatch(logout)
    localStorage.clear();
    Cookies.remove('token');
    Cookies.remove('user')
    window.location.href = '/tablogin';
  };

  const handleInputChange = (e) =>{
    setSearchQuery(e.target.value)
  }

  useEffect(()=>{
    const timer = setTimeout(() => {
      dispatch(handleSearch(searchQuery)).then(()=>{
        
        navigate('/searchresult')
        //setSearchQuery("")
      })
    }, 2000);
    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery,dispatch])

  const handleSearchResuts = () => {
    setSearchResults(products)
    console.log(searchResults,'65')
  }
  
  console.log(products,'68')

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor={bgColor}
      color={textColor}
      boxShadow={'md'}
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
      <Text fontSize={18}>Men <ChevronDownIcon /></Text>
            
          </MenuButton>
          </NavLink>
          
          <MenuList borderTopColor={'#FF0080'} borderTopWidth={'thick'} my={5} pl={3} pr={3}>
            <NavLink><MenuItem textDecorationLine={"none"}>New in</MenuItem></NavLink>
            <MenuItem>View All</MenuItem>
            <MenuItem>tshirt</MenuItem>
            <MenuItem>kurta</MenuItem>
            <MenuItem>shirt</MenuItem>
            <MenuItem>short</MenuItem>
            <MenuItem>Footwear</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <NavLink to={'/maintainance'}>
            <MenuButton 
            as={Box} 
            cursor="pointer"
            px={2}
            transition='all 0.2s'           
            fontWeight={'bold'}
            _hover={{ borderBottomColor: '#FF0080' }}
            _expanded={{ color:'#FF0080' }}
            _focus={{ boxShadow: 'outline' }} 
            >
              <Text fontSize={18}>Women <ChevronDownIcon /></Text>
            </MenuButton>
          </NavLink>
        </Menu>

        <Menu>
          <NavLink to={'/maintainance'}>
          <MenuButton as={Box} 
            cursor="pointer"
            px={2}
            transition='all 0.2s'
            fontWeight={'bold'}
            _hover={{ borderBottomColor: '#FF0080' }}
            _expanded={{ color:'#FF0080' }}
            _focus={{ boxShadow: 'outline' }} >
            <Text fontSize={18}>Kids <ChevronDownIcon /></Text>
          </MenuButton>
          </NavLink>
        </Menu>

        <Menu>
          <NavLink to={'/maintainance'}>
          <MenuButton as={Box} 
            cursor="pointer"
            px={2}
            transition='all 0.2s'
            _hover={{ borderBottomColor: '#f51e89' }}
            _expanded={{ color:'rgb(255, 0, 128)' }}
            _focus={{ boxShadow: 'outline' }} fontWeight={'bold'}>
            <Text fontSize={18}>Collection <ChevronDownIcon /></Text>
          </MenuButton>
          </NavLink>
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
      {/* {searchResults.length > 0 ? (
  <Link to="/searchresult">
    <Input
      type="text"
      placeholder="Search for products..."
      value={searchQuery}
      onChange={handleInputChange}
    />
  </Link>
) : ( */}
      <Box>
        
        <Input
          type="text"
          icon={<FaSearch/>}
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleInputChange}

        />
      </Box>
        <Box>
        <IconButton
          aria-label="Login"
          icon={<FaUser />}
          variant="ghost"
          colorScheme="gray"
          placeholder='profile'
          onClick={()=>navigate('/tablogin')}
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
