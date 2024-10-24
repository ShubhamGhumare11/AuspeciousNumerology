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
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";

import { FaCircle, FaCartPlus, FaHeart, FaTags } from "react-icons/fa";
import { FaMoneyBillWave, FaExchangeAlt, FaTruck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext"; // Adjust the path accordingly

function ProductDetail() {
  const { id } = useParams();

  // // Sample product data
  // const productData = [
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
  //           { size: "XL", stock: 2 },
  //           { size: "XXL", stock: 0 },
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
  //       {
  //         variantId: 203,
  //         color: "pink",
  //         images: [
  //           "https://m.media-amazon.com/images/I/618Wek95laS._SY879_.jpg",
  //           "https://m.media-amazon.com/images/I/61hq+LfAdOS._SY741_.jpg",
  //           "https://m.media-amazon.com/images/I/51V2gEYvc8S._SY741_.jpg",
  //           "https://m.media-amazon.com/images/I/51PRAkh5OtS._SY741_.jpg",
  //           "https://m.media-amazon.com/images/I/71ZKcnsNHRS._SY741_.jpg",
  //           "https://m.media-amazon.com/images/I/81rOnPwPDoL._SY741_.jpg",
  //         ],
  //         price: 45,
  //         discount: "5%",
  //         sizes: [
  //           { size: "S", stock: 0 },
  //           { size: "M", stock: 0 },
  //           { size: "L", stock: 0 },
  //         ],
  //         material: "100% Cotton",
  //         rating: 2.7,
  //         reviewsCount: 791,
  //         offers: [
  //           "5% off on debit card payments",
  //           "Free shipping on orders above $50",
  //         ],
  //         shipping: {
  //           deliveryDate: "2025-06-06",
  //           shippingOptions: ["Standard Shipping"],
  //           cashOnDeliveryAvailable: true,
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










  // ProductList


   const productData = [
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



  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImage, setCurrentImage] = useState(null);
  const [pincode, setPincode] = useState("");
  const [availabilityDeliveryMessage, setAvailabilityDeliveryMessage] =
    useState("");
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState("");
  const { addToWishlist, removeFromWishlist, wishlistItems, isInWishlist } =
    useWishlist();
  const { addToCart, isInCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  console.log("wishlist items" + wishlistItems);
  useEffect(() => {
    // Find the product based on the productId from URL
    const product = productData.find(
      (product) => product.productId === parseInt(id)
    );

    if (product) {
      setSelectedProduct(product);
      setCurrentImage(product.variants[0].images[0]);
      setSelectedVariant(product.variants[0]);
      setSelectedSize(product.variants[0].sizes[0].size);
    }
    console.log("selevcted varient in useeffect..." + selectedVariant);
  }, [id]);

  const handleColorChange = (color) => {
    const variant = selectedProduct.variants.find(
      (variant) => variant.color === color
    );
    if (variant) {
      setCurrentImage(variant.images[0]);

      setSelectedVariant(variant);
      setSelectedSize(variant.sizes[0].size);
    }

    console.log("selevcted varient in handleColorChange..." + selectedVariant);
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

  const toggleFavorite = () => {
    console.log("Selected Product ID:", selectedProduct.productId);
    console.log("Selected Variant ID:", selectedVariant?.variantId);
    console.log("Selected Variant:", selectedVariant);
    // Check if the current product variant combination is in the wishlist
    if (isInWishlist(selectedProduct.productId, selectedVariant.variantId)) {
      console.log("Removing from wishlist");
      removeFromWishlist(selectedProduct.productId, selectedVariant.variantId);
    } else {
      console.log("Adding to wishlist");
      const wishlistItem = {
        ...selectedProduct,
        // productId: selectedProduct.productId,
        // name: selectedProduct.name,
        // brand: selectedProduct.brand,
        // basePrice: selectedProduct.basePrice,
        // description: selectedProduct.description,
        ...selectedVariant, // Include the current variant in the wishlist item
        selectedSize, // Include the selected size
        // Store the unique identifier for easy lookup
      };
      addToWishlist(wishlistItem);

      console.log("Current wishlist items:", wishlistItems);
    }
  };

  const handleAddToCart = (e) => {
    // e.stopPropagation();
    if (isInCart(selectedProduct.productId, selectedVariant.variantId)) {
      navigate("/cartitem");
    } else {
      const cartItem = {
        ...selectedProduct,
        ...selectedVariant,
      };

      addToCart(cartItem);
    }
  };

  if (!selectedProduct || !selectedVariant) {
    return <Text>Loading...</Text>;
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
          flex="1"
          // maxH="500px"
          overflowY="auto"
          p={4}
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
                opacity={size.stock === 0 ? 0.5 : 1}
                onClick={() => setSelectedSize(size.size)}
                width="20px"
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
                }
                cursor="pointer"
                p={1}
                onClick={() => handleColorChange(variant.color)}
                borderRadius="md"
                position="relative"
              >
                <Image
                  src={variant.images}
                  alt={variant.color}
                  boxSize={8}
                  objectFit="cover"
                  borderRadius="md"
                />
              </Box>
            ))}
          </Stack>

          {/* Add to Cart / Favorite */}
          <Stack direction="row" spacing={8} mb={6} mt={6}>
            <Button
              leftIcon={<FaCartPlus />}
              bg={
                isInCart(selectedProduct.productId, selectedVariant.variantId)
                  ? "grey"
                  : "teal.500"
              }
              variant="solid"
              // fontSize="0.75rem"
              size="lg"
              width="350px" //
              onClick={(e) => {
                e.preventDefault(); // Prevent default action
                e.stopPropagation(); // Prevent event bubbling
                handleAddToCart();
              }}
              isDisabled={selectedVariant.sizes.every(
                (size) => size.stock === 0
              )}
            >
             {isInCart(selectedProduct.productId, selectedVariant.variantId)
              ? "Go to Cart"
              : "Add to Cart"}{" "}
            </Button>

            <Button
              leftIcon={<FaHeart />}
              colorScheme={
                isInWishlist(
                  selectedProduct.productId,
                  selectedVariant.variantId
                )
                  ? "pink"
                  : "gray"
              }
              variant="outline"
              size="lg"
              width="250px" //
              onClick={toggleFavorite}
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
                h="40px"
                _hover={{ borderBottom: "2px solid #d53f8c" }}
                _focus={{ borderBottom: "2px solid #d53f8c", bg: "blue.100" }}
                transition="all 0.2s ease-in-out"
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
            direction={{ base: "column", md: "row" }}
            spacing={4}
            mt={4}
            wrap="wrap"
            justify="flex-start"
            align="center"
          >
            {/* Card 1: Cash on Delivery */}
            <Box
              borderWidth="1px"
              borderRadius="md"
              p={2}
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
                Deliver By
                <br />
                {selectedVariant.shipping.deliveryDate}
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
