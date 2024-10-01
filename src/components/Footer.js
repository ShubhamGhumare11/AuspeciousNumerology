
// Footer.js
import React from 'react';
import { Box, Container, Stack, Text, Link, Divider, Flex, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.200" py={10}>
      <Container maxW="6xl">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="space-between">
          
          {/* About Section */}
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              About Us
            </Text>
            <Text fontSize="sm">
              We are committed to providing the best products at competitive prices. Our mission is to make online shopping easy, efficient, and enjoyable.
            </Text>
          </Box>

          {/* Contact Section */}
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Contact Us
            </Text>
            <Text fontSize="sm">Email: support@company.com</Text>
            <Text fontSize="sm">Phone: +123 456 7890</Text>
            <Text fontSize="sm">Address: 1234, Main Street, City, Country</Text>
          </Box>

          {/* Social Media Section */}
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Follow Us
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="https://facebook.com" isExternal>
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  size="lg"
                  color="white"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter/>}
                  variant="ghost"
                  size="lg"
                  color="white"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <IconButton
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                  size="lg"
                  color="white"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  variant="ghost"
                  size="lg"
                  color="white"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                />
              </Link>
            </Stack>
          </Box>
        </Stack>

        <Divider my={6} borderColor="gray.600" />

        {/* Footer Bottom */}
        <Flex justify="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Company Name. All Rights Reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
