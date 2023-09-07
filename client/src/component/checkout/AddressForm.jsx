// import React from "react";
// import {
//   Box,
//   Grid,
//   Text,
//   Input,
//   Checkbox,
//   FormControl,
//   FormLabel,
//   Center,
//   Button
// } from "@chakra-ui/react";

// function AddressForm() {
//   return (
//     <Box >
//       <Grid templateColumns="repeat(1, 1fr)" gap={4} >
//         <FormControl id="firstName"  >
//           <Input
//             pl={5}
//             required
//             autoComplete="given-name"
//             variant='flushed'
//             placeholder="First name"
//           />
//         </FormControl>
//         <FormControl id="lastName">
          
          
//           <Input
//             pl={5}
//             required
//             autoComplete="family-name"
//             variant='flushed'
//             placeholder="Last name"
//           />
//         </FormControl>
//         <FormControl id="address1">
//           <Input
//             required
//             pl={5}
//             autoComplete="shipping address-line1"
//             variant='flushed'
//             placeholder="Address line 1"
//           />
//         </FormControl>
//         <FormControl id="address2">
//           <Input
//             autoComplete="shipping address-line2"
//             pl={5}
//             variant='flushed'
//             placeholder="Address line 2"
//           />
//         </FormControl>
//         <FormControl id="city">
//           <Input
//             pl={5}
//             required
//             autoComplete="shipping address-level2"
//             variant='flushed'
//             placeholder="City"
//           />
//         </FormControl>
//         <FormControl id="state">
//           <Input variant='flushed' placeholder="State/Province/Region" pl={5}/>
//         </FormControl>
//         <FormControl id="zip">
          
//           <Input
//             required
//             type="number"
//             pl={5}
//             autoComplete="shipping postal-code"
//             variant='flushed'
//             placeholder="Zip / Postal code"
//           />
//         </FormControl>
//         <FormControl id="country">
          
//           <Input
//             required
//             pl={5}
//             autoComplete="shipping country"
//             variant='flushed'
//             placeholder="Country"
//           />
//         </FormControl>
//       </Grid>
//       <FormControl id="saveAddress" mt={4}>
//         <Checkbox colorScheme="green">
//           Use this address for payment details
//         </Checkbox>
//       </FormControl>
//       <Center m={5}>
//       <Button color={'white'} 
//         backgroundColor={'#FF0080'} >Save Address</Button>
//       </Center>
//     </Box>
//   );
// }

// export default AddressForm;


import React, { useState } from "react";
import {
  Box,
  Grid,
  Text,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  Center,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



function AddressForm() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const validationErrors = {};

    // Perform validation here
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    if (!formData.address1.trim()) {
      validationErrors.address1 = "Address line 1 is required";
    }
    if (!formData.address2.trim()) {
      validationErrors.address2 = "Address line 2 is required";
    }

    if (!formData.city.trim()) {
      validationErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      validationErrors.state = "state is required";
    }

    if (!formData.zip.trim()) {
      validationErrors.zip = "Zip / Postal code is required";
    }

    if (!formData.country.trim()) {
      validationErrors.country = "Country is required";
    }

    // Update the errors state with validationErrors
    setErrors(validationErrors);

    // Check if there are no errors before proceeding with form submission
    if (Object.keys(validationErrors).length === 0) {
      navigate('/checkout')
      // Perform your form submission logic here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <Box>
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        <FormControl id="firstName">
          <Input
            pl={5}
            name="firstName"
            autoComplete="given-name"
            variant="flushed"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <Text color="red">{errors.firstName}</Text>}
        </FormControl>
        <FormControl id="lastName">
          <Input
            pl={5}
            name="lastName"
            autoComplete="family-name"
            variant="flushed"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <Text color="red">{errors.lastName}</Text>}
        </FormControl>
        <FormControl id="address1">
          <Input
            pl={5}
            name="address1"
            autoComplete="shipping address-line1"
            variant="flushed"
            placeholder="Address line 1"
            value={formData.address1}
            onChange={handleChange}
          />
          {errors.address1 && <Text color="red">{errors.address1}</Text>}
        </FormControl>

        <FormControl id="address2">
          <Input
            pl={5}
            name="address2"
            autoComplete="shipping address-line2"
            variant="flushed"
            placeholder="Address line 2"
            value={formData.address2}
            onChange={handleChange}
          />
          {errors.address2 && <Text color="red">{errors.address2}</Text>}
        </FormControl>

        <FormControl id="city">
          <Input
            pl={5}
            name="city"
            autoComplete="shipping address-line2"
            variant="flushed"
            placeholder="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <Text color="red">{errors.city}</Text>}
        </FormControl>

        <FormControl id="state">
          <Input
            pl={5}
            name="state"
            autoComplete="shipping address-line2"
            variant="flushed"
            placeholder="state"
            value={formData.state}state
            onChange={handleChange}
          />
          {errors.state && <Text color="red">{errors.state}</Text>}
        </FormControl>

        <FormControl id="zip">
          <Input
            pl={5}
            name="zip"
            autoComplete="shipping address-line2"
            variant="flushed"
            placeholder="zip/postal"
            value={formData.zip}
            onChange={handleChange}
          />
          {errors.zip && <Text color="red">{errors.zip}</Text>}
        </FormControl>

        <FormControl id="country">
          <Input
            pl={5}
            name="country"
            autoComplete="shipping address-line2"
            variant="flushed"
            placeholder="country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <Text color="red">{errors.country}</Text>}
        </FormControl>
        {/* ... Repeat this pattern for other form fields */}
      </Grid>
      <FormControl id="saveAddress" mt={4}>
        <Checkbox colorScheme="green">
          Use this address for payment details
        </Checkbox>
      </FormControl>
      <Center m={5}>
        <Button
          color={"white"}
          backgroundColor={"#FF0080"}
          onClick={handleSubmit}
        >
          Save Address
        </Button>
      </Center>
    </Box>
  );
}

export default AddressForm;
