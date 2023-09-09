// import React from 'react';
// import {
//   Box,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   Link,
//   SimpleGrid,
//   useColorModeValue,
//   Divider,
//   HStack,
//   Image,
//   IconButton,
// } from '@chakra-ui/react';
// import { FaFacebook, FaGoogle } from 'react-icons/fa';
// import logo1 from "../Assest/kooves1_clone_Logo.png.png";
// import rupayLogo from '../Assest/rupay_logo.png';
// import paytmLogo from '../Assest/paytm_logo.png';
// import upiLogo from '../Assest/upi_logo.jpg';
// import visaLogo from '../Assest/visa_logo.png';

// const Footer = () => {
//   const bgColor = useColorModeValue('gray.200', 'gray.700');
//   const textColor = useColorModeValue('black', 'white');

//   return (
//     <Box as="footer" py={8} bg={bgColor} color={textColor} mt={8} mb={0} pt={8} pb={16}>
//       <Container maxW="container.xl" pb={10}>
//         <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={8}>
//           {/* About */}
//           <Box>
//             <Heading as="h4" fontSize="lg" mb={4}>
//               About
//             </Heading>
//             <ul>
//               <li>
//                 <Link href="#">Our Story</Link>
//               </li>
//               <li>
//                 <Link href="#">Contact Us</Link>
//               </li>
//               <li>
//                 <Link href="#">Careers</Link>
//               </li>
//               <li>
//                 <Link href="#">Privacy Policy</Link>
//               </li>
//             </ul>
//           </Box>

//           {/* Support */}
//           <Box>
//             <Heading as="h4" fontSize="lg" mb={4}>
//               Support
//             </Heading>
//             <ul>
//               <li>
//                 <Link href="#">Payment</Link>
//               </li>
//               <li>
//                 <Link href="#">Return/Exchange</Link>
//               </li>
//               <li>
//                 <Link href="#">Shipment</Link>
//               </li>
//               <li>
//                 <Link href="#">Terms and Conditions</Link>
//               </li>
//             </ul>
//           </Box>

//           {/* Customer Care */}
//           <Box>
//             <Heading as="h4" fontSize="lg" mb={4}>
//               Customer Care
//             </Heading>
//             <Text>
//               <strong>Timing:</strong> Monday-Friday (9 AM - 5 PM)
//             </Text>
//             <Text>
//               <strong>Call:</strong> 123-456-7890
//             </Text>
//             <Text>
//               <strong>Email:</strong> info@example.com
//             </Text>
//           </Box>

//           {/* Subscribe */}
//           <Box>
//             <Heading as="h4" fontSize="lg" mb={4}>
//               Subscribe
//             </Heading>
//             <Text>Stay up to date with our latest offers and updates.</Text>
//             {/* Subscription form goes here */}
//           </Box>
//         </SimpleGrid>
//       </Container>
//       <Divider orientation="horizontal" />

//       {/* Logos */}
//       <HStack px={4} py={2} spacing={4} justify="space-between">
//         {/* Facebook and Google */}
//         <HStack spacing={4}>
//           <IconButton
//             aria-label="Facebook"
//             icon={<FaFacebook />}
//             colorScheme="gray"
//             variant="ghost"
//           />
//           <IconButton
//             aria-label="Google"
//             icon={<FaGoogle />}
//             colorScheme="gray"
//             variant="ghost"
//           />
//         </HStack>

//         {/* Company Logo */}
//         <Box>
//           <Image src={logo1} maxH="60px" alt="Company Logo" />
//         </Box>

//         {/* Payment Logos */}
//         <HStack spacing={4}>
//           <Image src={rupayLogo} maxH="28px" alt="RuPay Logo" />
//           <Image src={paytmLogo} maxH="28px" alt="Paytm Logo" />
//           <Image src={upiLogo} maxH="28px" alt="UPI Logo" />
//           <Image src={visaLogo} maxH="28px" alt="Visa Logo" />
//         </HStack>
//       </HStack>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import style from "./Footer.module.css";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import logoName from "../../Assest/StyleHub2.png"
// import logo from "../../Assest/StyleHub1.png";
import logoname from "../../Assest/StyleHub2.png"
import logo from "../../Assest/StyleHub1.png"
function Footer() {
  return (
    <>
      <div className={style.footer_container}>
        <div className={style.footer_link_container}>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Get to Know Us
              </Heading>
              <Link to="#">
                <li>About Us</li>
              </Link>
              <Link to="#">
                <li>Careers</li>
              </Link>
              <Link to="#">
                <li>Press Releases</li>
              </Link>
              <Link to="#">
                <li>styleHub Science</li>
              </Link>
            </ul>
          </div>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Connect with Us
              </Heading>
              <Link to="#">
                <li>Facebook</li>
              </Link>
              <Link to="#">
                <li>Twitter</li>
              </Link>
              <Link to="#">
                <li>Instagram</li>
              </Link>
            </ul>
          </div>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Make Money with Us
              </Heading>
              <Link to="#">
                <li>Sell on styleHub</li>
              </Link>
              <Link to="#">
                <li>Sell under styleHub Accelerator</li>
              </Link>
              <Link to="#">
                <li>Protect and Build Your Brand</li>
              </Link>
              <Link to="#">
                <li>styleHub Global Selling</li>
              </Link>
              <Link to="#">
                <li>Become an Affiliate</li>
              </Link>
              <Link to="#">
                <li>Fulfilment by styleHub</li>
              </Link>
              <Link to="#">
                <li>Advertise Your Products</li>
              </Link>
              <Link to="#">
                <li>styleHub Pay on Merchants</li>
              </Link>
            </ul>
          </div>
          <div className={style.footer_link}>
            <ul>
              <Heading fontSize="16px" pb={2}>
                Let Us Help You
              </Heading>
              <Link to="#">
                <li>COVID-19 and styleHub</li>
              </Link>
              <Link to="#">
                <li>Your Account</li>
              </Link>
              <Link to="#">
                <li>Returns Centre</li>
              </Link>
              <Link to="#">
                <li>100% Purchase Protection</li>
              </Link>
              <Link to="#">
                <li>styleHub App Download</li>
              </Link>
              <Link to="#">
                <li>styleHub Assistant Download</li>
              </Link>
              <Link to="#">
                <li>Help</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={style.logo_country_container}>
          <div className={style.logo_language}>
            <img
              className={style.logo}
              src={logoname}
              alt="logoname"
            />
            <img
              className={style.language}
              src={logo}
              alt="logo"
            />
          </div>
          <div className={style.country}>
            <ul>
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>China</li>
              <li>France</li>
              <li>Germany</li>
              <li>Itality</li>
              <li>Japan</li>
              <li>Mexico</li>
              <li>Netherlands</li>
              <li>Poland</li>
              <li>Singapore</li>
              <li>Spain</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
              <li>United Kingdom</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.black_buttom}>
      <div className={style.black_footer}>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">AbeBooks</Heading>
            <Link to="#">
              <li>Books, art</li>
            </Link>
            <Link to="#">
              <li>& collectibles</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">styleHub web Services</Heading>
            <Link to="#">
              <li>Scalable Cloud</li>
            </Link>
            <Link to="#">
              <li>Computing services</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Audible</Heading>
            <Link to="#">
              <li>Download</li>
            </Link>
            <Link to="#">
              <li>Audio Books</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">DpReview</Heading>
            <Link to="#">
              <li>Digital</li>
            </Link>
            <Link to="#">
              <li>Photography</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">IMDb</Heading>
            <Link to="#">
              <li>Movies, Tv</li>
            </Link>
            <Link to="#">
              <li>& Celebrities</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Shopbop</Heading>
            <Link to="#">
              <li>Designer</li>
            </Link>
            <Link to="#">
              <li>Fashion Brands</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">styleHub Business</Heading>
            <Link to="#">
              <li>Everything for</li>
            </Link>
            <Link to="#">
              <li>Your Business</li>
            </Link>
          </ul>
        </div>
        <div className={style.black_footer_link}>
          <ul>
            <Heading fontSize="12px">Prime Now</Heading>
            <Link to="#">
              <li>2-Hour Delivery</li>
            </Link>
            <Link to="#">
              <li>on Everyday Items</li>
            </Link>
          </ul>
        </div>
      </div>
        <div className={style.privacy_notice}>
        <span>Conditions of Use & Sale Privacy Notice Interest-Based Ads</span>
          <br></br>
          <span>© 1996-2023, styleHub.com, Inc. or its affiliates</span>
        </div>
      </div>
    </>
  );
}

export { Footer };
