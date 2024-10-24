// ProductCard1.js
import React from 'react'; // Keep only one of these

  
// ***************************USeTHIS final Component from uses backend Api*******************************************
// import React, { useState, useEffect } from 'react';
// import { Box, SimpleGrid, Stack, Flex } from '@chakra-ui/react';
// import ProductCard from './ProductCard';
// import Filters from './Filters';
// import Sorting from './Sorting';
// import axios from 'axios';


// const ProductListings = () => {
//   const [displayMode, setDisplayMode] = useState('grid'); // or 'list'
//   const [sortedProducts, setSortedProducts] = useState([]);
// useEffect(() => {
//   // Fetch products from your Spring Boot backend
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8086/api/products'); // Adjust the endpoint based on your API
//       let productsObjArr= response.data.object;
//             console.log("All productsssssssssss"+productsObjArr);
//       for(let i=0;i<productsObjArr.length;i++){
//         console.log(productsObjArr[i]);
//       }
//       const imageURL = response.data.object.map(product => product.imageURLs);
//       console.log(imageURL);
        
//       const products = response.data.object.map(product => product);
//       console.log("All Products here..........."+products);

//       // const { message, data , hasError } = response.data;
//       // console.log("In Useeffect of ProductListing messsgae..."+message)
//       // console.log("In Useeffect of ProductListing  data..."+data)
//       // console.log("In Useeffect of ProductListing hasError..."+hasError)
//       setSortedProducts(Array.isArray(products) ? products : []);

//     } catch (error) {
      
//       console.error('Error fetching products:', error);
//     }
//   };

//   fetchProducts();
// }, []);


//   return (
//     <Flex  bg='' direction={{ base: 'column', lg: 'row' }} p={4} spacing={4}>
//       <Box  flex={{ base: 'none', lg: '1' }} mb={{ base: 4, lg: 0 }}>
//         <Filters />
//         <Sorting />
//       </Box>
//       <Box flex="3">
//         <Box mt={0} ml={2}>
//           {displayMode === 'grid' ? (
//             <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}  spacing={4}>
//               {sortedProducts.map(product => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </SimpleGrid>
//           ) : (
//             <Stack spacing={4}>
//               {sortedProducts.map(product => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </Stack>
//           )}
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default ProductListings;


// *******************************************Use this component that provide mock json*********************************************************************
import { useState, useEffect } from 'react';
import { Box, SimpleGrid, Stack, Flex } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import Filters from '../Filters';
import Sorting from '../Sorting';
import axios from 'axios';
import { useWishlist } from './WishlistContext'; // Adjust the import path

 // Sample product data
//  const productDataList = [
//   {
//     productId: 101,
//     name: "Premium T-Shirt",
//     brand: "FashionHub",
//     basePrice: 29.99,
//     description:
//       "High-quality cotton t-shirt available in multiple colors and sizes.",
//     variants: [
//       {
//         variantId: 201,
//         color: "Red",
//         images: [
//           "https://m.media-amazon.com/images/I/51NSfroIvbL._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/51VeNtWUQ7L._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/61I9HHwrLsL._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/51lhKHkB2SL._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/51889N5ZeQL._SX679_.jpg",
//         ],
//         price: 28.99,
//         discount: "5%",
//         sizes: [
//           { size: "S", stock: 10 },
//           { size: "M", stock: 5 },
//           { size: "L", stock: 2 },
//         ],
//         material: "100% Cotton",
//         rating: 4.3,
//         reviewsCount: 200,
//         offers: ["10% off on credit card payments", "Buy 2, Get 1 Free"],
//         shipping: {
//           deliveryDate: "2024-10-05",
//           shippingOptions: ["Standard Shipping", "Express Shipping"],
//           cashOnDeliveryAvailable: true,
//         },
//       },
//       {
//         variantId: 202,
//         color: "Blue",
//         images: [
//           "https://m.media-amazon.com/images/I/61KJid7dU+L._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/61GtR905H+L._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/6105hkxw5GL._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/51Emo71mlDL._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/61zMzjn1+dL._SX679_.jpg",
//           "https://m.media-amazon.com/images/I/611WbkVgVEL._SX679_.jpg",
//         ],
//         price: 30.99,
//         discount: "3%",
//         sizes: [
//           { size: "S", stock: 8 },
//           { size: "M", stock: 3 },
//           { size: "L", stock: 0 },
//         ],
//         material: "100% Cotton",
//         rating: 3,
//         reviewsCount: 180,
//         offers: [
//           "5% off on debit card payments",
//           "Free shipping on orders above $50",
//         ],
//         shipping: {
//           deliveryDate: "2024-10-06",
//           shippingOptions: ["Standard Shipping"],
//           cashOnDeliveryAvailable: false,
//         },
//       },
//     ],
//   },
//   {
//     productId: 102,
//     name: "Classic Sneakers",
//     brand: "SneakerWorld",
//     basePrice: 59.99,
//     description:
//       "Stylish and comfortable sneakers with durable rubber soles.",
//     variants: [
//       {
//         variantId: 203,
//         color: "White",
//         images: [
//           "https://example.com/images/sneakers-white-front.jpg",
//           "https://example.com/images/sneakers-white-back.jpg",
//         ],
//         price: 54.99,
//         discount: "8%",
//         sizes: [
//           { size: 7, stock: 15 },
//           { size: 8, stock: 7 },
//           { size: 9, stock: 4 },
//         ],
//         material: "Leather",
//         rating: 4.7,
//         reviewsCount: 350,
//         offers: ["15% off on purchases above $100", "Free shipping"],
//         shipping: {
//           deliveryDate: "2024-10-07",
//           shippingOptions: ["Standard Shipping", "Express Shipping"],
//           cashOnDeliveryAvailable: true,
//         },
//       },
//       {
//         variantId: 204,
//         color: "Black",
//         images: [
//           "https://example.com/images/sneakers-black-front.jpg",
//           "https://example.com/images/sneakers-black-back.jpg",
//         ],
//         price: 59.99,
//         discount: "5%",
//         sizes: [
//           { size: 7, stock: 12 },
//           { size: 8, stock: 9 },
//           { size: 9, stock: 5 },
//         ],
//         material: "Leather",
//         rating: 4.8,
//         reviewsCount: 410,
//         offers: [
//           "10% off on credit card payments",
//           "Free gift with purchase",
//         ],
//         shipping: {
//           deliveryDate: "2024-10-08",
//           shippingOptions: ["Standard Shipping"],
//           cashOnDeliveryAvailable: false,
//         },
//       },
//     ],
//   },
//   {
//     productId: 103,
//     name: "Elegant Watch",
//     brand: "Timeless",
//     basePrice: 199.99,
//     description:
//       "Luxury watch with a stainless steel strap and water resistance.",
//     variants: [
//       {
//         variantId: 205,
//         color: "Silver",
//         images: [
//           "https://example.com/images/watch-silver-front.jpg",
//           "https://example.com/images/watch-silver-back.jpg",
//         ],
//         price: 189.99,
//         discount: "10%",
//         sizes: [{ size: "Standard", stock: 3 }],
//         material: "Stainless Steel",
//         rating: 4.9,
//         reviewsCount: 120,
//         offers: ["20% off on special occasions", "Free engraving"],
//         shipping: {
//           deliveryDate: "2024-10-10",
//           shippingOptions: ["Standard Shipping", "Express Shipping"],
//           cashOnDeliveryAvailable: true,
//         },
//       },
//     ],
//   },
//   {
//     productId: 104,
//     name: "Wireless Headphones",
//     brand: "SoundMax",
//     basePrice: 79.99,
//     description:
//       "High-quality wireless headphones with noise cancellation and long battery life.",
//     variants: [
//       {
//         variantId: 206,
//         color: "Black",
//         images: [
//           "https://example.com/images/headphones-black-front.jpg",
//           "https://example.com/images/headphones-black-back.jpg",
//         ],
//         price: 74.99,
//         discount: "6%",
//         sizes: [{ size: "One Size", stock: 20 }],
//         material: "Plastic",
//         rating: 4.6,
//         reviewsCount: 500,
//         offers: ["Free carrying case", "10% off on PayPal payments"],
//         shipping: {
//           deliveryDate: "2024-10-12",
//           shippingOptions: ["Standard Shipping", "Next Day Delivery"],
//           cashOnDeliveryAvailable: true,
//         },
//       },
//     ],
//   },
//   {
//     productId: 105,
//     name: "Leather Wallet",
//     brand: "LuxuryLeather",
//     basePrice: 49.99,
//     description:
//       "Premium leather wallet with multiple compartments for cards and cash.",
//     variants: [
//       {
//         variantId: 207,
//         color: "Brown",
//         images: [
//           "https://example.com/images/wallet-brown-front.jpg",
//           "https://example.com/images/wallet-brown-back.jpg",
//         ],
//         price: 44.99,
//         discount: "10%",
//         sizes: [{ size: "One Size", stock: 25 }],
//         material: "Leather",
//         rating: 4.4,
//         reviewsCount: 80,
//         offers: [
//           "5% off on orders above $50",
//           "Free shipping on prepaid orders",
//         ],
//         shipping: {
//           deliveryDate: "2024-10-13",
//           shippingOptions: ["Standard Shipping"],
//           cashOnDeliveryAvailable: true,
//         },
//       },
//     ],
//   },
//   {
//     productId: 106,
//     name: "Gaming Mouse",
//     brand: "ProGamer",
//     basePrice: 39.99,
//     description:
//       "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
//     variants: [
//       {
//         variantId: 208,
//         color: "Black",
//         images: [
//           "https://example.com/images/mouse-black-front.jpg",
//           "https://example.com/images/mouse-black-back.jpg",
//         ],
//         price: 34.99,
//         discount: "12%",
//         sizes: [{ size: "One Size", stock: 100 }],
//         material: "Plastic",
//         rating: 4.7,
//         reviewsCount: 600,
//         offers: [
//           "15% off on gaming accessories",
//           "Extended warranty for 1 year",
//         ],
//         shipping: {
//           deliveryDate: "2024-10-15",
//           shippingOptions: ["Standard Shipping", "Express Shipping"],
//           cashOnDeliveryAvailable: false,
//         },
//       },
//     ],
//   },
// ];


 const productDataList = [
  {
    productId: 101,
    name: 'Premium T-Shirt',
    brand: 'FashionHub',
    basePrice: 29.99,
    description:
      'High-quality cotton t-shirt available in multiple colors and sizes.',
    variants: [
      {
        variantId: 201,
        color: 'Red',
        images: [
          'https://m.media-amazon.com/images/I/61c28tgYgbL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/61fEneQhvDL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/61LS3798NKL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/61lGW6PgJrL._SY879_.jpg'
                    ],
        price: 28.99,
        discount: '5%',
        sizes: [
          { size: 'S', stock: 10 },
          { size: 'M', stock: 5 },
          { size: 'L', stock: 2 },
          { size: 'XL', stock: 2 },
          { size: 'XXL', stock: 0 },
        ],
        material: '100% Cotton',
        rating: 4.3,
        reviewsCount: 200,
        offers: ['10% off on credit card payments', 'Buy 2, Get 1 Free'],
        shipping: {
          deliveryDate: '2024-10-05',
          shippingOptions: ['Standard Shipping', 'Express Shipping'],
          cashOnDeliveryAvailable: true,
        },
      },
      {
        variantId: 202,
        color: 'Blue',
        images: [
          'https://m.media-amazon.com/images/I/711lr79PL0L._SY879_.jpg',
          'https://m.media-amazon.com/images/I/716auKEJ+QL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/51mwE+Z7BUL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/710e56hBukL._SY879_.jpg',
                   ],
        price: 30.99,
        discount: '3%',
        sizes: [
          { size: 'S', stock: 8 },
          { size: 'M', stock: 3 },
          { size: 'L', stock: 0 },
        ],
        material: '100% Cotton',
        rating: 3,
        reviewsCount: 180,
        offers: [
          '5% off on debit card payments',
          'Free shipping on orders above $50',
        ],
        shipping: {
          deliveryDate: '2024-10-06',
          shippingOptions: ['Standard Shipping'],
          cashOnDeliveryAvailable: false,
        },
      },
      {
        variantId: 203,
        color: 'Green',
        images: [
          'https://m.media-amazon.com/images/I/415L0zBOnQL.jpg',
          'https://m.media-amazon.com/images/I/61lLSQcVFDL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/51mwE+Z7BUL._SX679_.jpg'
         
                   ],
        price: 45,
        discount: '5%',
        sizes: [
          { size: 'S', stock: 0 },
          { size: 'M', stock: 0 },
          { size: 'L', stock: 0 },
        ],
        material: '100% Cotton',
        rating: 2.7,
        reviewsCount: 791,
        offers: [
          '5% off on debit card payments',
          'Free shipping on orders above $50',
        ],
        shipping: {
          deliveryDate: '2025-06-06',
          shippingOptions: ['Standard Shipping'],
          cashOnDeliveryAvailable: true,
        },
      },
    ],
  },
  {
    productId: 102,
    name: 'Classic Sneakers',
    brand: 'SneakerWorld',
    basePrice: 59.99,
    description: 'Stylish and comfortable sneakers with durable rubber soles.',
    variants: [
      {
        variantId: 203,
        color: 'White',
        images: [
          'https://m.media-amazon.com/images/I/71cflgAolqL._SY675_.jpg',
          'https://m.media-amazon.com/images/I/81rgoJlkVEL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61KPXjKejZL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/813fIqKMYRL._SY675_.jpg',
         
         
        ],
        price: 54.99,
        discount: '8%',
        sizes: [
          { size: 7, stock: 15 },
          { size: 8, stock: 7 },
          { size: 9, stock: 4 },
        ],
        material: 'Leather',
        rating: 4.7,
        reviewsCount: 350,
        offers: ['15% off on purchases above $100', 'Free shipping'],
        shipping: {
          deliveryDate: '2024-10-07',
          shippingOptions: ['Standard Shipping', 'Express Shipping'],
          cashOnDeliveryAvailable: true,
        },
      },
      {
        variantId: 204,
        color: 'Black',
        images: [
          'https://m.media-amazon.com/images/I/814h8isB1kL._SY675_.jpg',
          'https://m.media-amazon.com/images/I/8199ruLR+DL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/613sj9P+WIL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/818gJ+y2KtL._SY675_.jpg',
          'https://m.media-amazon.com/images/I/711JW41t-aL._SY675_.jpg',
      
        ],
        price: 59.99,
        discount: '5%',
        sizes: [
          { size: 7, stock: 12 },
          { size: 8, stock: 9 },
          { size: 9, stock: 5 },
        ],
        material: 'Leather',
        rating: 4.8,
        reviewsCount: 410,
        offers: ['10% off on credit card payments', 'Free gift with purchase'],
        shipping: {
          deliveryDate: '2024-10-08',
          shippingOptions: ['Standard Shipping'],
          cashOnDeliveryAvailable: false,
        },
      },
    ],
  },
  {
    productId: 103,
    name: 'Elegant Watch',
    brand: 'Timeless',
    basePrice: 199.99,
    description:
      'Luxury watch with a stainless steel strap and water resistance.',
    variants: [
      {
        variantId: 205,
        color: 'Silver',
        images: [
          'https://m.media-amazon.com/images/I/81nj6IlZpVL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/716QkxqyjbL._SY879_.jpg',
          'https://m.media-amazon.com/images/I/81b4XCIqYxL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/71I6o5I8jQL._SX679_.jpg'
        ],
        price: 189.99,
        discount: '10%',
        sizes: [{ size: 'Standard', stock: 3 }],
        material: 'Stainless Steel',
        rating: 4.9,
        reviewsCount: 120,
        offers: ['20% off on special occasions', 'Free engraving'],
        shipping: {
          deliveryDate: '2024-10-10',
          shippingOptions: ['Standard Shipping', 'Express Shipping'],
          cashOnDeliveryAvailable: true,
        },
      },
    ],
  },
  {
    productId: 104,
    name: 'Wireless Headphones',
    brand: 'SoundMax',
    basePrice: 79.99,
    description:
      'High-quality wireless headphones with noise cancellation and long battery life.',
    variants: [
      {
        variantId: 206,
        color: 'Blue',
        images: [
          'https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/71rtP9TUGdL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/71uZcrr+bjL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/41UOdd95lWL._SP432,466,0%7C41QCWZBaUGL.jpg,413KlMyqqQL.jpg,41VaiGzon4L.jpg,41avAgO3WzL.jpg,41+5pjtW0DL.jpg_.jpg'

        ],
        price: 74.99,
        discount: '6%',
        sizes: [{ size: 'One Size', stock: 20 }],
        material: 'Plastic',
        rating: 4.6,
        reviewsCount: 500,
        offers: ['Free carrying case', '10% off on PayPal payments'],
        shipping: {
          deliveryDate: '2024-10-12',
          shippingOptions: ['Standard Shipping', 'Next Day Delivery'],
          cashOnDeliveryAvailable: true,
        },
      },
    ],
  },
  {
    productId: 105,
    name: 'Leather Wallet',
    brand: 'LuxuryLeather',
    basePrice: 49.99,
    description:
      'Premium leather wallet with multiple compartments for cards and cash.',
    variants: [
      {
        variantId: 207,
        color: 'Brown',
        images: [
          'https://m.media-amazon.com/images/I/41gaN+wWVUL._SY300_SX300_.jpg',
          'https://m.media-amazon.com/images/I/81geetmzydL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/71uSzs0tJDL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/71NLqQWQxnL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81NQhT8B2-L._SX679_.jpg'
        ],
        price: 44.99,
        discount: '10%',
        sizes: [{ size: 'One Size', stock: 25 }],
        material: 'Leather',
        rating: 4.4,
        reviewsCount: 80,
        offers: [
          '5% off on orders above $50',
          'Free shipping on prepaid orders',
        ],
        shipping: {
          deliveryDate: '2024-10-13',
          shippingOptions: ['Standard Shipping'],
          cashOnDeliveryAvailable: true,
        },
      },
    ],
  },
  {
    productId: 106,
    name: 'Gaming Mouse',
    brand: 'ProGamer',
    basePrice: 39.99,
    description:
      'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
    variants: [
      {
        variantId: 208,
        color: 'Black',
        images: [
          'https://m.media-amazon.com/images/I/51UtqOFkheL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/611RquOSq3L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/611RquOSq3L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/618OmELu3UL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/61g9gxAA7FL._SX679_.jpg',
 
        ],
        price: 34.99,
        discount: '12%',
        sizes: [{ size: 'One Size', stock: 100 }],
        material: 'Plastic',
        rating: 4.7,
        reviewsCount: 600,
        offers: [
          '15% off on gaming accessories',
          'Extended warranty for 1 year',
        ],
        shipping: {
          deliveryDate: '2024-10-15',
          shippingOptions: ['Standard Shipping', 'Express Shipping'],
          cashOnDeliveryAvailable: false,
        },
      },
    ],
  },
];



const ProductListings = () => {
  const { addToWishlist } = useWishlist();

  const sortedProducts = productDataList.map(product => ({
    id: product.productId,
    name: product.name,
    brand: product.brand,
    basePrice: product.basePrice,
    price: product.price,
    discount: product.variants[0].discount,
    variants: product.variants,
    description: product.description,
    productId: product.productId,
    images: product.variants[0].images[0],
  }));


  console.log("00000000000000000000000000000000000", sortedProducts.map(p => p.variants)); // Logs all variants arrays
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      p={4}
      mx={10}
      spacing={10}
    >
      {/* Filters and Sorting on the left */}
      <Box flex={{ base: 'none', lg: '1' }} mb={{ base: 4, lg: 0 }}>
        <Filters />
        <Sorting />
      </Box>

      {/* Products display area */}
      <Box flex="2">
        <Box mt={0} mx={1}>
          <SimpleGrid 
            columns={{ base: 2, sm: 2, md: 2, lg: 3, xl: 4 }} // Adjusted for extra-large screens
            spacing={{ base: 4, sm: 6, md: 8, lg: 10 }} // Responsive spacing
          >
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={{ ...product, variants: product.variants }} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductListings;