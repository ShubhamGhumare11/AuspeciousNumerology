// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   Heading,
//   Text,
//   useToast,
// } from '@chakra-ui/react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const toast = useToast();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast({
//         title: 'Passwords do not match.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     // Handle registration logic (e.g., API call)
//     console.log('User data:', formData);

//     toast({
//       title: 'Account created.',
//       description: "You've successfully created your account.",
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });

//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={8} p={5} borderWidth={1} borderRadius="md" boxShadow="lg">
//       <Heading as="h2" size="lg" textAlign="center" mb={5}>
//         Register
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4}>
//           <FormControl id="name" isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//             />
//           </FormControl>

//           <FormControl id="email" isRequired>
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </FormControl>

//           <FormControl id="password" isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//             />
//           </FormControl>

//           <FormControl id="confirmPassword" isRequired>
//             <FormLabel>Confirm Password</FormLabel>
//             <Input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//             />
//           </FormControl>

//           <Button type="submit" colorScheme="teal" size="lg" width="full">
//             Register
//           </Button>
//         </VStack>
//       </form>
//       <Text mt={4} textAlign="center">
//         Already have an account? <a href="/login" style={{ color: 'teal' }}>Login here</a>
//       </Text>
//     </Box>
//   );
// };

// export default RegistrationForm;




//**********************************USE FOR jwt**************************************** */
// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   Heading,
//   Text,
//   useToast,
// } from '@chakra-ui/react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobileNo: '',
//     roles: 'USER', // default role set to USER
//     password: '',
//     confirmPassword: '',
//   });

//   const toast = useToast();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast({
//         title: 'Passwords do not match.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8088/account/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           mobileNo: formData.mobileNo,
//           roles: formData.roles,
//           password: formData.password,
//         }),
//       });

//       if (response.ok) {
//         toast({
//           title: 'Account created.',
//           description: "You've successfully registered.",
//           status: 'success',
//           duration: 3000,
//           isClosable: true,
//         });
//         setFormData({
//           name: '',
//           email: '',
//           mobileNo: '',
//           roles: 'USER', // reset to default
//           password: '',
//           confirmPassword: '',
//         });
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to register');
//       }
//     } catch (error) {
//       toast({
//         title: 'Registration failed.',
//         description: error.message,
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={8} p={5} borderWidth={1} borderRadius="md" boxShadow="lg">
//       <Heading as="h2" size="lg" textAlign="center" mb={5}>
//         Register
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4}>
//           <FormControl id="name" isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//             />
//           </FormControl>

//           <FormControl id="email" isRequired>
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </FormControl>

//           <FormControl id="mobileNo" isRequired>
//             <FormLabel>Mobile Number</FormLabel>
//             <Input
//               type="text"
//               name="mobileNo"
//               value={formData.mobileNo}
//               onChange={handleChange}
//               placeholder="Enter your mobile number"
//             />
//           </FormControl>

//           <FormControl id="password" isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//             />
//           </FormControl>

//           <FormControl id="confirmPassword" isRequired>
//             <FormLabel>Confirm Password</FormLabel>
//             <Input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//             />
//           </FormControl>

//           <Button type="submit" colorScheme="teal" size="lg" width="full">
//             Register
//           </Button>
//         </VStack>
//       </form>
//       <Text mt={4} textAlign="center">
//         Already have an account? <a href="/login" style={{ color: 'teal' }}>Login here</a>
//       </Text>
//     </Box>
//   );
// };

// export default RegistrationForm;



import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  useToast,
  Image,
  Flex,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';
import communityImage from '../../assets/Images/signupimag.webp'; // Adjust the path according to your file structure
import { FiArrowRight } from "react-icons/fi"; // Import arrow icon


const SignUp = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    toast({
      title: 'Registration Successful',
      description: "You've successfully registered.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex
      align="center"
      justify="center"
      height={{ base: '100vh', md: 'auto' }} // Adjust height for larger devices

      
      // backgroundImage={`url(${backgroundImage})`} // Use the imported image


      backgroundSize="cover" // Cover the entire area
      backgroundPosition="center" // Center the image
      p={4}
    >
      <Box
        p={8}
        boxShadow="lg"
        bg="white"
        width={{ base: '120%', sm: '700px' }} // Increased width for a rectangular look
      >
        <Flex justify="center" mb={10}>
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} color="teal.600" >
            Sign Up
          </Heading>
        </Flex>


        <HStack spacing={8} alignItems="flex-start">
          {/* Left Section for Sign Up Form */}

         
          <VStack spacing={4} width="80%" align="flex-start">
          
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="" display="flex" alignItems="center" >
                    <AiOutlineUser style={{ marginRight: '8px' }} />
                    Fullname
                  </FormLabel>
                  <Input id="username" placeholder="Enter your username" borderRadius="0" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email" display="flex" alignItems="center">
                    <AiOutlineMail style={{ marginRight: '8px' }} />
                    Email
                  </FormLabel>
                  <Input type="email" id="email" placeholder="Enter your email" borderRadius="0" />
                </FormControl>
                



                <HStack spacing={4}>

                <FormControl isRequired>
                  <FormLabel htmlFor="mobile" display="flex" alignItems="center">
                    <AiOutlinePhone style={{ marginRight: '8px' }} />
                    Mobile Number
                  </FormLabel>
                  <Input id="mobile" placeholder="Enter your mobile number" borderRadius="0" />
                </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="otp" display="flex" alignItems="center">
                      Enter OTP
                    </FormLabel>
                    <Input id="otp" placeholder="Enter OTP" borderRadius="0" />
                  </FormControl>
                </HStack>
              
                <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
          
              placeholder="Enter your password"
            />
          </FormControl>


              </Stack>
            </form>
          </VStack>

          {/* Right Section for Community Info */}
          <VStack spacing={4} width="80%" align="flex-start" mx={10}>
            <Heading as="h3" size="lg" color="teal.600"  sx={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
              Welcome to Our Community!
            </Heading>
            <Text fontSize="md" color="gray.600">
              By joining us, you can enjoy exclusive benefits, special discounts, and much more.
            </Text>
            <Image
              src={communityImage} // Use your local image here
              alt="Community"
              borderRadius="0" // Removed border radius
              boxSize="50%" // Responsive image size
            />
            <Text fontSize="sm" color="gray.500" textAlign="left">
              Join our newsletter to stay updated!
            </Text>
          </VStack>
        </HStack>

<HStack>
  <Button
    type="submit"
    colorScheme="pink"
    width="full"
    mt={4}
    borderRadius={0}
    rightIcon={<FiArrowRight />} // Add arrow icon here
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      _hover: {
        rightIcon: {
          transform: "translateX(5px)", // Move the arrow slightly on hover
        },
      },
    }}
  >
    Sign Up
  </Button>
</HStack>

      </Box>
    </Flex>
  );
};

export default SignUp;
