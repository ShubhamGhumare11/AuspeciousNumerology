
  import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  VStack,
  HStack,
  Flex,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={8}>
      {/* <Container maxW="container.xl"> */}
        <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              About Us
            </Text>
            <Link href="#" fontSize="md" color="gray.100">
              Our Story
            </Link>
            <Link href="#" fontSize="md" color="gray.100">
              Mission & Vision
            </Link>
            <Link href="#" fontSize="md" color="gray.100">
              Team
            </Link>
          </VStack>
          <VStack align="start" spacing={4} ml={{ md: 8 }}>
            <Text fontSize="lg" fontWeight="bold">
              Support
            </Text>
            <Link href="#" fontSize="md" color="gray.100">
              FAQ
            </Link>
            <Link href="#" fontSize="md" color="gray.100">
              Contact Us
            </Link>
            <Link href="#" fontSize="md" color="gray.100">
              Support Center
            </Link>
          </VStack>
          <VStack align="start" spacing={4} ml={{ md: 8 }}>
            <Text fontSize="lg" fontWeight="bold">
              Follow Us
            </Text>
            <Link href="#" fontSize="md" color="gray.100">
              Facebook
            </Link>
            <Link href="#" fontSize="md" color="gray.100">
              Twitter
            </Link>
            <Link href="#" fontSize="md" color="gray.100">
              Instagram
            </Link>
          </VStack>
        </Flex>
        <HStack justify="space-between" align="center" mt={8}>
          <Text fontSize="md" color="gray.100">
            2023 My Company. All rights reserved.
          </Text>
          <Text fontSize="md" color="gray.100">
            Terms of Service | Privacy Policy
          </Text>
        </HStack>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;