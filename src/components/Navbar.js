import React from "react";
import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import logoImage from "../images/logo.png";
import DrawerToggle from "./DrawerToggle"; // Import DrawerToggle component
// import ProductCard1 from "./components/Cards/ProductCard1";


function Navbar() {
  const displayIcons = useBreakpointValue({ base: "none", md: "flex" });
  const displayMenu = useBreakpointValue({ base: "none", md: "block" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });



  return (
    <Box bg="black" boxShadow="sm" 
          position="fixed" // This makes the navbar fixed at the top
      top="0"
      left="0"
      width="100%"
      height="100px"     // Height of the Navbar
      zIndex="1000"     // Ensure it's above all content

    py={3}>
      <Flex
          maxW="1200px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        direction={flexDirection}
        p={{ base: 2, md: 4 }}

        
      >

  {/* DrawerToggle for Mobile View */}
  <Box display={{ base: "block", md: "none" }}>
          <DrawerToggle/> 
        </Box>


        {/* Brand Name */}
        <Box fontWeight="bold" fontSize="lg" color="white ">
          {/* <Image src={logoImage} alt="MyBrand Logo"   width="20%" height="auto" style={{ padding: 0, margin: 0 , display: 'inline-block'}} /> */}
          MyBrand®
        </Box>

        {/* Category Dropdown and Search Bar */}
        <Flex flex="1" mx={4} alignItems="center" flexDirection={{ base: "column", md: "row" }}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="secondary"
              borderRadius="md"
              border="1px solid"
              display={displayMenu}
              mb={{ base: 2, md: 0 }}
              borderColor="gray.300"
            >
              All Categories
            </MenuButton>
            <MenuList>
              <MenuItem>Category 1</MenuItem>
              <MenuItem>Category 2</MenuItem>
              <MenuItem>Category 3</MenuItem>
            </MenuList>
          </Menu>

          <InputGroup  ml={{ base: 0, md: 4 }} maxW={{ base: "100%", md: "500px" }}  flex="1">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search for products"
              borderRadius="md"
              border="1px solid"
              borderColor="gray.300"
               width="100%"
            />
          </InputGroup>

          <Button
            ml={2}
            mt={{ base: 2, md: 0 }}

            bg="secondary "
            color="black"
            borderRadius="md"
            _hover={{ bg: "" }}
          >
            SEARCH
          </Button>
        </Flex>

        {/* User, Wishlist, and Cart Icons */}
        <HStack spacing={6} display={displayIcons} mt={{ base: 4, md: 0 }}>
          <IconButton
            aria-label="User Profile"
            icon={<FaUser />}
            variant="ghost"
            color="white "
          />
          <IconButton
            aria-label="Wishlist"
            icon={<FaHeart />}
            variant="ghost"
            color="white "
          />
          <Box position="relative">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              color="white "
            />
            <Box
              position="absolute"
              top="-2px"
              right="-2px"
              bg="red.500"
              borderRadius="full"
              w="18px"
              h="18apx"
              color="white"
              fontSize="xs"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              0
            </Box>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
