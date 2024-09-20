// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import CategoryBar from "./components/CategoryBar";
// import BestSellers from "./components/BestSeller";
// import Banner from "./components/Banner";

// import ProductListings from "./components/ProductListings";
// import Footer from "./components/Footer";
// import LiveShopping from "./components/LiveShoppingPage";
// // import ShopByCategory from "./components/ShopByCategory";
// import ProductCard1 from "./components/Cards/ProductCard1";
// import ProductCarousel1 from "./components/Cards/ProductCarousel1";
// import SampleProductCard1 from "./components/Cards/SampleProductCard1";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Card1 from "./components/Cards/Card1";
// import ProductListing from "./components/ProductListings";

// import ProductDetail from "./components/Cards/ProductCard1";

// function App() {
//   return (
//     <div>
//       {/* <Router>
//         <Routes>
//           <Route path="/" element={<Navbar />} />
//           <Route exact path="/productListing" element={<ProductListings />} />

//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </Router> */}


//       <Router>
//         <Navbar /> {/* Ensure Navbar is outside of Routes if it should be always visible */}
//         <CategoryBar />
//       <Banner />
//       <BestSellers />
//       <ProductListings />
//       <LiveShopping />
//       <Footer />
//       <ProductCard1 />
//       <ProductCarousel1 />
//       <SampleProductCard1 />
//       {/* <ShopByCategory /> */}
//       <Card1 />


//       <Routes>
//           {/* Route for the product listing page */}
//           <Route path="/" element={<ProductListings />} />
          

//           {/* Route for the product detail page, passing the product ID */}
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>


//       </Router>

      
   
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import BestSellers from "./components/BestSeller";
import Banner from "./components/Banner";
import ProductListings from "./components/ProductListings";
import Footer from "./components/Footer";
import LiveShopping from "./components/LiveShoppingPage";
import ProductCard1 from "./components/Cards/ProductCard1";
import ProductCarousel1 from "./components/Cards/ProductCarousel1";
import SampleProductCard1 from "./components/Cards/SampleProductCard1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card1 from "./components/Cards/Card1";
import ProductDetail from "./components/Cards/ProductCard1";
import Layout from "./components/Layout";


function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}


      <Layout>
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            <>
              <CategoryBar />
              <Banner />
              <BestSellers />
              <ProductListings />
              <LiveShopping />
              <Footer />
            </>
          }
        />

        {/* Route for the product detail page */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Route for the product listings page */}
        <Route path="/productListing" element={<ProductListings />} />
      </Routes>

      {/* Common components that you want to appear everywhere */}
      {/* <ProductCard1 />
      <ProductCarousel1 />
      <SampleProductCard1 />
      <Card1 /> */}



      </Layout>
    </Router>
  );
}

export default App;

