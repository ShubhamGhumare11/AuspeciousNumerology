import React,{ useState } from "react";
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
  ListItem,
  List,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import logoImage from "../images/logo.png";
import DrawerToggle from "./DrawerToggle"; // Import DrawerToggle component
// import ProductCard1 from "./components/Cards/ProductCard1";
import { Link, useNavigate } from 'react-router-dom';
import { productData } from './product/ProductData';
import  ProfileDropdown  from './Profile/ProfileDropdown';



import { useWishlist } from './product/WishlistContext'; // Adjust the import path
import { useCart } from './product/CartContext'; // Adjust the import path



function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const displayIcons = useBreakpointValue({ base: "none", md: "flex" });
  const displayMenu = useBreakpointValue({ base: "none", md: "block" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const navigate = useNavigate();

  const { wishlistItems } = useWishlist();
  const { cartItems ,getTotalItems} = useCart();

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const results = productData.filter((product) =>  //here we need to get productData
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (productId) => {
    setSearchQuery('');
    setSearchResults([]);
    navigate(`/product/${productId}`);
   
  };




  const handleWishlistClick = () => {
    // Implement your logic here to show the wishlist
    console.log('Wishlist items:', wishlistItems);
    navigate('/wishlist'); // Navigate to the Wishlist component

    // You can redirect to a wishlist page or show a modal
  };

  const getCartItemCount = () => {
    return getTotalItems();
  };
  
  const handleCartClick = () => {
    console.log('Cart items:', cartItems);
    navigate('/cartitem'); 

  
  };


  const handleProfileClick = () => {
    
    navigate('/login'); 
  };

  
  return (
    <Box bg="grey" boxShadow="sm" 
          position="fixed" // This makes the navbar fixed at the top
      top="0"
      left="0"
      width="100%"
      // maxWidth="150rem"
      height="100px"     // Height of the Navbar
      zIndex="1000"     // Ensure it's above all content
      // maxW="container.xl"


    py={3}>
      <Flex
          // maxW="1200px"
          maxW="container.xl"
          
        mx="auto"
        alignItems="center"
        justifyContent="centre  "
        direction={flexDirection}
        p={{ base: 2, md: 4 }}

        
      >

  {/* DrawerToggle for Mobile View */}
  <Box display={{ base: "block", md: "none" }}>
          <DrawerToggle/> 
        </Box>

        <Link to="/"> 
        {/* Brand Name */}
        <Box fontWeight="bold" fontSize="lg" color="white ">
          {/* <Image src={logoImage} alt="MyBrand Logo"   width="20%" height="auto" style={{ padding: 0, margin: 0 , display: 'inline-block'}} /> */}
          MyBrand®
        </Box>
        </Link>

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

          <Flex alignItems='center' width='100%' position='relative'>
          <form onSubmit={(e) => e.preventDefault()}>
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
               onChange={handleInputChange}
               onFocus={() => setIsDropdownVisible(true)}
               onBlur={() => setIsDropdownVisible(false)}
            />
          </InputGroup>
</form>
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
        



        {searchResults.length > 0 && (
              <Box
                mt={2}
                bg='white'
                borderRadius='md'
                boxShadow='md'
                p={2}
                ml={{ base: '100%', md: 'auto' }}
                maxW={{ md: '270' }}
                width='100%'
                position='absolute'
                top='100%'
                left='0'
                zIndex='1'
              >
                <List spacing={1}>
                  {searchResults.map((product) => (
                    <ListItem
                      key={product.productId}
                      onMouseDown={() => handleProductClick(product.productId)} 
                      cursor='pointer'
                      _hover={{ bg: 'gray.100' }}
                      p={2}
                      borderRadius='md'
                    >
                      {product.name}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

          </Flex>
</Flex>








        {/* User, Wishlist, and Cart Icons */}
        <HStack spacing={6} display={displayIcons} mt={{ base: 4, md: 0 }}>
          {/* <IconButton
            aria-label="User Profile"
            icon={<FaUser />}
            variant="ghost"
            color="white "
            onClick={handleProfileClick}

          /> */}

          <Box position="relative" role="group">
            <IconButton aria-label="User Profile" icon={<FaUser />} variant="ghost" color="white" />

            {/* ProfileDropdown will appear on hover */}
            <ProfileDropdown />
          </Box>
          <IconButton
            aria-label="Wishlist"
            icon={<FaHeart />}
            variant="ghost"
            color="white "
            onClick={handleWishlistClick}
          />
          <Box position="relative">
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              color="white "
              onClick={handleCartClick}
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
               {getCartItemCount()}
            </Box>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
