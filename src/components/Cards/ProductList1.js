import React from 'react';
  
  const ProductList1 = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default ProductList1;
  // import React from 'react';
  
// import { SimpleGrid } from "@chakra-ui/react";
// import ProductCard1 from "./ProductCard1";

// const products = [
//   {
//     name: "Pattern Mini-dress",
//     image: "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?auto=format&fit=crop&w=872&q=80",
//     price: 48.99,
//     reviews: 20
//   },
//   {
//     name: "Midi Skater Dress",
//     image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=892&q=80",
//     price: 199.99,
//     reviews: 15
//   }
// ];

// const ProductList = () => {
//   return (
//     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
//       {products.map((product, index) => (
//         <ProductCard1 key={index} product={product} />
//       ))}
//     </SimpleGrid>../ProductCard1
//   );
// };

// export default ProductList;



import React from 'react';
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard1 from "./ProductCard1";

// const products = [
//   {
//     name: "Pattern Mini-dress",
//     image: "https://images.unsplash.com/photo-1630759072462-d5348e577ee8?auto=format&fit=crop&w=872&q=80",
//     price: 48.99,
//     reviews: 20
//   },
//   {
//     name: "Midi Skater Dress",
//     image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=892&q=80",
//     price: 199.99,
//     review: 15
//   }
// ];











// const ProductList1 = () => {

//   const [Products, setProducts] = useState([]);

//   const products = [
//     {
//       id: 1,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 1',
//       price: '29.99',
//       review: '4.5',
//     },
//     {
//       id: 2,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 2',
//       price: '19.99',
//       review: '4.0',
//     },
//     {
//       id: 3,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 3',
//       price: '39.99',
//       review: '4.8',
//     },
//     {
//       id: 4,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 4',
//       price: '24.99',
//       review: '4.3',
//     },
//     {
//       id: 5,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 4',
//       price: '24.99',
//       review: '4.3',
//     },
//     {
//       id: 6,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 4',
//       price: '24.99',
//       review: '4.3',
//     },
//     {
//       id: 7,
//       imageUrl: 'https://via.placeholder.com/200',
//       title: 'Product 4',
//       price: '24.99',
//       review: '4.3',
//     },
//   ];

//   useEffect(() => {
//     // Logic to sort products
//     setProducts(products); // Add sorting logic if needed
//   }, []);
//   return (
//     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
//       {products.map((product, index) => (
//         <ProductCard1 key={index} product={product} />
//       ))}
//     </SimpleGrid>
//   );
// };

// export default ProductList1;
