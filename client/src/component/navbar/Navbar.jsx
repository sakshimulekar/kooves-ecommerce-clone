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
  Text,Button,
  useColorModeValue,Image,Heading,useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody, DrawerFooter, Collapse
} from '@chakra-ui/react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaStar,FaSignOutAlt, FaShoppingBag, FaBars } from 'react-icons/fa';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import ThemeToggle from '../themeToggle';
import logoName from "../../Assest/StyleHub2.png"
import logo from "../../Assest/StyleHub1.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer/action';
import Cookies from 'js-cookie'
import { handleMenu, handleSearch, menProducts } from '../../redux/productReducer/action';
import { FcLike } from "react-icons/fc";
import {FaPowerOff} from 'react-icons/fa'
//import ProductContainer from '../product/ProductContainer';


const NavBar = () => {
  const user =  Cookies.get('user') || JSON.parse(localStorage.getItem('user'))|| ""
  const picture = JSON.parse(localStorage.getItem('picture'))||""
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //const {firstName,picture} = useSelector(store=>store.authReducer.user)
  const {products,searchComplete} = useSelector(store=>store.productReducer)
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  console.log(searchComplete,'searchComplete 54')

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      setIsTablet(windowWidth >= 768 && windowWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleMenuButton = (val) =>{
       console.log(val,'66')
      
       dispatch(handleMenu()).then(()=>{
        navigate(`/selected/${val}`)
      })
  }
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

  useEffect(() => {
  const timer = setTimeout(() => {
    if (searchQuery) {
      dispatch(handleSearch(searchQuery));
    }
  }, 2000);

  return () => {
    clearTimeout(timer);
  };
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (searchQuery && searchComplete) {
    navigate('/searchresult');
    setSearchQuery("");
    }
  }, [searchQuery, searchComplete, navigate]);
  console.log(user,picture,'100')
 
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
      {(isMobile || isTablet) && (
        <IconButton
          aria-label='Open Menu'
          icon={<FaBars/>}
          onClick={onOpen}
          variant={'ghost'}
          colorScheme='gray'/>
      )}
      {/* Left side */}
      {(!isMobile && !isTablet) && (
        <Stack direction="row" spacing={4}>
        
        <Menu>
          <NavLink to={'/product'}>
          <MenuButton as={Box} 
            cursor="pointer"
            px={2}
            
          transition='all 0.2s'
          fontWeight={'bold'}
          _hover={{ borderBottomColor: 'gray.400',color:'#FF0080' }}
          _expanded={{ color:'#ff0080ea' }}
          _focus={{ boxShadow: 'outline' }} >
            <Text fontSize={18}>Men <ChevronDownIcon /></Text>
                  
                </MenuButton>
                </NavLink>
                
                <MenuList borderTopColor={'#FF0080'} borderTopWidth={'thick'} my={5} pl={3} pr={3}>
                  <MenuItem onClick={()=>handleMenuButton("view")}>View All</MenuItem>
                  <MenuItem onClick={()=>handleMenuButton("tshirt")}>tshirt</MenuItem>
                  <MenuItem onClick={()=>handleMenuButton("kurta")}>kurta</MenuItem>
                  <MenuItem onClick={()=>handleMenuButton("shirt")}>shirt</MenuItem>
                  <MenuItem onClick={()=>handleMenuButton("short")}>short</MenuItem>
                  <MenuItem onClick={()=>handleMenuButton("shoes")}>Footwear</MenuItem>
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
      )}
      
      {/* Middle */}
      {(isTablet && !isMobile) && (
        <NavLink to={'/'}>
          <Box  h={'full'}   ml={20} pl={40}>
            <Image src={logoName} w={79}/>
            <Image src={logo} w={79} />
          </Box>
        </NavLink>
      )}
      {(!isTablet && isMobile) && (
        <NavLink to={'/'}>
          <Box  h={'full'}   >
            <Image src={logoName} w={79}/>
            <Image src={logo} w={79} />
          </Box>
        </NavLink>
      )}
      {(!isTablet && !isMobile) && (
        <NavLink to={'/'}>
          <Box  h={'full'}  padding={'0px,10px'}>
            <Image src={logoName} w={79}/>
            <Image src={logo} w={79} />
          </Box>
        </NavLink>
      )}
      
      

      {/* Right side */}
      {(isTablet && !isMobile) && (
        <Flex  >
          <Box>
          <Input
            type="text"
            icon={<FaSearch/>}
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleInputChange}
          />
        </Box>
          <Link to={'/cart'}>
          <IconButton
            aria-label="Cart"
            icon={<FaShoppingBag />}
            variant="ghost"
            colorScheme="gray"
          />
          </Link>
        </Flex>
      )}

      {(!isTablet && isMobile) && (
              <Flex  >
                <Box  w={60}>
                <Input
                  type="text"
                  icon={<FaSearch/>}
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </Box>
                <Link to={'/cart'}>
                <IconButton
                  aria-label="Cart"
                  icon={<FaShoppingBag />}
                  variant="ghost"
                  colorScheme="gray"
                />
                </Link>
              </Flex>
      )}

      {(!isTablet && !isMobile) && (
        <Stack direction="row" spacing={4} align="center"> 
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
            icon={picture?(<img style={{width:'25px',borderRadius:'15px'}} src={picture}/>):(<FaUser />)}
            variant="ghost"
            colorScheme="gray"
            placeholder='profile'
            onClick={()=>navigate('/tablogin')}
          />
          <Heading fontSize={10} pl={1}>{user?user:'profile'}</Heading>
          </Box>
  
          <Box>
          <IconButton
            aria-label="Wishlist"
            icon={<FcLike />}
            fontSize={24}
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
         
          <button onClick={handleLogout}><FaPowerOff/></button>
          <ThemeToggle/>
        </Stack>
      )}
      

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
      <Stack direction="column">
        <Menu>
          {({ isOpen }) => (
            <>
            <NavLink to={'/product'}>
              <MenuButton
                as={Box}
                cursor="pointer"
                px={2}
                transition="all 0.2s"
                fontWeight="bold"
                _hover={{ borderBottomColor: 'gray.400', color: '#FF0080' }}
                _expanded={{ color: '#ff0080ea' }}
                _focus={{ boxShadow: 'outline' }}
              >
                <Text fontSize={18}>Men {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</Text>
              </MenuButton>
              </NavLink>
              <Collapse in={isOpen}>
                <MenuList borderTopColor={'#FF0080'} borderTopWidth={'thick'} my={1} pl={3} pr={3}>
                  <NavLink><MenuItem textDecorationLine={"none"}>New in</MenuItem></NavLink>
                  <MenuItem>View All</MenuItem>
                  <MenuItem>tshirt</MenuItem>
                  <MenuItem>kurta</MenuItem>
                  <MenuItem>shirt</MenuItem>
                  <MenuItem>short</MenuItem>
                  <MenuItem>Footwear</MenuItem>
                </MenuList>
              </Collapse>
            </>
          )}
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
        {/* Other menu sections (Women, Kids, Collection) */}
      </Stack>
      <Flex alignItems={'center'} px={1}>
          <Heading fontSize={18} ml={1}>Wishlist</Heading>
          <IconButton
            aria-label="Wishlist"
            icon={<FcLike />}
            fontSize={20}
            variant="ghost"
            colorScheme="gray"
            onClick={()=>navigate('/wishlist')}
          />
          
          </Flex>
      {/* Profile and Logout buttons */}
    </DrawerBody>
  
            {/* Profile and Logout buttons */}         
          
          <DrawerFooter>
          <Stack mr={170} mb={20}>
              
              <Button
                leftIcon={picture?(<img style={{width:'20px',borderRadius:'10px'}} src={picture}/>):(<FaUser />)}
                variant="ghost"
                onClick={() => navigate('/tablogin')}
                _hover={{ borderBottomColor: 'gray.400', color: '#FF0080' }}
                _expanded={{ color: '#ff0080ea' }}
              >
                <Text fontSize={18} as={'b'}>{user?user:'profile'}</Text>
              </Button>
              <Button
                leftIcon={<FaSignOutAlt />}
                variant="ghost"
                onClick={handleLogout}
                ml={3}
                _hover={{ borderBottomColor: 'gray.400', color: '#FF0080' }}
                _expanded={{ color: '#ff0080ea' }}
              >
                <Text fontSize={18} as={'b'}>Log Out</Text>
              </Button>
              <Box mr={30}><ThemeToggle/></Box>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;





