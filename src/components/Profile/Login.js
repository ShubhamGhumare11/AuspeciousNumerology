

  import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your login logic
    if (email && password) {
      toast({
        title: "Logged in.",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Redirect or perform other actions after successful login
    } else {
      toast({
        title: "Login failed.",
        description: "Please enter both email and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt="100px" p={4} borderWidth={1} borderRadius="md">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button colorScheme="teal" width="full" type="submit">
          Login
        </Button>
      </form>
      <Text mt={4} textAlign="center">
        Don't have an account? <Button variant="link">Sign Up</Button>
      </Text>
    </Box>
  );
};

export default Login;
