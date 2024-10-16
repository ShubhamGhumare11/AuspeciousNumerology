









import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8088/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }

      const data = await response.json();
      const token = data.token; // assuming token is returned

      // Store the token in localStorage or handle login state
      localStorage.setItem('token', token);
      toast({
        title: 'Login successful!',
        description: 'Welcome back!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={5} borderWidth={1} borderRadius="md" boxShadow="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={5}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginForm;









//***************************************USED for Jwt********************* */
// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   useToast,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const toast = useToast();
//   const navigate = useNavigate(); // To navigate the user post-login

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8088/jwt/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed. Please check your credentials.');
//       }

//       const data = await response.json();
//       console.log('JWT data:', data);

//       // const token = data.token; // Assuming the token is returned in a property called 'token'

//       // Print the token to the console for debugging
//       // console.log('JWT Token:', token);
//       // console.log('JWT Token:653463', response.data);


//       // Store token in localStorage
//       localStorage.setItem('token', data);

//       toast({
//         title: 'Login successful.',
//         description: 'Welcome back!',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });

//       // Redirect to dashboard or homepage
//       navigate('/dashboard'); // Assuming you have a route setup for '/dashboard'
      
//     } catch (error) {
//       toast({
//         title: 'Login failed.',
//         description: error.message || 'An unexpected error occurred. Please try again.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box width="400px" mx="auto" mt="100px" p={5} borderWidth={1} borderRadius="lg">
//       <Heading as="h2" size="lg" mb={4}>
//         Login
//       </Heading>
//       <form onSubmit={handleLogin}>
//         <FormControl mb={3} isRequired>
//           <FormLabel>Username</FormLabel>
//           <Input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </FormControl>
//         <FormControl mb={3} isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormControl>
//         <Button
//           colorScheme="teal"
//           type="submit"
//           isLoading={loading}
//           width="full"
//         >
//           Login
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Login;





