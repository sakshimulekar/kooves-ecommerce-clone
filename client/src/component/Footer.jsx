import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Divider,
  HStack,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import logo1 from "../Assest/kooves1_clone_Logo.png.png";
import rupayLogo from '../Assest/rupay_logo.png';
import paytmLogo from '../Assest/paytm_logo.png';
import upiLogo from '../Assest/upi_logo.jpg';
import visaLogo from '../Assest/visa_logo.png';

const Footer = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Box as="footer" py={8} bg={bgColor} color={textColor} mt={8} mb={0} pt={8} pb={16}>
      <Container maxW="container.xl" pb={10}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={8}>
          {/* About */}
          <Box>
            <Heading as="h4" fontSize="lg" mb={4}>
              About
            </Heading>
            <ul>
              <li>
                <Link href="#">Our Story</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </Box>

          {/* Support */}
          <Box>
            <Heading as="h4" fontSize="lg" mb={4}>
              Support
            </Heading>
            <ul>
              <li>
                <Link href="#">Payment</Link>
              </li>
              <li>
                <Link href="#">Return/Exchange</Link>
              </li>
              <li>
                <Link href="#">Shipment</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
            </ul>
          </Box>

          {/* Customer Care */}
          <Box>
            <Heading as="h4" fontSize="lg" mb={4}>
              Customer Care
            </Heading>
            <Text>
              <strong>Timing:</strong> Monday-Friday (9 AM - 5 PM)
            </Text>
            <Text>
              <strong>Call:</strong> 123-456-7890
            </Text>
            <Text>
              <strong>Email:</strong> info@example.com
            </Text>
          </Box>

          {/* Subscribe */}
          <Box>
            <Heading as="h4" fontSize="lg" mb={4}>
              Subscribe
            </Heading>
            <Text>Stay up to date with our latest offers and updates.</Text>
            {/* Subscription form goes here */}
          </Box>
        </SimpleGrid>
      </Container>
      <Divider orientation="horizontal" />

      {/* Logos */}
      <HStack px={4} py={2} spacing={4} justify="space-between">
        {/* Facebook and Google */}
        <HStack spacing={4}>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            colorScheme="gray"
            variant="ghost"
          />
          <IconButton
            aria-label="Google"
            icon={<FaGoogle />}
            colorScheme="gray"
            variant="ghost"
          />
        </HStack>

        {/* Company Logo */}
        <Box>
          <Image src={logo1} maxH="60px" alt="Company Logo" />
        </Box>

        {/* Payment Logos */}
        <HStack spacing={4}>
          <Image src={rupayLogo} maxH="28px" alt="RuPay Logo" />
          <Image src={paytmLogo} maxH="28px" alt="Paytm Logo" />
          <Image src={upiLogo} maxH="28px" alt="UPI Logo" />
          <Image src={visaLogo} maxH="28px" alt="Visa Logo" />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
