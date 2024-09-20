import React from "react";

import { Box, Image, Text, Stack } from "@chakra-ui/react";
const ProductCarousel1 = () => {


    const sampleProducts = [
        {
          id: 1,
          image: 'https://via.placeholder.com/200',
          name: 'Product 1',
          price: '29.99',
          ratings: '4.5',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/200',
          name: 'Product 2',
          price: '19.99',
          ratings: '4.0',
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/200',
          name: 'Product 3',
          price: '39.99',
          ratings: '4.8',
        },
        {
          id: 4,
          image: 'https://via.placeholder.com/200',
          name: 'Product 4',
          price: '24.99',
          ratings: '4.3',
        },
        {
          id: 5,
          image: 'https://via.placeholder.com/200',
          name: 'Product 4',
          price: '24.99',
          ratings: '4.3',
        },
        {
          id: 6,
          image: 'https://via.placeholder.com/200',
          name: 'Product 4',
          price: '24.99',
          ratings: '4.3',
        },
        {
          id: 7,
          image: 'https://via.placeholder.com/200',
          name: 'Product 4',
          price: '24.99',
          ratings: '4.3',
        },
      ];

      const products = [
        { id: 1, image: 'https://www.gonoise.com/cdn/shop/files/1_a5b3bc51-8a02-44ba-9ca4-383470c4c017.png?v=1711280604', title: 'Product 1', price: '$25' },
        { id: 2, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3CHMJKBA1ToiJusoM3CnlyE1n4iag9AbsnSyyoL94k72baHjY5ci1hLcTPyK6mxc6MKdflSmriteq50wZoo9dcc1HTlMFnmy7ihcGiBf2', title: 'Product 2', price: '$30' },
        { id: 3, image: 'https://www.pandit.com/cdn/shop/files/amethyst_lucky_bracelet_main_product_image_204.jpg?v=1719557278&width=990', title: 'Product 3', price: '$45' },
        { id: 4, image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg', title: 'Product 4', price: '$60' },
    
        
        { id: 5, image: 'https://keetaluxury.com/cdn/shop/files/cushion-conquer-garnet-ring-us-4-rings-695.png?v=1688556867&width=1000', title: 'Product 1', price: '$25' },
        { id: 6, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3CHMJKBA1ToiJusoM3CnlyE1n4iag9AbsnSyyoL94k72baHjY5ci1hLcTPyK6mxc6MKdflSmriteq50wZoo9dcc1HTlMFnmy7ihcGiBf2', title: 'Product 2', price: '$30' },
        { id: 8, image: 'https://goeye.in/cdn/shop/files/VG9003MG5421-7_720x.jpg?v=1712816471', title: 'Product 4', price: '$60' },
        
      ];
  return (
    <Stack direction="row" spacing={4} p={8} overflowX="auto">
      {" "}
      {products.map((product) => (
        <Box key={product.id} w="200px" boxShadow="md" p={4}>
          <Image src={product.image} alt={product.name} />
          <Text mt={2} fontWeight="bold">
            {product.name}
          </Text>
          <Text color="gray.500">{product.price}</Text>
        </Box>
      ))}
    </Stack>
  );
};
export default ProductCarousel1;
