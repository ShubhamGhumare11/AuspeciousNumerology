import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box mt="100px"> {/* Adjust this value according to your Navbar height */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
