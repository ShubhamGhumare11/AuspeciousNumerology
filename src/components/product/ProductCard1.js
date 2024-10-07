// Prod
import React from "react"; // Keep only one of these

// import React, { useEffect, useState } from "react";
// import { FaCircle, FaHeart, FaCartPlus } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
// import { Box, Flex, Text, Image, Icon, Button, Stack, Badge, Divider, Checkbox, CheckboxGroup, AspectRatio, VStack } from "@chakra-ui/react";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function ProductDetail() {
//   const { id } = useParams(); // Initially fetch the product by its default ID
//   const [product, setProduct] = useState({});
//   const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
//   const [imageList, setImageList] = useState([]);
//   const [availableColors, setAvailableColors] = useState([]); // To store available colors

//   useEffect(() => {
//     fetchProductById(id); // Fetch the product initially by ID
//   console.log("in useeffect ProductCard1................")
//   }, [id]);

//   // Function to fetch product by ID
//   const fetchProductById = async (productId) => {
//     try {
//       const response = await axios.get(`http://localhost:8086/api/products/${id}`);
//       const ProductObj = response.data.object;

//       // Set product details and image list
//       setProduct(ProductObj);
//       setImageList(ProductObj.imageURLs.map(url => ({ url, alt: "Product Image" })));

//       // Assuming backend provides available colors for the product
//       setAvailableColors(ProductObj.color);
//       console.log("Available color are....."+ProductObj.color)
//     } catch (error) {
//       console.error('Error fetching product:', error);
//     }
//   };

//   // Function to handle color change
//   const handleColorChange = async (prodname,color) => {
//     try {

//       console.log(prodname +"   "+color)

// // const name = encodeURIComponent(prodname);
// // const prodcolor = encodeURIComponent(color);

// const response = await axios.get(`http://localhost:8086/api/products/image-urls/${prodname}/${color}`);

//       // const response = await axios.get(`http://localhost:8086/api/products/image-urls/${prodname}/${color}`);

//       // const encodedUrl = `http://localhost:8086/api/products/image-urls/${encodeURIComponent(prodname)}/${encodeURIComponent(color)}`;

//       // console.log(encodedUrl);

//       // const response = await axios.get(encodedUrl);

//       console.log("in handleColorChange Response is >>"+ response.data.messsage)
//             console.log("in handleColorChange >>"+ response.data.object)
//       const ProductObj = response.data.object;

//       // Update the product details and image list for the selected color
//       // setProduct(ProductObj);
//       setImageList(ProductObj.map(url => ({ url, alt: "Product Image" })));
//     } catch (error) {
//       console.error('Error fetching product for selected color:', error);
//     }
//   };

//   return (
//     <Box maxW="container.xl" mx="auto" p={6} boxShadow="lg">
//       <Flex direction={["column", "column", "row"]} gap={8}>
//         {/* Left section: Image thumbnails and big image */}
//         <Stack direction="row" spacing={4} w={["100%", "100%", "40%"]}>
//           {/* Image Thumbnails */}
//           <VStack spacing={4} align="flex-start">
//             {imageList.map((image, index) => (
//               <Box
//                 key={index}
//                 border={
//                   hoveredImageIndex === index
//                     ? "2px solid blue"
//                     : "2px solid transparent"
//                 }
//                 cursor="pointer"
//                 onMouseEnter={() => setHoveredImageIndex(index)}
//               >
//                 <Image
//                   src={image.url}
//                   alt={image.alt}
//                   boxSize="80px"
//                   objectFit="cover"
//                 />
//               </Box>
//             ))}
//           </VStack>

//           {/* Main Product Image */}
//           <Box maxW="500px" maxH="500px" overflow="hidden">
//           <Image
//             src={imageList[hoveredImageIndex]?.url || product.imageURL}
//             alt="Big Product Image"
//             objectFit="conatain"
//             w="100%" // Make sure width is 100% of the parent container
//             h="auto" // Auto height for maintaining aspect ratio
//           />
//           </Box>

//         </Stack>

//         {/* Right section: Product Details */}
//         <Box flex="4" p={6} borderRadius="lg" bg="white">
//           <Text fontSize="2xl" fontWeight="bold" mb={2}>
//             {product.productName || "Product Name"}
//           </Text>
//           <Text fontSize="xl" fontWeight="semibold" color="gray.600" mb={4}>
//             {product.description ||
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
//           </Text>

//           <Flex align="center" mb={4}>
//             <Text fontSize="2xl" fontWeight="bold" mr={4}>
//               ${product.price || "99.99"}
//             </Text>
//             <Stack direction="row" spacing={1} align="center">
//               <Icon as={AiFillStar} color="yellow.400" />
//               <Icon as={AiFillStar} color="yellow.400" />
//               <Icon as={AiFillStar} color="yellow.400" />
//               <Icon as={AiFillStar} color="yellow.400" />
//               <Icon as={AiFillStar} color="gray.400" />
//               <Text color="gray.500" fontSize="sm">
//                 (4.5/5)
//               </Text>
//             </Stack>
//           </Flex>

//           {/* Add to Cart / Favorite Buttons */}
//           <Stack direction="row" spacing={4} mb={6}>
//             <Button
//               leftIcon={<FaCartPlus />}
//               colorScheme="teal"
//               variant="solid"
//               size="lg"
//             >
//               Add to Cart
//             </Button>
//             <Button
//               leftIcon={<FaHeart />}
//               colorScheme="pink"
//               variant="outline"
//               size="lg"
//             >
//               Favorite
//             </Button>
//           </Stack>

//           <Divider mb={4} />

//           {/* Color Options */}
//           {/* <Box>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Color Options:</Text>
//             <Flex>
//               {availableColors.map((colorOption, index) => (
//                 <Icon
//                   key={index}
//                   as={FaCircle}
//                   color={colorOption} // Assuming colorOption contains the color hex code or name
//                   boxSize={6}
//                   mr={3}
//                   cursor="pointer"
//                   onClick={() => handleColorChange(product.productName,colorOption)} // Change product based on selected color
//                 />
//               ))}
//             </Flex>
//           </Box> */}

//           <Box>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>
//               Color Options:
//             </Text>
//             <Flex>
//               {/* Blue Color Option */}
//               <Icon
//                 as={FaCircle}
//                 color="blue.500"
//                 boxSize={6}
//                 mr={3}
//                 cursor="pointer" // Makes the icon clickable
//                 onClick={() => handleColorChange(product.productName, "blue")} // Pass the color to handleColorChange
//               />
//               {/* Red Color Option */}
//               <Icon
//                 as={FaCircle}
//                 color="black.500"
//                 boxSize={6}
//                 mr={3}
//                 cursor="pointer"
//                 onClick={() => handleColorChange(product.productName, "Black")}
//               />
//               {/* Green Color Option */}
//               <Icon
//                 as={FaCircle}
//                 color="green.500"
//                 boxSize={6}
//                 mr={3}
//                 cursor="pointer"
//                 onClick={() =>
//                   handleColorChange(product.productName, "Light Green")
//                 }
//               />
//             </Flex>
//           </Box>

//           {/* Size Options */}
//           <Box mt={4}>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>
//               Size:
//             </Text>
//             <CheckboxGroup colorScheme="teal">
//               <Stack direction="row" spacing={5}>
//                 <Checkbox value="S">S</Checkbox>
//                 <Checkbox value="M">M</Checkbox>
//                 <Checkbox value="L">L</Checkbox>
//                 <Checkbox value="XL">XL</Checkbox>
//               </Stack>
//             </CheckboxGroup>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default ProductDetail;

// import React, { useEffect, useState } from 'react';
// import { FaCircle, FaHeart, FaCartPlus, FaTruck, FaTags, FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
// import { AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai';
// import { Box, Flex, Text, Image, Icon, Button, Stack, Badge, Divider, Select, Table, Tbody, Tr, Td, Tooltip } from '@chakra-ui/react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Light } from '@mui/icons-material';

// function ProductDetail() {
//   const { id } = useParams(); // Fetch product by ID
//   const [product, setProduct] = useState({});
//   const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
//   const [imageList, setImageList] = useState([]);
//   const [deliveryLocation, setDeliveryLocation] = useState('New York'); // Default delivery location

//   const [selectedColor, setSelectedColor] = useState("Red" ,"Blue", "white", "Black"); // For color selection

//   const [colorOptions, setColorOptions] = useState(["Light Grey","Black"]); // Array of color options

//   useEffect(() => {
//     fetchProductById(id);
//   }, [id]);

//   const fetchProductById = async (productId) => {

//     try {
//       const response = await axios.get(`http://localhost:8086/api/products/${productId}`);
//       const productData = response.data.object;
//       setProduct(productData);
//       setImageList(productData.imageURLs || []); // Assuming images are in an array
//     } catch (error) {
//       console.error('Error fetching product:', error);
//     }
//   };

//   return (
//     <Box maxW="container.xl" mx="auto" p={6} boxShadow="lg" bg="white">
//       <Flex direction={["column", "column", "row"]} gap={8}>
//         {/* Left Section: Product Images */}
//         <Stack direction="row" spacing={4} w={["100%", "100%", "40%"]}>
//           <Box>
//             {imageList.map((image, index) => (
//               <Box
//                 key={index}
//                 border={hoveredImageIndex === index ? "2px solid blue" : "2px solid transparent"}
//                 cursor="pointer"
//                 onMouseEnter={() => setHoveredImageIndex(index)}
//               >
//                 <Image src={image} alt={`Product Image ${index + 1}`} boxSize="80px" objectFit="cover" />
//               </Box>
//             ))}
//           </Box>
//           {/* Main Product Image   */}
//           <Box maxW="500px" maxH="500px" overflow="hidden">
//             <Image
//               src={imageList[hoveredImageIndex] || product.mainImage}
//               alt="Main Product Image"
//               w="100%"
//               h="auto"
//               objectFit="cover"
//               borderRadius="md"
//             />
//           </Box>
//         </Stack>

//         {/* Right Section: Product Details */}
//         <Box flex="1" p={6} borderRadius="lg" bg="white">
//           {/* Product Title and Special Price */}
//           <Text fontSize="2xl" fontWeight="bold" mb={2}>
//             {product.name || "Product Name"}
//           </Text>

//           <Flex align="center" mb={4}>
//             <Text fontSize="2xl" fontWeight="bold" mr={4}>${product.specialPrice || product.price}</Text>
//             <Badge colorScheme="green" fontSize="lg">
//               {product.discountPercentage || "10%"} OFF
//             </Badge>
//           </Flex>

//           {/* Original Price */}
//           <Text fontSize="sm" color="gray.500" textDecoration="line-through" mb={2}>
//             ${product.price || "99.99"}
//           </Text>

//           {/* Review and Ratings */}
//           <Flex align="center" mb={4}>
//             <Stack direction="row" spacing={1} align="center">
//               {[...Array(5)].map((_, index) => (
//                 <Icon key={index} as={AiFillStar} color={index < product.rating ? "yellow.400" : "gray.400"} />
//               ))}
//               <Text color="gray.500" fontSize="sm">({product.reviewsCount || 250} Reviews)</Text>
//             </Stack>
//             <Tooltip label="View all reviews" fontSize="md">
//               <Icon as={AiOutlineQuestionCircle} color="gray.500" ml={2} cursor="pointer" />
//             </Tooltip>
//           </Flex>

//           {/* Available Offers */}
//           <Box mb={4}>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Available Offers:</Text>
//             <Stack spacing={1}>
//               <Flex align="center">
//                 <Icon as={FaTags} color="green.500" />
//                 <Text ml={2}>10% off on credit card payments</Text>
//               </Flex>
//               <Flex align="center">
//                 <Icon as={FaTags} color="green.500" />
//                 <Text ml={2}>Buy 2, Get 1 Free on select items</Text>
//               </Flex>
//             </Stack>
//           </Box>

//           <Divider mb={4} />

//           {/* Delivery Options */}
//           <Box mb={4}>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Delivery Options:</Text>
//             <Flex align="center" mb={2}>
//               <Icon as={FaTruck} color="teal.500" />
//               <Text ml={2}>Ship to</Text>
//               <Select ml={2} w="150px" value={deliveryLocation} onChange={(e) => setDeliveryLocation(e.target.value)}>
//                 <option value="New York">New York</option>
//                 <option value="Los Angeles">Los Angeles</option>
//                 <option value="Chicago">Chicago</option>
//               </Select>
//             </Flex>
//             <Text fontSize="sm">Delivered by: {product.deliveryDate || "5th Oct"}</Text>
//             <Text fontSize="sm">Cash on Delivery available</Text>
//             <Text fontSize="sm">Other Payment Options: Credit/Debit, PayPal, etc.</Text>
//           </Box>

//           <Divider mb={4} />

//            {/* Color Selection Section */}
//            <Box mb={4}>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Select Color:</Text>
//             <Stack direction="row" spacing={4}>
//               {colorOptions.map((color, index) => (
//                 <Box
//                   key={index}
//                   border= "2px solid blue"
//                   cursor="pointer"
//                   onClick={() => setSelectedColor(color)}
//                   p={1}
//                   borderRadius="md"
//                 >
//                   <Image
//                     src={`/path/to/color/swatches/${color}.png`} // Path to color swatch images or colors
//                     alt={`${color} swatch`}
//                     boxSize="50px"
//                     objectFit="cover"
//                     borderRadius="full"
//                   />
//                 </Box>
//               ))}
//             </Stack>
//           </Box>

//           <Divider mb={4} />

//           {/* Product Description and Specifications */}
//           <Box>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Product Details:</Text>
//             <Table variant="simple">
//               <Tbody>
//                 <Tr>
//                   <Td>Brand</Td>
//                   <Td>{product.brand || "Brand Name"}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Material</Td>
//                   <Td>{product.material || "Material Name"}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Dimensions</Td>
//                   <Td>{product.dimensions || "50x30x10 cm"}</Td>
//                 </Tr>
//                 <Tr>
//                   <Td>Warranty</Td>
//                   <Td>{product.warranty || "1 year"}</Td>
//                 </Tr>
//               </Tbody>
//             </Table>
//           </Box>

//           <Divider mb={4} />
//              {/* Add to Cart / Favorite */}
//              <Stack direction="row" spacing={4} mb={6}>
//             <Button leftIcon={<FaCartPlus />} colorScheme="teal" variant="solid" size="lg">Add to Cart</Button>
//             <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline" size="lg">Favorite</Button>
//           </Stack>

//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default ProductDetail;

// import React, { useState, useEffect } from 'react';
// import { Box, Flex, Text, Image, Stack, Button, Badge, Select, Icon } from '@chakra-ui/react';
// import { FaCircle, FaCartPlus, FaHeart, FaTags, FaTruck } from 'react-icons/fa';
// import { AiFillStar } from 'react-icons/ai';

// function ProductDetail() {

//   const productData = [
//     {
//       productId: 101,
//       name: "Premium T-Shirt",
//       brand: "FashionHub",
//       basePrice: 29.99,
//       description: "High-quality cotton t-shirt available in multiple colors and sizes.",
//       variants: [
//         {
//           variantId: 201,
//           color: "Red",
//           images: [
//             "https://example.com/images/tshirt-red-front.jpg",
//             "https://example.com/images/tshirt-red-back.jpg"
//           ],
//           price: 28.99,
//           discount: "5%",
//           sizes: [
//             { size: "S", stock: 10 },
//             { size: "M", stock: 5 },
//             { size: "L", stock: 2 }
//           ],
//           material: "100% Cotton",
//           rating: 4.5,
//           reviewsCount: 200,
//           offers: ["10% off on credit card payments", "Buy 2, Get 1 Free"],
//           shipping: {
//             deliveryDate: "2024-10-05",
//             shippingOptions: ["Standard Shipping", "Express Shipping"],
//             cashOnDeliveryAvailable: true
//           }
//         },
//         {
//           variantId: 202,
//           color: "Blue",
//           images: [
//             "https://example.com/images/tshirt-blue-front.jpg",
//             "https://example.com/images/tshirt-blue-back.jpg"
//           ],
//           price: 30.99,
//           discount: "3%",
//           sizes: [
//             { size: "S", stock: 8 },
//             { size: "M", stock: 3 },
//             { size: "L", stock: 0 }
//           ],
//           material: "100% Cotton",
//           rating: 4.3,
//           reviewsCount: 180,
//           offers: ["5% off on debit card payments", "Free shipping on orders above $50"],
//           shipping: {
//             deliveryDate: "2024-10-06",
//             shippingOptions: ["Standard Shipping"],
//             cashOnDeliveryAvailable: false
//           }
//         }
//       ]
//     },
//     {
//       productId: 102,
//       name: "Classic Sneakers",
//       brand: "SneakerWorld",
//       basePrice: 59.99,
//       description: "Stylish and comfortable sneakers with durable rubber soles.",
//       variants: [
//         {
//           variantId: 203,
//           color: "White",
//           images: [
//             "https://example.com/images/sneakers-white-front.jpg",
//             "https://example.com/images/sneakers-white-back.jpg"
//           ],
//           price: 54.99,
//           discount: "8%",
//           sizes: [
//             { size: 7, stock: 15 },
//             { size: 8, stock: 7 },
//             { size: 9, stock: 4 }
//           ],
//           material: "Leather",
//           rating: 4.7,
//           reviewsCount: 350,
//           offers: ["15% off on purchases above $100", "Free shipping"],
//           shipping: {
//             deliveryDate: "2024-10-07",
//             shippingOptions: ["Standard Shipping", "Express Shipping"],
//             cashOnDeliveryAvailable: true
//           }
//         },
//         {
//           variantId: 204,
//           color: "Black",
//           images: [
//             "https://example.com/images/sneakers-black-front.jpg",
//             "https://example.com/images/sneakers-black-back.jpg"
//           ],
//           price: 59.99,
//           discount: "5%",
//           sizes: [
//             { size: 7, stock: 12 },
//             { size: 8, stock: 9 },
//             { size: 9, stock: 5 }
//           ],
//           material: "Leather",
//           rating: 4.8,
//           reviewsCount: 410,
//           offers: ["10% off on credit card payments", "Free gift with purchase"],
//           shipping: {
//             deliveryDate: "2024-10-08",
//             shippingOptions: ["Standard Shipping"],
//             cashOnDeliveryAvailable: false
//           }
//         }
//       ]
//     },
//     {
//       productId: 103,
//       name: "Elegant Watch",
//       brand: "Timeless",
//       basePrice: 199.99,
//       description: "Luxury watch with a stainless steel strap and water resistance.",
//       variants: [
//         {
//           variantId: 205,
//           color: "Silver",
//           images: [
//             "https://example.com/images/watch-silver-front.jpg",
//             "https://example.com/images/watch-silver-back.jpg"
//           ],
//           price: 189.99,
//           discount: "10%",
//           sizes: [
//             { size: "Standard", stock: 3 }
//           ],
//           material: "Stainless Steel",
//           rating: 4.9,
//           reviewsCount: 120,
//           offers: ["20% off on special occasions", "Free engraving"],
//           shipping: {
//             deliveryDate: "2024-10-10",
//             shippingOptions: ["Standard Shipping", "Express Shipping"],
//             cashOnDeliveryAvailable: true
//           }
//         }
//       ]
//     },
//     {
//       productId: 104,
//       name: "Wireless Headphones",
//       brand: "SoundMax",
//       basePrice: 79.99,
//       description: "High-quality wireless headphones with noise cancellation and long battery life.",
//       variants: [
//         {
//           variantId: 206,
//           color: "Black",
//           images: [
//             "https://example.com/images/headphones-black-front.jpg",
//             "https://example.com/images/headphones-black-back.jpg"
//           ],
//           price: 74.99,
//           discount: "6%",
//           sizes: [
//             { size: "One Size", stock: 20 }
//           ],
//           material: "Plastic",
//           rating: 4.6,
//           reviewsCount: 500,
//           offers: ["Free carrying case", "10% off on PayPal payments"],
//           shipping: {
//             deliveryDate: "2024-10-12",
//             shippingOptions: ["Standard Shipping", "Next Day Delivery"],
//             cashOnDeliveryAvailable: true
//           }
//         }
//       ]
//     },
//     {
//       productId: 105,
//       name: "Leather Wallet",
//       brand: "LuxuryLeather",
//       basePrice: 49.99,
//       description: "Premium leather wallet with multiple compartments for cards and cash.",
//       variants: [
//         {
//           variantId: 207,
//           color: "Brown",
//           images: [
//             "https://example.com/images/wallet-brown-front.jpg",
//             "https://example.com/images/wallet-brown-back.jpg"
//           ],
//           price: 44.99,
//           discount: "10%",
//           sizes: [
//             { size: "One Size", stock: 25 }
//           ],
//           material: "Leather",
//           rating: 4.4,
//           reviewsCount: 80,
//           offers: ["5% off on orders above $50", "Free shipping on prepaid orders"],
//           shipping: {
//             deliveryDate: "2024-10-13",
//             shippingOptions: ["Standard Shipping"],
//             cashOnDeliveryAvailable: true
//           }
//         }
//       ]
//     },
//     {
//       productId: 106,
//       name: "Gaming Mouse",
//       brand: "ProGamer",
//       basePrice: 39.99,
//       description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
//       variants: [
//         {
//           variantId: 208,
//           color: "Black",
//           images: [
//             "https://example.com/images/mouse-black-front.jpg",
//             "https://example.com/images/mouse-black-back.jpg"
//           ],
//           price: 34.99,
//           discount: "12%",
//           sizes: [
//             { size: "One Size", stock: 100 }
//           ],
//           material: "Plastic",
//           rating: 4.7,
//           reviewsCount: 600,
//           offers: ["15% off on gaming accessories", "Extended warranty for 1 year"],
//           shipping: {
//             deliveryDate: "2024-10-15",
//             shippingOptions: ["Standard Shipping", "Express Shipping"],
//             cashOnDeliveryAvailable: false
//           }
//         }
//       ]
//     }
//   ];

//   const [selectedVariant, setSelectedVariant] = useState(productData.variants?.[0]); // Default to first variant
//   const [selectedSize, setSelectedSize] = useState(productData.variants?.[0].sizes[0].size); // Default size

//   // Handler for color change
//   const handleColorChange = (color) => {
//     const variant = productData.variants.find((variant) => variant.color === color);
//     if (variant) {
//       setSelectedVariant(variant);
//       setSelectedSize(variant.sizes[0].size); // Reset size when color changes
//     }
//   };

//   return (
//     <Box maxW="container.xl" mx="auto" p={6} boxShadow="lg" bg="white">
//       <Flex direction={["column", "column", "row"]} gap={8}>
//         {/* Left Section: Product Images */}
//         <Stack direction="row" spacing={4} w={["100%", "100%", "40%"]}>
//           <Box>
//             {selectedVariant.images.map((image, index) => (
//               <Box key={index} border="2px solid blue" cursor="pointer">
//                 <Image src={image} alt={`Product Image ${index + 1}`} boxSize="80px" objectFit="cover" />
//               </Box>
//             ))}
//           </Box>
//           {/* Main Product Image */}
//           <Box maxW="500px" maxH="500px" overflow="hidden">
//             <Image src={selectedVariant.images[0]} alt="Main Product Image" w="100%" h="auto" objectFit="cover" />
//           </Box>
//         </Stack>

//         {/* Right Section: Product Details */}
//         <Box flex="1" p={6} borderRadius="lg" bg="white">
//           {/* Product Title and Price */}
//           <Text fontSize="2xl" fontWeight="bold" mb={2}>
//             {productData.name}
//           </Text>
//           <Flex align="center" mb={4}>
//             <Text fontSize="2xl" fontWeight="bold" mr={4}>${selectedVariant.price}</Text>
//             <Badge colorScheme="green" fontSize="lg">
//               {selectedVariant.discount} OFF
//             </Badge>
//           </Flex>

//           {/* Color Options */}
//           <Text fontSize="lg" fontWeight="semibold" mb={2}>Select Color:</Text>
//           <Stack direction="row" spacing={4}>
//             {productData.variants.map((variant, index) => (
//               <Box
//                 key={index}
//                 border={selectedVariant.color === variant.color ? "2px solid blue" : "2px solid transparent"}
//                 cursor="pointer"
//                 p={1}
//                 onClick={() => handleColorChange(variant.color)}
//                 borderRadius="md"
//               >
//                 <Icon as={FaCircle} color={variant.color.toLowerCase()} boxSize={8} />
//               </Box>
//             ))}
//           </Stack>

//           {/* Size Options */}
//           <Text fontSize="lg" fontWeight="semibold" mb={2} mt={4}>Select Size:</Text>
//           <Select
//             value={selectedSize}
//             onChange={(e) => setSelectedSize(e.target.value)}
//             mb={4}
//           >
//             {selectedVariant.sizes.map((size, index) => (
//               <option key={index} value={size.size} disabled={size.stock === 0}>
//                 {size.size} {size.stock === 0 ? "(Out of stock)" : ""}
//               </option>
//             ))}
//           </Select>

//           {/* Add to Cart / Favorite */}
//           <Stack direction="row" spacing={4} mb={6}>
//             <Button leftIcon={<FaCartPlus />} colorScheme="teal" variant="solid" size="lg">
//               Add to Cart
//             </Button>
//             <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline" size="lg">
//               Favorite
//             </Button>
//           </Stack>

//           {/* Offers */}
//           <Box mb={4}>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Available Offers:</Text>
//             {selectedVariant.offers.map((offer, index) => (
//               <Text key={index}>
//                 <Icon as={FaTags} color="green.500" /> {offer}
//               </Text>
//             ))}
//           </Box>

//           {/* Shipping Options */}
//           <Box>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Delivery Options:</Text>
//             <Text>Delivered by: {selectedVariant.shipping.deliveryDate}</Text>
//             <Text>Cash on Delivery: {selectedVariant.shipping.cashOnDeliveryAvailable ? "Available" : "Not Available"}</Text>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default ProductDetail;

// import React, { useState, useEffect } from 'react';
// import { Box, Flex, Text, Image, Stack, Button, Badge, Select, Icon } from '@chakra-ui/react';
// import { FaCircle, FaCartPlus, FaHeart, FaTags } from 'react-icons/fa';
// import { useParams } from 'react-router-dom'; // Import useParams

// function ProductDetail() {

//   const { id } = useParams(); // Get productId from URL parameters

//   console.log("Product is get in ProductDetails "+id)

//   // Sample product data (unchanged)

//   // Initialize the selected product and its variants
//   const [selectedProduct, setSelectedProduct] = useState(productData[0]); // Default to the first product
//   const [selectedVariant, setSelectedVariant] = useState(selectedProduct.variants[0]); // Default to first variant
//   const [selectedSize, setSelectedSize] = useState(selectedVariant.sizes[0].size); // Default size

//   // Handler for changing the product variant by color
//   const handleColorChange = (color) => {
//     const variant = selectedProduct.variants.find((variant) => variant.color === color);
//     if (variant) {
//       setSelectedVariant(variant);
//       setSelectedSize(variant.sizes[0].size); // Reset size when color changes
//     }
//   };

//   if (!selectedVariant) {
//     return <Text>No variant available</Text>; // Handle cases where selectedVariant is undefined
//   }

//   return (
//     <Box maxW="container.xl" mx="auto" p={6} boxShadow="lg" bg="white">
//       <Flex direction={["column", "column", "row"]} gap={8}>
//         {/* Left Section: Product Images */}
//         <Stack direction="row" spacing={4} w={["100%", "100%", "40%"]}>
//           <Box>
//             {selectedVariant.images.map((image, index) => (
//               <Box key={index} border="2px solid blue" cursor="pointer">
//                 <Image src={image} alt={`Product Image ${index + 1}`} boxSize="80px" objectFit="cover" />
//               </Box>
//             ))}
//           </Box>
//           {/* Main Product Image */}
//           <Box maxW="500px" maxH="500px" overflow="hidden">
//             <Image src={selectedVariant.images[0]} alt="Main Product Image" w="100%" h="auto" objectFit="cover" />
//           </Box>
//         </Stack>

//         {/* Right Section: Product Details */}
//         <Box flex="1" p={6} borderRadius="lg" bg="white">
//           <Text fontSize="2xl" fontWeight="bold" mb={2}>
//             {selectedProduct.name}
//           </Text>
//           <Flex align="center" mb={4}>
//             <Text fontSize="2xl" fontWeight="bold" mr={4}>${selectedVariant.price}</Text>
//             <Badge colorScheme="green" fontSize="lg">
//               {selectedVariant.discount} OFF
//             </Badge>
//           </Flex>

//           {/* Color Options */}
//           <Text fontSize="lg" fontWeight="semibold" mb={2}>Select Color:</Text>
//           <Stack direction="row" spacing={4}>
//             {selectedProduct.variants.map((variant, index) => (
//               <Box
//                 key={index}
//                 border={selectedVariant.color === variant.color ? "2px solid blue" : "2px solid transparent"}
//                 cursor="pointer"
//                 p={1}
//                 onClick={() => handleColorChange(variant.color)}
//                 borderRadius="md"
//               >
//                 <Icon as={FaCircle} color={variant.color.toLowerCase()} boxSize={8} />
//               </Box>
//             ))}
//           </Stack>

//           {/* Size Options */}
//           <Text fontSize="lg" fontWeight="semibold" mb={2} mt={4}>Select Size:</Text>
//           <Select
//             value={selectedSize}
//             onChange={(e) => setSelectedSize(e.target.value)}
//             mb={4}
//           >
//             {selectedVariant.sizes.map((size, index) => (
//               <option key={index} value={size.size} disabled={size.stock === 0}>
//                 {size.size} {size.stock === 0 ? "(Out of stock)" : ""}
//               </option>
//             ))}
//           </Select>

//           {/* Add to Cart / Favorite */}
//           <Stack direction="row" spacing={4} mb={6}>
//             <Button leftIcon={<FaCartPlus />} colorScheme="teal" variant="solid" size="lg">
//               Add to Cart
//             </Button>
//             <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline" size="lg">
//               Favorite
//             </Button>
//           </Stack>

//           {/* Offers */}
//           <Box mb={4}>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Available Offers:</Text>
//             {selectedVariant.offers.map((offer, index) => (
//               <Text key={index}>
//                 <Icon as={FaTags} color="green.500" /> {offer}
//               </Text>
//             ))}
//           </Box>

//           {/* Shipping Options */}
//           <Box>
//             <Text fontSize="lg" fontWeight="semibold" mb={2}>Delivery Options:</Text>
//             <Text>Delivered by: {selectedVariant.shipping.deliveryDate}</Text>
//             <Text>Cash on Delivery: {selectedVariant.shipping.cashOnDeliveryAvailable ? "Available" : "Not Available"}</Text>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default ProductDetail;

import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Button,
  Badge,
  Select,
  Icon,
  Tooltip,
  Divider,
  HStack,
  VStack,
  Alert,
  AlertIcon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons"; // Import the icons
import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";

import { FaCircle, FaCartPlus, FaHeart, FaTags } from "react-icons/fa";
import { FaMoneyBillWave, FaExchangeAlt, FaTruck } from "react-icons/fa";
import { useParams } from "react-router-dom"; // Import useParams
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
  AiOutlineQuestionCircle,
} from "react-icons/ai"; // Import necessary icons
import { useWishlist } from './WishlistContext'; // Adjust the import path


function ProductDetail() {
  const { id } = useParams(); // Get productId from URL parameters

  // Sample product data
  const productData = [
    {
      productId: 101,
      name: "Premium T-Shirt",
      brand: "FashionHub",
      basePrice: 29.99,
      description:
        "High-quality cotton t-shirt available in multiple colors and sizes.",
      variants: [
        {
          variantId: 201,
          color: "Red",
          images: [
            "https://m.media-amazon.com/images/I/51NSfroIvbL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51VeNtWUQ7L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61I9HHwrLsL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51lhKHkB2SL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51889N5ZeQL._SX679_.jpg",
          ],
          price: 28.99,
          discount: "5%",
          sizes: [
            { size: "S", stock: 10 },
            { size: "M", stock: 5 },
            { size: "L", stock: 2 },
            { size: "XL", stock: 2 },
            { size: "XXL", stock: 0 },
          ],
          material: "100% Cotton",
          rating: 4.3,
          reviewsCount: 200,
          offers: ["10% off on credit card payments", "Buy 2, Get 1 Free"],
          shipping: {
            deliveryDate: "2024-10-05",
            shippingOptions: ["Standard Shipping", "Express Shipping"],
            cashOnDeliveryAvailable: true,
          },
        },
        {
          variantId: 202,
          color: "Blue",
          images: [
            "https://m.media-amazon.com/images/I/61KJid7dU+L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61GtR905H+L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/6105hkxw5GL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51Emo71mlDL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61zMzjn1+dL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/611WbkVgVEL._SX679_.jpg",
          ],
          price: 30.99,
          discount: "3%",
          sizes: [
            { size: "S", stock: 8 },
            { size: "M", stock: 3 },
            { size: "L", stock: 0 },
          ],
          material: "100% Cotton",
          rating: 3,
          reviewsCount: 180,
          offers: [
            "5% off on debit card payments",
            "Free shipping on orders above $50",
          ],
          shipping: {
            deliveryDate: "2024-10-06",
            shippingOptions: ["Standard Shipping"],
            cashOnDeliveryAvailable: false,
          },
        },
        {
          variantId: 203,
          color: "pink",
          images: [
            "https://m.media-amazon.com/images/I/618Wek95laS._SY879_.jpg",
            "https://m.media-amazon.com/images/I/61hq+LfAdOS._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51V2gEYvc8S._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51PRAkh5OtS._SY741_.jpg",
            "https://m.media-amazon.com/images/I/71ZKcnsNHRS._SY741_.jpg",
            "https://m.media-amazon.com/images/I/81rOnPwPDoL._SY741_.jpg",
          ],
          price: 45,
          discount: "5%",
          sizes: [
            { size: "S", stock: 0 },
            { size: "M", stock: 0 },
            { size: "L", stock: 0 },
          ],
          material: "100% Cotton",
          rating: 2.7,
          reviewsCount: 791,
          offers: [
            "5% off on debit card payments",
            "Free shipping on orders above $50",
          ],
          shipping: {
            deliveryDate: "2025-06-06",
            shippingOptions: ["Standard Shipping"],
            cashOnDeliveryAvailable: true,
          },
        },
      ],
    },
    {
      productId: 102,
      name: "Classic Sneakers",
      brand: "SneakerWorld",
      basePrice: 59.99,
      description:
        "Stylish and comfortable sneakers with durable rubber soles.",
      variants: [
        {
          variantId: 203,
          color: "White",
          images: [
            "https://example.com/images/sneakers-white-front.jpg",
            "https://example.com/images/sneakers-white-back.jpg",
          ],
          price: 54.99,
          discount: "8%",
          sizes: [
            { size: 7, stock: 15 },
            { size: 8, stock: 7 },
            { size: 9, stock: 4 },
          ],
          material: "Leather",
          rating: 4.7,
          reviewsCount: 350,
          offers: ["15% off on purchases above $100", "Free shipping"],
          shipping: {
            deliveryDate: "2024-10-07",
            shippingOptions: ["Standard Shipping", "Express Shipping"],
            cashOnDeliveryAvailable: true,
          },
        },
        {
          variantId: 204,
          color: "Black",
          images: [
            "https://example.com/images/sneakers-black-front.jpg",
            "https://example.com/images/sneakers-black-back.jpg",
          ],
          price: 59.99,
          discount: "5%",
          sizes: [
            { size: 7, stock: 12 },
            { size: 8, stock: 9 },
            { size: 9, stock: 5 },
          ],
          material: "Leather",
          rating: 4.8,
          reviewsCount: 410,
          offers: [
            "10% off on credit card payments",
            "Free gift with purchase",
          ],
          shipping: {
            deliveryDate: "2024-10-08",
            shippingOptions: ["Standard Shipping"],
            cashOnDeliveryAvailable: false,
          },
        },
      ],
    },
    {
      productId: 103,
      name: "Elegant Watch",
      brand: "Timeless",
      basePrice: 199.99,
      description:
        "Luxury watch with a stainless steel strap and water resistance.",
      variants: [
        {
          variantId: 205,
          color: "Silver",
          images: [
            "https://example.com/images/watch-silver-front.jpg",
            "https://example.com/images/watch-silver-back.jpg",
          ],
          price: 189.99,
          discount: "10%",
          sizes: [{ size: "Standard", stock: 3 }],
          material: "Stainless Steel",
          rating: 4.9,
          reviewsCount: 120,
          offers: ["20% off on special occasions", "Free engraving"],
          shipping: {
            deliveryDate: "2024-10-10",
            shippingOptions: ["Standard Shipping", "Express Shipping"],
            cashOnDeliveryAvailable: true,
          },
        },
      ],
    },
    {
      productId: 104,
      name: "Wireless Headphones",
      brand: "SoundMax",
      basePrice: 79.99,
      description:
        "High-quality wireless headphones with noise cancellation and long battery life.",
      variants: [
        {
          variantId: 206,
          color: "Black",
          images: [
            "https://example.com/images/headphones-black-front.jpg",
            "https://example.com/images/headphones-black-back.jpg",
          ],
          price: 74.99,
          discount: "6%",
          sizes: [{ size: "One Size", stock: 20 }],
          material: "Plastic",
          rating: 4.6,
          reviewsCount: 500,
          offers: ["Free carrying case", "10% off on PayPal payments"],
          shipping: {
            deliveryDate: "2024-10-12",
            shippingOptions: ["Standard Shipping", "Next Day Delivery"],
            cashOnDeliveryAvailable: true,
          },
        },
      ],
    },
    {
      productId: 105,
      name: "Leather Wallet",
      brand: "LuxuryLeather",
      basePrice: 49.99,
      description:
        "Premium leather wallet with multiple compartments for cards and cash.",
      variants: [
        {
          variantId: 207,
          color: "Brown",
          images: [
            "https://example.com/images/wallet-brown-front.jpg",
            "https://example.com/images/wallet-brown-back.jpg",
          ],
          price: 44.99,
          discount: "10%",
          sizes: [{ size: "One Size", stock: 25 }],
          material: "Leather",
          rating: 4.4,
          reviewsCount: 80,
          offers: [
            "5% off on orders above $50",
            "Free shipping on prepaid orders",
          ],
          shipping: {
            deliveryDate: "2024-10-13",
            shippingOptions: ["Standard Shipping"],
            cashOnDeliveryAvailable: true,
          },
        },
      ],
    },
    {
      productId: 106,
      name: "Gaming Mouse",
      brand: "ProGamer",
      basePrice: 39.99,
      description:
        "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
      variants: [
        {
          variantId: 208,
          color: "Black",
          images: [
            "https://example.com/images/mouse-black-front.jpg",
            "https://example.com/images/mouse-black-back.jpg",
          ],
          price: 34.99,
          discount: "12%",
          sizes: [{ size: "One Size", stock: 100 }],
          material: "Plastic",
          rating: 4.7,
          reviewsCount: 600,
          offers: [
            "15% off on gaming accessories",
            "Extended warranty for 1 year",
          ],
          shipping: {
            deliveryDate: "2024-10-15",
            shippingOptions: ["Standard Shipping", "Express Shipping"],
            cashOnDeliveryAvailable: false,
          },
        },
      ],
    },
  ];

  // Initialize state for selected product and variant
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const [pincode, setPincode] = useState("");
  const [availabilityDeliveryMessage, setAvailabilityDeliveryMessage] =
    useState("");
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState("");
  const { addToWishlist,removeFromWishlist,wishlistItems,isInWishlist } = useWishlist();


console.log("wishlist items"+wishlistItems)
  useEffect(() => {
    // Find the product based on the productId from URL
    const product = productData.find(
      (product) => product.productId === parseInt(id)
    );

    if (product) {
      setSelectedProduct(product);
      setCurrentImage(product.variants[0].images[0]);
      setSelectedVariant(product.variants[0]); // Set default variant
      setSelectedSize(product.variants[0].sizes[0].size); // Set default size
    }
    console.log("selevcted varient in useeffect..."+selectedVariant)


  }, [id]); // Rerun effect when id or productData changes


  // console.log("wishlist items"+wishlistItems)
  // useEffect(() => {
  //   // Find the product based on the productId from URL
  //   const product = productData.find(
  //     (product) => product.productId === parseInt(id)
  //   );

  //   if (product) {
  //     setSelectedProduct(product);
  //     setCurrentImage(product.variants[0].images[0]);
  //     setSelectedVariant(product.variants[0]); // Set default variant
  //     setSelectedSize(product.variants[0].sizes[0].size); // Set default size
  //   }
  //   console.log("selevcted varient in useeffect..."+selectedVariant)


  // }, []);
  // console.log("selevcted varient in global..."+selectedVariant)



  // Handler for changing the product variant by color
  const handleColorChange = (color) => {
    const variant = selectedProduct.variants.find(
      (variant) => variant.color === color
    );
    if (variant) {
      setCurrentImage(variant.images[0]);

      setSelectedVariant(variant);
      setSelectedSize(variant.sizes[0].size); // Reset size when color changes
    }

   
    console.log("selevcted varient in handleColorChange..."+selectedVariant)

  };






  // Function to check pincode availability
  const checkAvailability = () => {
    if (pincode === "123456") {
      setIsDeliveryAvailable(true);
      setAvailabilityDeliveryMessage(
        "Product is available for delivery in your area."
      );
    } else {
      setIsDeliveryAvailable(false);
      setAvailabilityDeliveryMessage(
        "Sorry, delivery is not available in this area."
      );
    }
  };


  // Function to toggle favorite status
  // const toggleFavorite = () => {
  //   console.log("selevcted varient in toggle..."+selectedProduct.productId)

  //   if (isInWishlist(selectedProduct.productId)) {
  //     removeFromWishlist(selectedProduct.productId); // Remove from wishlist if it's already a favorite
  //   } else {
  //     addToWishlist(selectedProduct); // Add to wishlist if it's not a favorite
  //   }
  // };

  const toggleFavorite = () => {
    console.log("Selected Product ID:", selectedProduct.productId);
    console.log("Selected Variant ID:", selectedVariant?.variantId); // Ensure this is the correct ID
    console.log("Selected Variant:", selectedVariant); // Log the entire selectedVariant object

  
    // Generate a unique identifier based on productId and variantId (or variant properties)
    // const wishlistIdentifier = createUniqueIdentifier(selectedProduct.productId, selectedVariant.id);
  
    // Check if the current product variant combination is in the wishlist
    if (isInWishlist(selectedProduct.productId, selectedVariant.variantId)) {
      console.log("Removing from wishlist");
      removeFromWishlist(selectedProduct.productId, selectedVariant.variantId);
    } else {
      // Add to wishlist if it's not already added

      console.log("Adding to wishlist");

      const wishlistItem = {
        ...selectedProduct,
        // productId: selectedProduct.productId,
        // name: selectedProduct.name,
        // brand: selectedProduct.brand,
        // basePrice: selectedProduct.basePrice,
        // description: selectedProduct.description,
        ...selectedVariant,  // Include the current variant in the wishlist item
        selectedSize,     // Include the selected size
           // Store the unique identifier for easy lookup
      };
      addToWishlist(wishlistItem);

      console.log("Current wishlist items:", wishlistItems);

    }
  };
  







  if (!selectedProduct || !selectedVariant) {
    return <Text>Loading...</Text>; // Show loading state while data is being fetched
  }

  return (
    <Box maxW="container.xl" mx="auto" p={6} boxShadow="" bg="white">
      <Flex direction={["column", "column", "row"]} gap={8}>
        {/* Left Section: Product Images */}
        <Stack direction="row" spacing={4} w={["100%", "100%", "40%"]}>
          <Box>
            {selectedVariant.images.map((image, index) => (
              <Box
                key={index}
                border=""
                cursor="pointer"
                onMouseEnter={() => setCurrentImage(image)}
              >
                <Image
                  src={image}
                  alt={`Product Image ${index + 1} ${image}`}
                  boxSize="80px"
                  objectFit="contain"
                />
              </Box>
            ))}
          </Box>
          {/* Main Product Image */}
          <Box maxW="500px" maxH="500px" overflow="hidden">
            {/* Custom Tag */}
            <Box
              position="absolute"
              bg="pink.500"
              color="white"
              px={4}
              py={2}
              fontWeight="bold"
              borderRadius="0 10px 10px 0"
              clipPath="polygon(0 0, 100% 0, 85% 100%, 0% 100%)" // Tag shape
            >
              {selectedVariant.discount} OFF
            </Box>

            <Image
              src={currentImage}
              alt={selectedVariant.images[0]}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Stack>

        {/* Right Section: Product Details */}
        <Box
          flex="1" // This allows it to take the remaining space
          // maxH="500px" // Set a maximum height to create the scrollable area
          overflowY="auto" // Enable vertical scrolling
          p={4} // Optional padding p={6} borderRadius="lg" bg="white"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            {selectedProduct.name}
          </Text>

          {/* Review and Ratings */}
          <Flex align="center" mb={4}>
            <Stack direction="row" spacing={1} align="center">
              {[...Array(5)].map((_, index) => {
                if (index < Math.floor(selectedVariant.rating)) {
                  return <AiFillStar key={index} color="#ECC94B" />;
                } else if (
                  index < selectedVariant.rating &&
                  index < Math.ceil(selectedVariant.rating)
                ) {
                  return <AiTwotoneStar key={index} color="#ECC94B" />;
                } else {
                  return <AiOutlineStar key={index} />;
                }
              })}
              <Text color="gray.500" fontSize="sm">
                ({selectedVariant.reviewsCount || 0} Reviews){" "}
                {/* Display reviews count */}
              </Text>
            </Stack>
            <Tooltip label="View all reviews" fontSize="md" mx={4}>
              <Icon
                as={AiOutlineQuestionCircle}
                color="gray.500"
                ml={2}
                cursor="pointer"
              />
            </Tooltip>

            <Text
              color={
                (selectedVariant?.sizes || []).some((size) => size.stock > 0)
                  ? "green.500"
                  : "red.500"
              }
              mx={4}
            >
              {(selectedVariant?.sizes || []).some((size) => size.stock > 0)
                ? "In Stock"
                : "Out of Stock"}
            </Text>
          </Flex>

          {/* price section */}
          <Text mb={4}>{selectedProduct.description}</Text>
          <Flex align="center">
            <Text fontSize="2xl" fontWeight="" color="pink.500" mr={4}>
              -{selectedVariant.discount} Off
            </Text>
            <Text fontSize="2xl" fontWeight="bold" mr={4}>
              ${selectedVariant.price}
            </Text>

            {selectedVariant.shipping.cashOnDeliveryAvailable && (
              <Badge
                fontFamily="sans-serif"
                borderRadius="xl"
                colorScheme="green"
                my={2}
              >
                Cash on Delivery Available
              </Badge>
            )}
          </Flex>
          <Text fontSize="sm" fontWeight="" display="inline">
            MRP{" "}
            <Text as="span" textDecoration="line-through" mx={1}>
              {" "}
              ${selectedProduct.basePrice}{" "}
            </Text>
            Inclusive of all taxes
          </Text>
          <Divider mb={4} borderColor="gray.700" />

          {/* ******************************************************************************* */}
          {/* Size Options */}
          <Text fontSize="lg" fontWeight="semibold" mb={2} mt={4}>
            Select Size:
          </Text>

          <Stack direction="row" spacing={4}>
            {selectedVariant.sizes.map((size, index) => (
              <Button
                key={index}
                variant={selectedSize === size.size ? "solid" : "outline"}
                colorScheme="pink"
                // isDisabled={size.stock === 0}
                opacity={size.stock === 0 ? 0.5 : 1} // Fade effect for unavailable sizes
                // leftIcon={size.stock > 0 ? <CheckIcon /> : <CloseIcon />}
                onClick={() => setSelectedSize(size.size)}
                width="20px" // Optional: set a fixed width for consistency
              >
                {size.size}
              </Button>
            ))}
          </Stack>

          {/* Color Options */}
          <Flex align="center" mb={2} mt={6}>
            <Text fontSize="lg" fontWeight="semibold" mr={2}>
              Select Color:
            </Text>
            <Text fontSize="sm" fontWeight="" color="black">
              {selectedVariant.color}
            </Text>
          </Flex>
          <Stack direction="row" spacing={4}>
            {selectedProduct.variants.map((variant, index) => (
              <Box
                key={index}
                border={
                  selectedVariant.color === variant.color
                    ? "2px solid teal"
                    : "2px solid lightgrey"
                } // Change border color based on selection
                cursor="pointer"
                p={1}
                onClick={() => handleColorChange(variant.color)}
                borderRadius="md"
                position="relative" // To position the image correctly
              >
                <Image
                  src={variant.images} // Use the corresponding image for the variant
                  alt={variant.color} // Alt text for accessibility
                  boxSize={8} // Set the size of the image
                  objectFit="cover" // Ensure the image covers the box
                  borderRadius="md" // Optional: to match the circular shape
                />
              </Box>
            ))}
          </Stack>

          {/* Add to Cart / Favorite */}
          <Stack direction="row" spacing={8} mb={6} mt={6}>
            <Button
              leftIcon={<FaCartPlus />}
              colorScheme="teal"
              variant="solid"
              size="lg"
              isDisabled={selectedVariant.sizes.every(
                (size) => size.stock === 0
              )}
              width="350px" //
            >
              Add to Cart
            </Button>
            <Button
              leftIcon={<FaHeart />}
              colorScheme={isInWishlist(selectedProduct.productId, selectedVariant.variantId) ? "pink" : "gray"}
              variant="outline"
              size="lg"
              width="250px" //
              onClick={toggleFavorite} // Integrated logic here

            >
              Favorite
            </Button>
          </Stack>
          <Divider mb={4} borderColor="gray.700" />

          {/* ********************************************************/}

          <VStack align="flex-start" spacing={4} maxW="600px" my={5}>
            {/* Delivery Location Heading */}
            <Text fontSize="xl" fontWeight="semibold">
              Select Delivery Location
            </Text>
            <InputGroup w="300px">
              <Input
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                bg="gray.100"
                borderRadius=""
                border="none"
                variant="unstyled"
                h="40px" // Set consistent height for input
                _hover={{ borderBottom: "2px solid #d53f8c" }} // Underline on hover
                _focus={{ borderBottom: "2px solid #d53f8c", bg: "blue.100" }} // Underline on focus
                transition="all 0.2s ease-in-out" // Smooth transition effect
                pr="4.5rem" // Space for the Apply text
              />
              <InputRightElement width="4.5rem">
                <Text
                  color="pink.500"
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={checkAvailability}
                >
                  Apply
                </Text>
              </InputRightElement>
            </InputGroup>
            <Text
              fontSize="sm"
              color={isDeliveryAvailable ? "green.500" : "red.500"}
            >
              {availabilityDeliveryMessage}
            </Text>
          </VStack>

          {/* Delivery-section-card  */}
          <Stack
            direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
            spacing={4} // Reduce spacing between cards
            mt={4}
            wrap="wrap"
            justify="flex-start"
            align="center"
          >
            {/* Card 1: Cash on Delivery */}
            <Box
              borderWidth="1px"
              borderRadius="md"
              p={2} // Reduce padding
              width={{ base: "100%", md: "150px" }} // Decrease width to 150px on larger screens
              boxShadow="sm" // Use a smaller box shadow
              _hover={{ boxShadow: "md", borderColor: "teal.500" }} // Hover effect
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Icon as={FaMoneyBillWave} boxSize={5} color="green.500" mb={1} />{" "}
              {/* Smaller icon size */}
              <Text fontSize="sm" fontWeight="bold">
                Cash on Delivery
              </Text>
              <Text mt={1} fontSize="xs" color="gray.600">
                COD available
              </Text>
              <Text mt={1} fontSize="xs" color="blue.500" cursor="pointer">
                Know More
              </Text>
            </Box>

            {/* Card 2: 7-day Return & Size Exchange */}
            <Box
              borderWidth="1px"
              borderRadius="md"
              p={2}
              width={{ base: "100%", md: "150px" }}
              boxShadow="sm"
              _hover={{ boxShadow: "md", borderColor: "teal.500" }}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Icon as={FaExchangeAlt} boxSize={5} color="orange.400" mb={1} />
              <Text fontSize="sm" fontWeight="bold">
                7-day Return & Exchange
              </Text>
              <Text mt={1} fontSize="xs" color="gray.600">
                Free size exchange
              </Text>
              <Text mt={1} fontSize="xs" color="blue.500" cursor="pointer">
                Know More
              </Text>
            </Box>

            {/* Card 3: Delivery by 2 Oct */}
            <Box
              borderWidth="1px"
              borderRadius="md"
              p={2}
              width={{ base: "100%", md: "150px" }}
              boxShadow="sm"
              _hover={{ boxShadow: "md", borderColor: "teal.500" }}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Icon as={FaTruck} boxSize={5} color="blue.500" mb={1} />
              <Text fontSize="sm" fontWeight="bold">
                Delivery by 2 Oct
              </Text>
              <Text mt={1} fontSize="xs" color="gray.600">
                Estimated delivery
              </Text>
              <Text mt={1} fontSize="xs" color="blue.500" cursor="pointer">
                Know More
              </Text>
            </Box>
          </Stack>

          {/* ************************************************************************************************************ */}
          {/* Offers */}
          <Box my={4}>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Available Offers:
            </Text>
            {selectedVariant.offers.map((offer, index) => (
              <Text key={index}>
                <Icon as={FaTags} color="pink.500" /> {offer}
              </Text>
            ))}
            {selectedVariant.shipping.cashOnDeliveryAvailable && (
              <Text>
                <Icon as={FaTags} color="pink.500" /> Cash on Delivery Available
              </Text>
            )}
          </Box>

          {/* Shipping Information */}
          <Box my={4}>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Shipping Information:
            </Text>
            <Text mb={2}>
              Delivery By: {selectedVariant.shipping.deliveryDate}
            </Text>
            <Text mb={4}>
              Shipping Options:{" "}
              {selectedVariant.shipping.shippingOptions.join(", ")}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductDetail;
