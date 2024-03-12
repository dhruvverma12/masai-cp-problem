// Import Pagination at the top of Products.jsx
import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import Product from "./Product";
import Pagination from "./Pagination"; // Ensure you have this import statement
import styles from "./Products.module.css";

const Products = ({ data, setPage, setLimit }) => {
  return (
    <Flex>
      <Grid className={styles.grid}>
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Grid>
      <Pagination setPage={setPage} setLimit={setLimit} />
    </Flex>
  );
};

export default Products;
