// import React from "react";
// import { FaCircle, FaRuler } from "react-icons/fa";

// import {
//   Box,
//   Flex,
//   Text,
//   Image,
//   Icon,
//   Checkbox,
//   CheckboxGroup,
//   Button,
//   Stack,
//   Divider,
//   Badge,
//   AspectRatio,
//   Radio, RadioGroup,
// } from "@chakra-ui/react";
// import { FaStar, FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; 


// //   import Rating from 'react-rating'; // Import the Rating component

// function ProductDetail() {


//   const { id } = useParams();  // Get the product ID from the URL
//   const [product, setProduct] = useState([]);


//   useEffect(() => {
//     // Fetch products from your Spring Boot backend
//     const fetchProducts = async () => {
//       try {
//         // const response = await axios.get('http://localhost:8086/api/products/${id}'); // Adjust the endpoint based on your API
//         const response = await axios.get(`http://localhost:8086/api/products/${id}`);

//         let ProductObj= response.data.object;
              
//         console.log(ProductObj.imageURL);

//         setProduct(ProductObj);

//       } catch (error) {
        
//         console.error('Error fetching products:', error);
//       }
//     };
    
//     fetchProducts();
//   }, [id]);



//   return (
//     <Box
//       maxW="md"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       mt="10px"
//     >
//       <AspectRatio ratio={10/ 3}>
//         <Image src={product.imageURL} alt="Product Image" />
//       </AspectRatio>


//       <Box p="6">
//         <Flex justifyContent="space-between" alignItems="center">
//           <Text fontSize="lg" fontWeight="bold">
//             Product Name
//           </Text>
//           {/* <Rating defaultValue={4} size="sm" /> */}
//         </Flex>

//         <Text fontSize="md" color="gray.600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//           nulla auctor, vestibulum magna sed, convallis ex.
//         </Text>

//         <Flex justifyContent="space-between" alignItems="center" mt="4">
//           <Text fontSize="lg" fontWeight="bold">
//             {/* $99.99 */}
//             {product.price}
//           </Text>

//           <Stack direction="row" spacing={1} align="center">
//             {/* Rendering star rating */}
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="yellow.400" />
//             <Icon as={AiFillStar} color="gray.400" />
//             {/* <Text>({product.reviews})</Text> */}
//           </Stack>

//           <Button
//             variant="outline"
//             size="sm"
//             colorScheme="teal"
//             leftIcon={<FaCartPlus />}
//           >
//             Add to Cart
//           </Button>
//         </Flex>

//         <Stack direction="row" spacing="4" mt="4">
//           <Badge variant="solid" colorScheme="blue">
//             <Icon as={FaHeart} mr="2" />
//             4.5k
//           </Badge>
//           <Badge variant="solid" colorScheme="green">
//             <Icon as={FaStar} mr="2" />
//             4.5/5
//           </Badge>
//         </Stack>

//         <Divider mt="4" />

//         <Flex justifyContent="space-between" alignItems="center" mt="4">
//           <Text fontSize="md" color="gray.600">
//             Color:
//           </Text>
//           <Icon as={FaCircle} color="blue.500" mr="2" />
//           <Icon as={FaCircle} color="red.500" mr="2" />
//           <Icon as={FaCircle} color="green.500" mr="2" />
//         </Flex>

//         <Flex justifyContent="space-between" alignItems="center" mt="4">
//           <Text fontSize="md" color="gray.600">
//             Size:
//           </Text>

//           <CheckboxGroup colorScheme="teal">
//             <Stack direction="row" spacing={5}>
//               <Checkbox value="S">S</Checkbox>
//               <Checkbox value="M">M</Checkbox>
//               <Checkbox value="L">L</Checkbox>
//               <Checkbox value="XL">XL</Checkbox>
//             </Stack>
//           </CheckboxGroup>
//         </Flex>
//         <Stack mt={4} spacing={2}>
//           <Text fontWeight="bold" fontSize="lg">
//             {product.name}
//           </Text>
//           <Text fontSize="xl" color="gray.500">
//             ${product.price}
//           </Text>

//           <Stack direction="row" spacing={4}>
//             <Button
//               leftIcon={<FaHeart />}
//               aria-label="Add to favourite"
//               colorScheme="pink"
//               variant="outline"
//             >
//               Favorite
//             </Button>
//             <Button
//               leftIcon={<FaEye />}
//               aria-label="View details"
//               colorScheme="teal"
//               variant="solid"
//             >
//               Details
//             </Button>
//           </Stack>


//         </Stack>

//       </Box>
//     </Box>
//   );
// }

// export default ProductDetail;









// import React, { useState, useEffect } from "react";
// import {
//   Box, Flex, Text, Image, Icon, Button, Stack, Divider, Badge, AspectRatio, CheckboxGroup, Checkbox, VStack
// } from "@chakra-ui/react";
// import { FaStar, FaHeart, FaCartPlus, FaEye, FaCircle } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Fetch product data
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8086/api/products/${id}`);
//         setProduct(response.data.object || {});
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   // Sample additional images for hover effect
//   const properties = [
//     { imageUrl: 'https://images.meesho.com/images/products/191428644/rgbz5_512.webp', imageAlt: 'Image 1' },
//     { imageUrl: 'https://images.bestsellerclothing.in/data/vero-moda/25-jan-2023/123051902_g2.jpg', imageAlt: 'Image 2' },
//     { imageUrl: 'https://images.meesho.com/images/products/191428644/rgbz5_512.webp', imageAlt: 'Image 3' },
//     { imageUrl: 'https://images.meesho.com/images/products/191428644/rgbz5_512.webp', imageAlt: 'Image 4' }
//   ];

//   return (
//     <Box maxW="1200px" mx="auto" p={6} mt={4}>
//       <Flex direction={{ base: "column", md: "row" }} gap={10}>
        
//         {/* Sidebar for image thumbnails */}
//         <Box width={{ base: "100%", md: "120px" }}>
//           <VStack spacing={4} align="flex-start">
//             {properties.map((property, index) => (
//               <Box
//                 key={index}
//                 border={hoveredIndex === index ? '2px solid blue' : 'none'}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 cursor="pointer"
//               >
//                 <Image  
//                   src={property.imageUrl}
//                   alt={property.imageAlt}
//                   boxSize="100px"
//                   objectFit="cover"
//                 />
//               </Box>
//             ))}
//           </VStack>
//         </Box>

//         {/* Product Image and Details */}
//         <Flex flex="1" direction="column">
//           {/* Main Image */}
//           <AspectRatio ratio={4 / 3} mb={4}>
//             <Image
//               src={hoveredIndex !== null ? properties[hoveredIndex].imageUrl : product.imageURL}
//               alt="Product Image"
//               objectFit="cover"
//             />
//           </AspectRatio>

//           {/* Product Information */}
//           <Box p={4} bg="white" shadow="lg" borderRadius="md">
//             <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
//             <Flex alignItems="center" mt={2}>
//               <Stack direction="row" spacing={1}>
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="gray.400" />
//               </Stack>
//               <Text ml={2} fontSize="sm" color="gray.600">(4.5/5)</Text>
//             </Flex>
//             <Text fontSize="lg" color="gray.700" mt={2}>${product.price}</Text>

//             <Text mt={4} fontSize="md" color="gray.600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
//             </Text>

//             <Flex justify="space-between" alignItems="center" mt={6}>
//               <Button leftIcon={<FaCartPlus />} colorScheme="teal" variant="solid">Add to Cart</Button>
//               <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline">Favorite</Button>
//             </Flex>

//             <Divider my={4} />

//             <Flex justifyContent="space-between" alignItems="center" mt="4">
//               <Text fontSize="md" color="gray.600">Color:</Text>
//               <Flex>
//                 <Icon as={FaCircle} color="blue.500" mr="2" />
//                 <Icon as={FaCircle} color="red.500" mr="2" />
//                 <Icon as={FaCircle} color="green.500" mr="2" />
//               </Flex>
//             </Flex>

//             <Flex justifyContent="space-between" alignItems="center" mt="4">
//               <Text fontSize="md" color="gray.600">Size:</Text>
//               <CheckboxGroup colorScheme="teal">
//                 <Stack direction="row" spacing={5}>
//                   <Checkbox value="S">S</Checkbox>
//                   <Checkbox value="M">M</Checkbox>
//                   <Checkbox value="L">L</Checkbox>
//                   <Checkbox value="XL">XL</Checkbox>
//                 </Stack>
//               </CheckboxGroup>
//             </Flex>
//           </Box>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// }

// export default ProductDetail;





// import React, { useEffect, useState } from "react";
// import { FaCircle, FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
// import { Box, Flex, Text, Image, Icon, Button, Stack, Badge, Divider, Checkbox, CheckboxGroup, AspectRatio, VStack } from "@chakra-ui/react";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8086/api/products/${id}`);
//         let ProductObj = response.data.object;
//         console.log("Product Object.........."+ProductObj)


//         // imageURL array iterate
//         const imageArr=ProductObj.imageURLs
//         for (let i = 0; i < imageArr.length; i++) {
//        console.log("indivisual Image URL.........."+imageArr[i])
//         }
        


//         setProduct(ProductObj);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const imageList = [
//     { url: product.imageURL, alt: "Product Image" },
//     { url: 'https://via.placeholder.com/150', alt: "Alternate Image 1" },
//     { url: 'https://via.placeholder.com/150', alt: "Alternate Image 2" },
//   ];

//   return (
//       <Box maxW="container.xl" mx="auto" p={6} boxShadow="lg">
//         <Flex direction={["column", "column", "row"]} gap={8}>
//           {/* Left section: Image thumbnails and big image */}
//           <Stack direction="row"  spacing={4} w={["100%", "100%", "40%"]}>
//             {/* Image Thumbnails */}
//             <VStack spacing={4} align="flex-start">
//               {imageList.map((image, index) => (
//                 <Box
//                   key={index}
//                   border={hoveredImageIndex === index ? "2px solid blue" : "2px solid transparent"}
//                   cursor="pointer"
//                   onMouseEnter={() => setHoveredImageIndex(index)}
//                 >
//                   <Image
//                     src={image.url}
//                     alt={image.alt}
//                     boxSize="80px"
//                     objectFit="cover"
//                   />
//                 </Box>
//               ))}
//             </VStack>

//             {/* Main Product Image */}
//             <AspectRatio ratio={4 / 3} w="100%">
//               <Image src={imageList[hoveredImageIndex].url} alt="Big Product Image" objectFit="contain" borderRadius="md" />
//             </AspectRatio>
//           </Stack>

//           {/* Right section: Product Details */}
//           <Box flex="1" p={6}  borderRadius="lg" bg="white" >
//             <Text fontSize="2xl" fontWeight="bold" mb={2}>
//               {product.productName || "Product Name"}
//             </Text>
//             <Text fontSize="xl" fontWeight="semibold" color="gray.600" mb={4}>
//               {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
//             </Text>

//             <Flex align="center" mb={4}>
//               <Text fontSize="2xl" fontWeight="bold" mr={4}>${product.price || "99.99"}</Text>
//               <Stack direction="row" spacing={1} align="center">
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="yellow.400" />
//                 <Icon as={AiFillStar} color="gray.400" />
//                 <Text color="gray.500" fontSize="sm">(4.5/5)</Text>
//               </Stack>
//             </Flex>

//             {/* Add to Cart / Favorite Buttons */}
//             <Stack direction="row" spacing={4} mb={6}>
//               <Button
//                 leftIcon={<FaCartPlus />}
//                 colorScheme="teal"
//                 variant="solid"
//                 size="lg"
//               >
//                 Add to Cart
//               </Button>
//               <Button
//                 leftIcon={<FaHeart />}
//                 colorScheme="pink"
//                 variant="outline"
//                 size="lg"
//               >
//                 Favorite
//               </Button>
//             </Stack>

//             <Divider mb={4} />

//             {/* Product Options */}
//             <Box>
//               <Text fontSize="lg" fontWeight="semibold" mb={2}>
//                 Color Options:
//               </Text>
//               <Flex>
//                 <Icon as={FaCircle} color="blue.500" boxSize={6} mr={3} />
//                 <Icon as={FaCircle} color="red.500" boxSize={6} mr={3} />
//                 <Icon as={FaCircle} color="green.500" boxSize={6} mr={3} />
//               </Flex>
//             </Box>

//             <Box mt={4}>
//               <Text fontSize="lg" fontWeight="semibold" mb={2}>
//                 Size:
//               </Text>
//               <CheckboxGroup colorScheme="teal">
//                 <Stack direction="row" spacing={5}>
//                   <Checkbox value="S">S</Checkbox>
//                   <Checkbox value="M">M</Checkbox>
//                   <Checkbox value="L">L</Checkbox>
//                   <Checkbox value="XL">XL</Checkbox>
//                 </Stack>
//               </CheckboxGroup>
//             </Box>
//           </Box>
//         </Flex>
//       </Box>
//   );
// }

// export default ProductDetail;




import React, { useEffect, useState } from "react";
import { FaCircle, FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Box, Flex, Text, Image, Icon, Button, Stack, Badge, Divider, Checkbox, CheckboxGroup, AspectRatio, VStack } from "@chakra-ui/react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
 
    fetchProduct(id);
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8086/api/products/${id}`);
      let ProductObj = response.data.object;
      
      // Setting the product data and image URLs
      setProduct(ProductObj);
      setImageList(ProductObj.imageURLs.map(url => ({ url, alt: "Product Image" })));
      
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <Box maxW="container.xl" mx="auto" p={6} boxShadow="lg">
      <Flex direction={["column", "column", "row"]} gap={8}>
        {/* Left section: Image thumbnails and big image */}
        <Stack direction="row" spacing={4} w={["100%", "100%", "40%"]}>
          {/* Image Thumbnails */}
          <VStack spacing={4} align="flex-start">
            {imageList.map((image, index) => (
              <Box
                key={index}
                border={hoveredImageIndex === index ? "2px solid blue" : "2px solid transparent"}
                cursor="pointer"
                onMouseEnter={() => setHoveredImageIndex(index)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  boxSize="80px"
                  objectFit="cover"
                />
              </Box>
            ))}
          </VStack>

          {/* Main Product Image */}
          <AspectRatio ratio={4 / 3} w="100%">
            <Image src={imageList[hoveredImageIndex]?.url || product.imageURL} alt="Big Product Image" objectFit="contain" borderRadius="md" />
          </AspectRatio>
        </Stack>

        {/* Right section: Product Details */}
        <Box flex="1" p={6} borderRadius="lg" bg="white">
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            {product.productName || "Product Name"}
          </Text>
          <Text fontSize="xl" fontWeight="semibold" color="gray.600" mb={4}>
            {product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </Text>

          <Flex align="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold" mr={4}>${product.price || "99.99"}</Text>
            <Stack direction="row" spacing={1} align="center">
              <Icon as={AiFillStar} color="yellow.400" />
              <Icon as={AiFillStar} color="yellow.400" />
              <Icon as={AiFillStar} color="yellow.400" />
              <Icon as={AiFillStar} color="yellow.400" />
              <Icon as={AiFillStar} color="gray.400" />
              <Text color="gray.500" fontSize="sm">(4.5/5)</Text>
            </Stack>
          </Flex>

          {/* Add to Cart / Favorite Buttons */}
          <Stack direction="row" spacing={4} mb={6}>
            <Button
              leftIcon={<FaCartPlus />}
              colorScheme="teal"
              variant="solid"
              size="lg"
            >
              Add to Cart
            </Button>
            <Button
              leftIcon={<FaHeart />}
              colorScheme="pink"
              variant="outline"
              size="lg"
            >
              Favorite
            </Button>
          </Stack>

          <Divider mb={4} />

          {/* Product Options */}
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Color Options:
            </Text>
            <Flex>
              <Icon as={FaCircle} color="blue.500" boxSize={6} mr={3} />
              <Icon as={FaCircle} color="red.500" boxSize={6} mr={3} />
              <Icon as={FaCircle} color="green.500" boxSize={6} mr={3} />
            </Flex>
          </Box>

          <Box mt={4}>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Size:
            </Text>
            <CheckboxGroup colorScheme="teal">
              <Stack direction="row" spacing={5}>
                <Checkbox value="S">S</Checkbox>
                <Checkbox value="M">M</Checkbox>
                <Checkbox value="L">L</Checkbox>
                <Checkbox value="XL">XL</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductDetail;

