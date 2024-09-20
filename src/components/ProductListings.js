

import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Stack, Flex } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import Sorting from './Sorting';
import axios from 'axios';


const ProductListings = () => {
  const [displayMode, setDisplayMode] = useState('grid'); // or 'list'
  const [sortedProducts, setSortedProducts] = useState([]);

  const sampleProducts = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 1',
      price: '29.99',
      ratings: '4.5',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 2',
      price: '19.99',
      ratings: '4.0',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 3',
      price: '39.99',
      ratings: '4.8',
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 4',
      price: '24.99',
      ratings: '4.3',
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 4',
      price: '24.99',
      ratings: '4.3',
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 4',
      price: '24.99',
      ratings: '4.3',
    },
    {
      id: 7,
      imageUrl: 'https://via.placeholder.com/200',
      title: 'Product 4',
      price: '24.99',
      ratings: '4.3',
    },
  ];

  // useEffect(() => {
  //   // Logic to sort products
  //   console.log("In Useeffect of ProductListing")
  //   setSortedProducts(sampleProducts); // Add sorting logic if needed
  // }, []);



useEffect(() => {
  // Fetch products from your Spring Boot backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8086/api/products'); // Adjust the endpoint based on your API
      let productsObjArr= response.data.object;
            console.log("All productsssssssssss"+productsObjArr);
      for(let i=0;i<productsObjArr.length;i++){
        console.log(productsObjArr[i]);
      }
      const imageURL = response.data.object.map(product => product.imageURLs);
      console.log(imageURL);
        
      const products = response.data.object.map(product => product);
      console.log("All Products here..........."+products);

      // const { message, data , hasError } = response.data;
      // console.log("In Useeffect of ProductListing messsgae..."+message)
      // console.log("In Useeffect of ProductListing  data..."+data)
      // console.log("In Useeffect of ProductListing hasError..."+hasError)
      setSortedProducts(Array.isArray(products) ? products : []);

    } catch (error) {
      
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();
}, []);


  return (
    <Flex  bg='' direction={{ base: 'column', lg: 'row' }} p={4} spacing={4}>
      <Box  flex={{ base: 'none', lg: '1' }} mb={{ base: 4, lg: 0 }}>
        <Filters />
        <Sorting />
      </Box>
      <Box flex="3">
        <Box mt={0} ml={2}>
          {displayMode === 'grid' ? (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}  spacing={4}>
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          ) : (
            <Stack spacing={4}>
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductListings;
