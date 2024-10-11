import React from 'react';
import { Box, List, ListItem, Button, Divider } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Example authentication status (replace with your actual authentication logic)
const isAuthenticated = false;  // Change this to true if the user is logged in

const ProfileDropdown = () => {
  const profileOptions = [
    { name: 'Orders', path: '/orders' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Gift Cards', path: '/gift-cards' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Myntra Insider', path: '/insider' },
    { name: 'Myntra Credit', path: '/credit' },
    { name: 'Coupons', path: '/coupons' },
    { name: 'Saved Cards', path: '/saved-cards' },
    { name: 'Saved VPA', path: '/saved-vpa' },
    { name: 'Saved Addresses', path: '/saved-addresses' },
    { name: 'Edit Profile', path: '/edit-profile' },
  ];

  return (
    <Box
      bg="white"
      boxShadow="md"
      borderRadius="md"
      py={2}
      w="200px"
      position="absolute"
      top="100%"
      right={0}
      zIndex="1000"
      display="none"
      _groupHover={{ display: 'block' }} // Show dropdown on hover
    >
      {/* Show Login/Signup if not authenticated */}
      {!isAuthenticated ? (
        <Box p={3}>
          <Button
            as={RouterLink}
            to="/login"
            colorScheme="blue"
            width="100%"
            mb={2}
          >
            Login
          </Button>
          <Button
            as={RouterLink}
            to="/signup"
            variant="outline"
            colorScheme="blue"
            width="100%"
          >
            Signup
          </Button>
        </Box>
      ) : (
        <>
          <List>
            {profileOptions.map((option, index) => (
              <ListItem key={index} px={3} py={2} _hover={{ bg: 'gray.100' }}>
                <RouterLink to={option.path}>{option.name}</RouterLink>
              </ListItem>
            ))}
          </List>
          <Divider my={2} />
          {/* Logout Button */}
          <Box px={3} py={2}>
            <Button
              as={RouterLink}
              to="/logout"
              colorScheme="red"
              width="100%"
            >
              Logout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProfileDropdown;
